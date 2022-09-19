
function Hero() {
  return (
    <section className="w-[100vw] h-[100vh] bg-slate-600 max-w-[100%] flex justify-center">
        <div className="bg-slate-500 w-[85%] h-[100%]">
            {/* Top section */}
            <div className="w-[100%] h-20 bg-slate-400 flex items-center justify-between">
                {/* Logo */}
                <div className="w-[30%] h-[90%] bg-slate-300">
                    LOGO
                </div>

                {/* Navbar */}
                <div className="w-[40%] h-[90%] bg-slate-300 ml-6">
                    NAVBAR
                </div>
            </div>

            {/* Main hero flex */}
            <div className="w-[100%] h-[60%] bg-slate-400 mt-24 flex">
                {/* Hero - cta */}
                <div className="w-[50%] h-[100%] bg-slate-300 flex flex-col justify-between">
                    {/* Header */}
                    <div className="h-[20%] w-[100%] bg-slate-600">
                        TITLE
                    </div>

                    <div className="h-[40%] w-[100%] bg-slate-600">
                        TEXT
                    </div>

                    <div className="h-[30%] w-[100%] bg-slate-600">
                        CALL TO ACTION
                    </div>
                </div>

                {/* Image */}
                <div className="w-[50%] h-[100%] bg-slate-200">
                    IMAGE
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero