export default function Navbar(){
    return (
        <nav className="bg-white border-b sticky tpop-0 z-40">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <h1 className="text-xl font-bold text-blue-600">
                    INTERNSHALA

                </h1>
                <div className="hidden md:flex items-center gap-8 text-gray-700">
                    <button className="font-medium border-b-2 border-blue-500 pb-1">
                        Internships

                    </button>
                    <button>Jobs</button>

                </div>
                <div className="md:hidden text-xl">
                    ☰


                </div>

            </div>

        </nav>
    );
}