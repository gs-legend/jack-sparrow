import SubmarineSvg from '@/assets/images/Submarine.svg?react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="relative px-3 py-2 shadow-lg ">
            <nav className="flex justify-between">
                <div className="w-[200px]">
                    <SubmarineSvg className='w-[150px] h-[50px]' />
                </div>
                <div className="flex items-center gap-3">
                    <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <Link to={"controlroom"}>Control Room</Link>
                            </li>
                            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <Link to={"submarine"}>Submarine</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header