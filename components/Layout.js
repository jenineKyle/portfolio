import NavBar from '../components/NavBar'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col max-h-screen bg-gray-100 text-gray-900">
            {/* Fixed Navbar */}
            <NavBar />

            {/* Main Content - Add Padding to Prevent Overlap */}
            <main className="h-[calc(100vh - 80px)] pt-[80px] overflow-auto ">
                {children}
            </main>
        </div>
    );
}
