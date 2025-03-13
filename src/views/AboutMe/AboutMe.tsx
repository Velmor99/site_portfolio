import profileImage from "../../assets/profile.jpg";
import mobileDevelopmentIcon from "../../assets/icons/mobile-development.svg";
import webDevelopmentIcon from "../../assets/icons/web-development.svg";
import backendDevelopmentIcon from "../../assets/icons/database-development.svg";

const whatCanIDoList = [
  {
    icon: mobileDevelopmentIcon,
    title: "Mobile development",
    text: "I can create mobile applications using React Native for IOS and Android. Also I can provide many usefull features using other libraries and packeges",
  },
  {
    icon: webDevelopmentIcon,
    title: "Web-development",
    text: "I have experience in development web-applications using popular frameworks like React or Vue and I can create web application on valilla JavaScript using package manager.",
  },
  {
    icon: backendDevelopmentIcon,
    title: "Backend development",
    text: "Currently, I mostly oriented to develop Python backend side on Django, but I can develop backend side on Node.js with Express or Nest.js",
  },
];

export const AboutMe = () => {
  return (
    <section>
      <div className="max-sm:w-full max-md:w-[540px] max-lg:w-[720px] xl:w-[1140px] mx-auto my-0 max-md:pt-[40px] pt-[200px] max-sm:px-[10px] xl:px-[0] px-[15px]">
        <div className="grid max-md:grid-cols-1 max-lg:grid-cols-[300px_380px] grid-cols-[400px_auto] max-md:gap-y-[40px] gap-y-0 max-lg:gap-x-[30px] max-xl:gap-x-[50px] gap-x-[70px] max-md:grid-rows-[400px_auto_auto] grid-rows-[minmax(245px,auto)_minmax(255px,auto)]">
          <div className="max-md:row-[unset] row-start-1 row-end-3">
            <img
              className="block w-full h-full object-cover"
              src={profileImage}
              alt="profile image"
            />
          </div>
          <div className="pt-[5px]">
            <h2 id="about" className="w-[200px] font-bold font-[Poppins] text-base relative left-[16px] z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:-left-[16px] before:-top-[5px]">
              About me
            </h2>
            <span className="font-bold max-lg:text-2xl text-4xl font-[Poppins] leading-[60px]">
              My name is Roman
            </span>
            <div className="h-[3px] w-[60px] bg-amber-400"></div>
            <p className="text-sm font-[Poppins] font-medium mt-[20px]">
              A full-stack developer with 2 years of experience in
              web-development is currently looking for an opportunity to apply my expertise and work with interesting projects and fulfill my
              ambitions. Trained to create and support web applications,
              mobile applications and server sides.
            </p>
          </div>
          <ul className="grid max-lg:grid-rows-[115px_115px] auto-rows-[115px] grid-rows-2 max-md:grid-cols-[auto] max-lg:grid-cols-[380px] max-xl:grid-cols-[250px_250px] grid-cols-2 gap-[10px]">
            {whatCanIDoList.map((item, idx) => (
              <li
                className="grid max-lg:grid-cols-[40px_auto] grid-cols-[40px_190px] max-lg:gap-x-[20px] gap-x-[15px]"
                key={idx}
              >
                <div className="h-[25px] w-[25px] relative top-[16px] left-[16px] z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:-left-[16px] before:-top-[16px]">
                  <img
                    className="w-[25px] h-[25px]"
                    src={item.icon}
                    alt="skill icon"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-[Poppins]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium font-[Poppins] mt-[9px]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
