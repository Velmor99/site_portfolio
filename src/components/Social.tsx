export const SocialMedia = ({icons} : {icons: {icon: string, link: string}[]}) => {
    return (
        <aside className="fixed flex flex-col items-center top-[230px] left-[50px] h-[340px] justify-between z-5 max-laptop:hidden">
            {icons.map((item, idx) => <a href={item.link.includes("gmail") ? `mailto:${item.link}` : item.link} target="_blank" key={idx}> <img className="block w-[20px] h-[20px]" src={item.icon} alt="icon"/></a>)}
            <div className="h-[70px] w-[1px] bg-black"></div>
            <div className="h-[150px] w-[25px]"><span className="text-base font-bold font-[Poppins] rotate-[-90deg] block w-[150px] -translate-x-42/100 translate-y-100/100">Social Media</span></div>
        </aside>
    )
}