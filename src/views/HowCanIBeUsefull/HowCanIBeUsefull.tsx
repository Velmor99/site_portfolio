import educationIcon from "../../assets/icons/education.svg";
import coursesCertificateIcon from "../../assets/icons/certificate.svg";
import experienceIcon from "../../assets/icons/front-end-experience.svg";
import siteExperienceIcon from "../../assets/icons/site-development.svg";

export const HowCanIBeUsefull = () => {
  return (
    <section>
      <div className="max-sm:w-full max-md:w-[540px] max-lg:w-[720px] xl:w-[1140px] mx-auto my-0 max-md:pt-[40px] pt-[200px] max-sm:px-[10px] xl:px-[0] px-[15px]">
        <h2 id="experience" className="w-[200px] mx-auto text-center font-bold text-base font-[Poppins] relative z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:left-[40px] before:-top-[5px]">
          Experience
        </h2>
        <span className="max-md:mt-[30px] max-md:leading-[45px] leading-[60px] font-bold text-4xl font-[Poppins] text-center block">
          How can I be helpful
        </span>
        <div className="h-[3px] w-[60px] bg-amber-400 mx-auto mt-[22px]"></div>

        {/* max-xl:px-[20px] px-[65px] */}
        <div className="grid max-md:grid-rows-2 max-md:gap-y-[45px] max-md:grid-cols-1 max-lg:grid-cols-[350px_350px] grid-cols-[425px_425px] max-md:w-[auto] max-lg:w-[730px] max-xl:w-[930px] w-[985px] mx-auto max-lg:gap-x-[30px] max-xl:gap-x-[80px] gap-x-[135px] pt-[60px]">
          <div>
            <h3 className="font-bold text-xl font-[Poppins] relative pl-[35px] before:h-[15px] before:w-[15px] before:rounded-full before:bg-amber-400 before:absolute before:-left-[7px] before:top-[50%] before:-translate-y-[50%]">
              Education
            </h3>
            <ul>
              <li className="relative after:w-[1px] after:h-[calc(100%+6px)] after:absolute after:-top-[7px] after:bg-black">
                <div className="relative before:h-[1px] before:w-[45px] before:absolute before:bg-black before:top-[60px]">
                  <div className="pl-[100px] pt-[45px] relative">
                    <div className="absolute top-[42px] left-[45px] z-0 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1">
                      <img
                        className="relative left-[17px] top-[14px] z-10 block w-[25px] h-[25px]"
                        src={educationIcon}
                        alt="education icon"
                      />
                    </div>
                    <h4 className="text-sm font-bold font-[Poppins] block">
                      GOIT full-stack course
                    </h4>
                    <div className="text-xs font-[Poppins] leading-[18px]">
                      (2020-2021)
                    </div>
                  </div>
                  <p className="text-xs font-[Poppins] pl-[43px] pt-[12px]">
                    Full-stack offline courses where I stydied JavaScript, HTML,
                    CSS and React, also I learnt how to develop Node.js backend
                    part using MongoDB as DBMS
                  </p>
                </div>
              </li>
              <li className="relative after:w-[1px] after:h-[calc(100%+6px)] after:absolute after:-top-[7px] after:bg-black">
                <div className="relative before:h-[1px] before:w-[45px] before:absolute before:bg-black before:top-[60px]">
                  <div className="pl-[100px] pt-[45px]">
                    <div className="absolute top-[42px] left-[45px] z-0 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1">
                      <img
                        className="relative left-[17px] top-[14px] z-10 block w-[25px] h-[25px]"
                        src={coursesCertificateIcon}
                        alt="education icon"
                      />
                    </div>
                    <h4 className="text-sm font-bold font-[Poppins] block">
                      Udemy courses cetification
                    </h4>
                    <div className="text-xs font-[Poppins] leading-[18px]">
                      (2021-now)
                    </div>
                  </div>
                  <div className="text-xs font-[Poppins] pl-[43px] pt-[12px]">
                    I have passed many courses like Python and Django, Mobile
                    development with React Navive, PostgreSQL, Vue and Nuxt
                    e.t.c. Also I created some projects that show you my
                    abilities and knowledge and I continue to upgrade my skills
                    and knowledge passing courses.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl font-[Poppins] relative pl-[35px] before:h-[15px] before:w-[15px] before:rounded-full before:bg-amber-400 before:absolute before:-left-[7px] before:top-[50%] before:-translate-y-[50%]">
              Experience
            </h3>
            <ul>
              <li className="relative after:w-[1px] after:h-[calc(100%+6px)] after:absolute after:-top-[7px] after:bg-black">
                <div className="relative before:h-[1px] before:w-[45px] before:absolute before:bg-black before:top-[60px]">
                  <div className="pl-[100px] pt-[45px]">
                    <div className="absolute top-[42px] left-[45px] z-0 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1">
                      <img
                        className="relative left-[17px] top-[14px] z-10 block w-[25px] h-[25px]"
                        src={experienceIcon}
                        alt="experience icon"
                      />
                    </div>
                    <h4 className="text-sm font-bold font-[Poppins] block">
                      "Workado" startup company
                    </h4>
                    <div className="text-xs font-[Poppins] leading-[18px]">
                      (2021-2022)
                    </div>
                  </div>
                  <div className="text-xs font-[Poppins] pl-[43px] pt-[12px]">
                    <p className="font-bold">
                      Position: <span className="font-normal">Frontend developr</span>
                    </p>
                    <p className="font-bold">
                      Technologies:{" "}
                      <span className="font-normal">React, Redux, JavaScript, SCSS, HTML</span>
                    </p>
                    <p className="font-bold">
                      Responsibilites:{" "}
                      <span className="font-normal">
                        Development frontend part from scratch. Implement new
                        features. Discuss about future of company with team and
                        CEO. Be responsible to investors for frontend part of
                        project.
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="relative after:w-[1px] after:h-[calc(100%+6px)] after:absolute after:-top-[7px] after:bg-black">
                <div className="relative before:h-[1px] before:w-[45px] before:absolute before:bg-black before:top-[60px]">
                  <div className="pl-[100px] pt-[45px]">
                    <div className="absolute top-[42px] left-[45px] z-0 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1">
                      <img
                        className="relative left-[17px] top-[14px] z-10 block w-[25px] h-[25px]"
                        src={siteExperienceIcon}
                        alt="experience icon"
                      />
                    </div>
                    <h4 className="text-sm font-bold font-[Poppins] block">
                      "Hivex" outstaff company
                    </h4>
                    <div className="text-xs font-[Poppins] leading-[18px]">
                      (2022-2023)
                    </div>
                  </div>
                  <div className="text-xs font-[Poppins] pl-[43px] pt-[12px]">
                    <p className="font-bold">Position: <span className="font-normal">Frontend developer</span></p>
                    <p className="font-bold">Technologies: <span className="font-normal">React, Redux, Vue, Nuxt, TypeScript, CSS, HTML</span></p>
                    <p className="font-bold">Responsibilities: <span className="font-normal">Migrate application on new technologie. Fix bugs. Implement new features.</span></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
