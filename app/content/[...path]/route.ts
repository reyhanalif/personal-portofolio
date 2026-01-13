import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import mime from 'mime';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    try {
        // Await params as required in Next.js 15
        const resolvedParams = await params;
        const filePath = path.join(process.cwd(), 'content', ...resolvedParams.path);

        // Security check: Ensure path is within content directory
        const resolvedPath = path.resolve(filePath);
        const contentDir = path.resolve(path.join(process.cwd(), 'content'));

        if (!resolvedPath.startsWith(contentDir)) {
            return new NextResponse('Forbidden', { status: 403 });
        }

        // Check if file exists
        try {
            await fs.access(filePath);
        } catch {
            return new NextResponse('File not found', { status: 404 });
        }

        // Read file asynchronously
        const fileBuffer = await fs.readFile(filePath);
        const contentType = mime.getType(filePath) || 'application/octet-stream';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving file:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
