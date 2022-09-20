import { AiOutlineMenu } from "react-icons/ai"
import { ImCross } from "react-icons/im"
import {HtmlHTMLAttributes, useEffect, useRef, useState} from "react"
function Hero() {
    const [modalMenuOn, setModalMenuOn] = useState<Boolean>(false)    
    const [modalOffScreenStyle, setModalOffScreenStyle] = useState<string>('') 
    // Using seperate opacity state to prevent initial loading popup
    const [opacityModal, setOpacityModal] = useState('')
    
    const offScreenMenuStyle = "translate-x-[80vw]"

    useEffect(() => {
        if (modalMenuOn) {
            setModalOffScreenStyle('')
            setOpacityModal("10")
        } else {
            setModalOffScreenStyle(offScreenMenuStyle)
            setOpacityModal('')
        }
    }, [modalMenuOn])

    // Open modal onClick event
    const openModalMenu = () => {
        setModalMenuOn(true)
        console.log(modalMenuOn)
    }
    
    const closeModalMenu = () => {
        setModalMenuOn(false)
        console.log(modalMenuOn)
    }

    return (
    <>
    <div className={`fixed top-0 right-0 z-10 transition-all duration-700 ease-out opacity-${opacityModal}0 ${modalOffScreenStyle}`}>
        <div className="relative w-[80vw] h-[100vh] ">
                {/* Blur background */}
            <div className="w-[100%] h-[100%] z-10 absolute top-0 left-0 bg-slate-300/30 "></div>


            {/* Menu */}
            <div className="w-[100%] h-[100%] z-20 flex flex-col absolute top-0 left-0 backdrop-menu-blur">
                <div className="flex py-8 justify-center items-center">
                    <h1 className="text-2xl font-semibold">Menu</h1>
                </div>
                <div className="absolute left-0 py-8 pl-3 flex items-end">
                    <ImCross className="visible hover:fill-red-700 cursor-pointer" onClick={closeModalMenu} />
                </div>
                <div className="flex flex-col">
                    <a href="" className="py-6 pl-3 font-semibold translate">Početna</a>
                    <a href="" className="py-6 pl-3 font-semibold">O nama</a>
                    <a href="" className="py-6 pl-3 font-semibold">Usluge</a>
                    <a href="" className="py-6 pl-3 font-semibold">Kontakt</a>
                </div>
            </div>
        </div>
    </div>
    <section className="w-[100vw] h-[100vh] max-w-[100%] relative flex justify-center">
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
                    <AiOutlineMenu color="#60E1CB" onClick={openModalMenu} />
                </div>
            </div>

            {/* Main hero flex */}
            <div className="w-[100%] md:h-[60%] md:mt-32 mt-10 flex md:flex-row flex-col">
                {/* Hero - cta */}
                <div className="md:w-[50%] md:h-[100%] h-[50%] w-[100%] flex flex-col space-y-8 md:space-y-6">
                    {/* Header */}
                    <div className=" w-[100%] relative">
                        <div className="w-[100px] h-[3px] bg-[#60E1CB] absolute top-0 left-0 mt-[-5px]">

                        </div>
                        <h1 className="md:text-4xl text-2xl font-semibold">Za <span className="text-[#60E1CB]">brže</span> i <span className="text-[#60E1CB]">sigurnije</span><br/>poslovanje</h1>
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
                <div className="md:w-[50%] md:h-[100%] h-[50%] w-[100%] justify-center items-center overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-8 -mt-12 md:block">
                        <img src="/circle-light.svg" alt="circle" className="w-[300px] h-[300px]" />
                    </div>
                    <img src="/hero-1.png" alt="Hero" className="md:w-[100%] md:h-auto h-[100%] w-auto md:mt-[-28px]"/>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 -ml-5 -mb-0 md:block hidden">
            <img src="/circle-light.svg" alt="circle" className="w-[300px] h-[300px]" />
        </div>
    </section>
  
    </>)
}

export default Hero