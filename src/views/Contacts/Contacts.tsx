import profileImage from '../../assets/profile2.png';
import telegramIcon from '../../assets/icons/telegram.svg';
import emailIcon from '../../assets/icons/google2.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import {linkedinLink, gmailLink} from '../../../links';

export const Contacts = () => {
    return (
        <section className='pb-[90px]'>
            <div className='max-sm:w-full max-md:w-[540px] max-lg:w-[720px] xl:w-[1140px] mx-auto my-0 max-md:pt-[40px] pt-[200px] max-sm:px-[10px] xl:px-[0] px-[15px]'>
                <div className='grid max-md:grid-cols-1 max-xl:grid-cols-[350px_auto] grid-cols-[400px_auto] max-xl:justify-center grid-rows-1 max-xl:gap-x-[30px] gap-x-[70px] max-xl:pl-[30px] pl-[52px] pr-[35px]'>
                    <div className='row-start-1 row-end-3 max-md:hidden'>
                        <img className="block w-full h-[600px] object-cover" src={profileImage} alt="profile image" />
                    </div>
                    <div>
                        <h2 id="contacts" className='font-bold font-[Poppins] text-base relative left-[16px] z-2 before:w-[36px] before:h-[36px] before:bg-amber-400 before:absolute before:rounded-full before:-z-1 before:-left-[16px] before:-top-[5px]'>Contacts</h2>
                        <span className="block font-bold text-4xl font-[Poppins] leading-[60px]">Contact me</span>
                        <div className="h-[3px] w-[60px] bg-amber-400"></div>
                        <span className='block font-bold text-sm font-[Poppins] mt-[20px]'>In any way convenient for you:</span>
                        <ul className='mt-[20px] flex gap-[24px]'>
                            <li>
                                <a href={linkedinLink} target='_blank'>
                                    <img src={linkedinIcon} alt="linkedin icon" />
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${gmailLink}`} target="_blank">
                                    <img src={emailIcon} alt="email icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/tridognite" target='_blank'>
                                    <img src={telegramIcon} alt="telegram icon" />
                                </a>
                            </li>
                        </ul>
                        <span className='block font-bold text-sm font-[Poppins] mt-[20px]'>Or you can leave your contacts and I will get back to you:</span>
                        <form className='grid max-xl:grid-cols-[240px_240px] grid-cols-[280px_280px] max-lg:grid-cols-[unset] max-lg:grid-rows-[35px_35px_auto_35px] grid-rows-[45px_auto_45px] gap-x-[25px] gap-y-[30px] mt-[30px]'>
                            <div className='relative'>
                                <input className='border-black border-[1px] w-full h-full px-[10px] text-xs font-[Poppins] focus:outline-none' required name="name" />
                                <label className='absolute block left-[12px] -top-[9px] text-center w-[70px] font-medium text-xs text-black bg-white z-4'>Your name</label>
                            </div>

                            <div className='relative'>
                                <input className='border-black border-[1px] w-full h-full px-[10px] text-xs font-[Poppins] focus:outline-none' required name="email" />
                                <label className='absolute block left-[12px] -top-[9px] text-center w-[70px] font-medium text-xs text-black bg-white z-4'>Your email</label>
                            </div>

                            <div className='relative max-lg:col-end-1 max-lg:row-start-3 col-start-1 col-end-3'>
                                <textarea className='border-black border-[1px] w-full max-lg:h-[110px] h-[194px] px-[10px] text-xs font-[Poppins] pt-[6px] focus:outline-none' name="text" />
                                <label className='absolute block left-[12px] -top-[9px] text-center w-[40px] font-medium text-xs text-black bg-white z-4'>Text</label>
                            </div>

                            <button className='w-[220px] h-full max-lg:row-start-4 cursor-pointer bg-amber-400 text-black font-bold font-[Poppins] text-sm row-start-3'>Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}