// app/(photos)/layout.jsx

export default function PhotosLayout({ children }) {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white shadow-sm">
                <nav className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold text-gray-800">My Awesome Photos</h1>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}