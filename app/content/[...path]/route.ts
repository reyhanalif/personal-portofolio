import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import mime from 'mime';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    // Await params as required in Next.js 15
    const resolvedParams = await params;
    const filePath = path.join(process.cwd(), 'content', ...resolvedParams.path);

    // Security check: Ensure path is within content directory
    const resolvedPath = path.resolve(filePath);
    const contentDir = path.resolve(path.join(process.cwd(), 'content'));

    if (!resolvedPath.startsWith(contentDir)) {
        return new NextResponse('Forbidden', { status: 403 });
    }

    if (!fs.existsSync(filePath)) {
        return new NextResponse('File not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const contentType = mime.getType(filePath) || 'application/octet-stream';

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
