import noimageIcon from "../../assets/no-image.jpg";
import welinguaIcon from '../../assets/projects/welingua.png';
import casecobraIcon from '../../assets/projects/casecobra.png';
import discordCloneIcon from '../../assets/projects/discord-clone.jpg';

export const MyWorks = () => {
  return (
    <section>
      <div className="max-sm:w-full max-md:w-[540px] max-lg:w-[720px] xl:w-[1140px] mx-auto my-0 max-md:pt-[40px] pt-[200px] max-sm:px-[10px] xl:px-[0] px-[15px]">
        <h2 id="works" className="w-[200px] mx-auto text-center font-bold text-base font-[Poppins] relative z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:left-[48px] before:-top-[5px]">Portfolio</h2>
        <span className="max-md:mt-[30px] max-md:leading-[45px] block font-bold text-4xl font-[Poppins] leading-[60px] text-center">My works</span>
        <div className="h-[3px] w-[60px] bg-amber-400 mx-auto mt-[22px]"></div>
        <ul className="grid mx-auto max-xl:grid-cols-[repeat(auto-fit,280px)] grid-cols-[repeat(4,280px)] max-xl:justify-center mt-[60px] max-xl:auto-rows-[280px] grid-rows-[repeat(2,280px)] gap-[5px]">
          <li>
            <a href="https://germany-courses-3.vercel.app/de/speaking-club" target="_blank">
              <img className="w-full h-full object-cover" src={welinguaIcon} alt="work icon" />
            </a>
          </li>
          <li>
            <a href="https://casecobra-pet.vercel.app/" target="_blank">
              <img className="w-full h-full object-cover" src={casecobraIcon} alt="work icon" />
            </a>
          </li>
          <li>
            <a href="https://velmor99.github.io/discord-frontend/" target="_blank">
              <img className="w-full h-full object-cover" src={discordCloneIcon} alt="work icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-full h-full" src={noimageIcon} alt="work icon" />
            </a>
          </li>
          <li className="xl:row-span-full xl:col-[4]">
            <a href="#">
              <img className="w-full h-full" src={noimageIcon} alt="work icon" />
            </a>
          </li>
          <li className="xl:col-start-2 xl:col-end-4">
            <a href="#">
              <img className="w-full h-full" src={noimageIcon} alt="work icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
