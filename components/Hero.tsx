import { AiOutlineMenu } from "react-icons/ai"

function Hero() {
  return (
    <section className="w-[100vw] h-[100vh] max-w-[100%] flex justify-center transition-all duration-150">
        <div className=" w-[85%] h-[100%]">
            {/* Top section */}
            <div className="w-[100%] h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="w-[30%] h-[90%] items-center justify-start flex flex-row">
                    <img src="/abordage-logo.svg" alt="Logo" className="h-[100%] w-auto" />

                    <h1 className="ml-[-30px] text-[#60E1CB] text-2xl font-bold ">ABORDAGE</h1>
                </div>

                {/* Navbar */}
                <div className="w-[40%] h-[90%] ml-6 lg:flex justify-between items-center hidden">
                    <a href="" className="font-semibold">Početna</a>
                    <a href="" className="font-semibold text-[#60E1CB]">O nama</a>
                    <a href="" className="font-semibold text-[#60E1CB]">Usluge</a>
                    <a href="" className="font-semibold text-[#60E1CB]">Kontakt</a>
                </div>
                <div className="h-[90%] flex justify-center items-center lg:hidden">
                    <AiOutlineMenu color="#60E1CB" />
                </div>
            </div>

            {/* Main hero flex */}
            <div className="w-[100%] md:h-[60%] mt-32 flex md:flex-row">
                {/* Hero - cta */}
                <div className="md:w-[50%] md:h-[100%] flex flex-col md:space-y-6">
                    {/* Header */}
                    <div className=" w-[100%] relative">
                        <div className="w-[100px] h-[3px] bg-[#60E1CB] absolute top-0 left-0 mt-[-5px]">

                        </div>
                        <h1 className="md:text-4xl font-semibold">Za <span className="text-[#60E1CB]">brže</span> i <span className="text-[#60E1CB]">sigurnije</span><br/>poslovanje</h1>
                    </div>

                    <div className="w-[100%] text-justify flex items-center">
                        <p className="block">U vremenu gdje je komunikacija sa klijentima ključ biznisa, a prijetnje vrebaju na svakom online i offline uglu, Abordage Vam pruža priliku da bezbjedno uspostavite svoje online prisustvo, i
nizom usluga poboljša i ubrza Vaše poslovanje.</p>                        
                    </div>

                    <div className="h-[30%] w-[100%] flex flex-row space-x-2">
                        <div>
                            <button className="font-[550] bg-[#60E1CB] px-8 py-2 rounded-full text-white cta-button">Započnite</button>
                        </div>
                        <div>
                            <button className="font-[550] bg-white px-8 py-2 rounded-full border border-gray-400 border-solid text-[#60E1CB] block-inline">Kontaktirajte nas</button>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="w-[50%] h-[100%] center justify-center items-center">
                    <img src="/hero-1.png" alt="Hero" className="w-[100%] h-auto mt-[-28px]"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero