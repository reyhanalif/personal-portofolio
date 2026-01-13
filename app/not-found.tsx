import Link from 'next/link';
import Navbar from './components/Navbar';

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-paper">
            <Navbar />
            <div className="pt-32 pb-20 px-6 text-center max-w-2xl mx-auto">
                <h1 className="text-8xl font-bold text-ink mb-4">404</h1>
                <p className="text-2xl text-pencil mb-8">Page not found</p>
                <p className="text-pencil mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link 
                    href="/" 
                    className="inline-block px-8 py-3 bg-ink text-white rounded-xl hover:bg-pencil transition-colors font-medium"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
