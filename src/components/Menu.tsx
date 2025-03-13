// import { SocialMedia } from "./Social"
import close from "../assets/icons/close.svg";
import github from "/src/assets/icons/github.svg";
import google from "/src/assets/icons/google2.svg";
import linkedin from "/src/assets/icons/linkedin.svg";
import { links } from "../../links";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useRef } from "react";

gsap.registerPlugin(useGSAP);

export const Menu = ({menuRef, isActiveOverlay, changeActiveOverlay}: {menuRef: null | RefObject<HTMLDivElement>, isActiveOverlay: boolean, changeActiveOverlay: (value: boolean) => void}) => {
  const { contextSafe } = useGSAP({ scope: menuRef ? menuRef : "" });
  const overlay = useRef(null);


  const onToggleMenu = contextSafe(() => {
    if(menuRef)
    gsap.to(menuRef.current, { x: 0, onStart: () => changeActiveOverlay(false) });
  });


  return (
    <div>
      <div
        ref={menuRef}
        className="h-screen -left-[345px] max-md:w-[250px] w-[345px] bg-amber-500 z-10 fixed pt-[140px] pl-[40px] menu"
      >
        <button
          onClick={onToggleMenu}
          className="cursor-pointer absolute top-[24px] right-[25px]"
        >
          <img src={close} alt="close menu" />
        </button>
        <ul className="max-md:pl-[20px] pl-[35px]">
          {links.map((link, index) => (
            <li key={index} className="relative">
              <a
                className="font-bold max-md:text-xl text-2xl font-[Poppins] leading-[36px] text-white mb-[15px] block relative before:absolute before:h-[15px] before:w-[15px] before:block before:rounded-full before:border-[1px] before:border-black before:-left-[35px] before:top-[10px]"
                href={link.href}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* <SocialMedia /> */}
        <div className="flex absolute bottom-[50px] w-[90px] justify-between mb-[50px] left-[50%] -translate-x-[50%]">
          <a className="block w-[20px] h-[20px]" href="#">
            <img src={github} alt="social icon" />
          </a>
          <a className="block w-[20px] h-[20px]" href="#">
            <img src={google} alt="social icon" />
          </a>
          <a className="block w-[20px] h-[20px]" href="#">
            <img src={linkedin} alt="social icon" />
          </a>
        </div>
      </div>
      {isActiveOverlay && <div ref={overlay} className="fixed top-0 left-0 w-[100%] h-[100%] opacity-75 z-9 bg-white"></div>}
    </div>
  );
};
