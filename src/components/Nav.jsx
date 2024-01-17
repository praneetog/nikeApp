import { useState } from "react"
import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };


  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex flex-1 flex-wrap justify-between items-center max-container">
            <a href="/">
                <img
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                >
                </img>
            </a>
            <div>
            <div onClick={handleNav} className='flex text-3xl lg:hidden cursor-pointer hover:scale-110'>
                <ion-icon name={nav?'close':'menu'}></ion-icon>
            </div>
            {nav ? (
                <div className="flex w-screen h-screen bg-white/90 flex-col justify-center items-center">
                <ul className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="w-full flex justify-center items-center align-top rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                </ul>
                </div>
            ) : ( '' )}
            <ul className="flex-1 flex justify-center items-center
            gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat leading-
                            normal text-lg text-slate-gray hover:text-black"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    </header>
  )
}

export default Nav