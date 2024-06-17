import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import AOS from "aos";
import { useEffect } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full max-sm:pt-5">
      <nav className="flex justify-between items-center max-container ">
        <a href="/" className="max-lg:absolute max-lg:pt-12">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <div className="absolute h-screen max-sm:w-full w-[90%] max-sm:top-5 top-8">
          <div
            onClick={handleNav}
            className="absolute lg:hidden text-3xl right-8 max-sm:right-9"
          >
            <ion-icon name={nav ? "close" : "menu"}></ion-icon>
          </div>
          {nav ? (
            <div
              className="absolute top-24 max-sm:right-12 right-20 w-[50%] flex-col"
              data-aos="fade-left"
            >
              <ul className="pt-5 pb-5 w-full bg-coral-red flex flex-col justify-center items-center z-20">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      onClick={handleNav}
                      href={item.href}
                      className="w-full flex align-top  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-montserrat leading-
                            normal text-lg text-white-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
