import { Menu } from "../../components/Menu";
import { SocialMedia } from "../../components/Social";
import github from "/src/assets/icons/github.svg";
import google from "/src/assets/icons/google2.svg";
import linkedin from "/src/assets/icons/linkedin.svg";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { githubLink, linkedinLink, gmailLink } from "../../../links";

gsap.registerPlugin(useGSAP);

export const Banner = () => {
  const menu = useRef(null);
  const [activeOverlay, setActiveOverlay] = useState(false);
  const { contextSafe } = useGSAP({ scope: menu });
  const onToggleMenu = contextSafe(() => {
    gsap.to(menu.current, { x: 345, onStart: () => setActiveOverlay(true) });
  });

  return (
    <>
      <Menu
        menuRef={menu}
        isActiveOverlay={activeOverlay}
        changeActiveOverlay={setActiveOverlay}
      />

      <SocialMedia
        icons={[
          { icon: github, link: githubLink },
          { icon: google, link: gmailLink },
          { icon: linkedin, link: linkedinLink },
        ]}
      />
      <section className="bg-[url(./assets/main-photo.png)] bg-cover bg-center bg-no-repeat min-h-screen ">
        <button
          onClick={onToggleMenu}
          className="h-[22px] flex flex-col items-end justify-between fixed top-[20px] max-md:right-[20px] right-[30px] cursor-pointer"
        >
          <span className="h-[3px] w-[30px] bg-zinc-950"></span>
          <span className="h-[3px] w-[33px] bg-zinc-950"></span>
          <span className="h-[3px] w-[30px] bg-zinc-950"></span>
        </button>

        <div className="max-sm:w-full max-md:w-[540px] max-lg:w-[720px] xl:w-[1140px] mx-auto my-0 pt-[200px] xl:px-[0] px-[15px]">
          <div className="max-md:w-auto w-[600px]">
            <div className="w-[200px] text-base font-[Poppins] font-bold text-white relative left-[16px] z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:-left-[16px] before:-top-[5px]">
              My name is Lee Roman
            </div>
            <h1 className="font-[Poppins] max-md:text-3xl text-5xl text-white max-md:leading-[39px] leading-[60px] font-bold mt-[20px]">
              I'm a passionate full-stack developer from Ukraine
            </h1>
            <div className="flex mt-[33px]">
              <button className="font-bold font-[Poppins] text-sm block w-[135px] h-[45px] bg-amber-400 cursor-pointer text-center">
                Portfolio
              </button>
              <button className="font-bold font-[Poppins] text-sm block w-[135px] h-[45px] cursor-pointer text-center ml-[10px]">
                About me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
