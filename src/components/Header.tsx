import SubmarineIcon from '@/assets/images/submarine.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="relative px-3 py-2 shadow-lg ">
            <nav className="flex justify-between">
                <div className="w-[200px]">
                    <Link to={"/"}>
                        <img src={SubmarineIcon} alt="logo" className='w-12 h-12' />
                    </Link>
                </div>

            </nav>
        </header>
    )
}

export default Header