import { useRef, useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import { navLinks } from '../constants/index';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const linksRef = useRef(null)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        const body = document.body;
        linksRef.current.classList.toggle("hidden");
        linksRef.current.classList.toggle("flex");
        body.classList.toggle("overflow-hidden");
    }
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        }
        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        }
    }, [])
    return (
        (
            <header className=' sticky sm:px-16 px-8 py-4  z-[999] w-full bg-gradient-to-r  from-purple-400 to-blue-300'>
                <nav className='flex justify-between items-center max-container'>
                    <Link to="/">
                        <div className='flex gap-2 items-center justify-center font-bold text-2xl'>
                           <h1>Transaction Diary</h1>
                        </div>
                    </Link>
                    {!isMobile && <ul className='flex-1 flex justify-center items-center gap-20 max-lg:hidden  '>
                        {navLinks.map((item) => (
                            <li key={item.label} className='relative navLinks'>
                                <Link to={item.to} className='font-primary leading-normal text-lg  font-medium hoverLine text-[#212121] hover:text-primary transition hover:text-[#000000]'>{item.label}</Link>
                            </li>
                        ))}
                    </ul>}
                    {isMobile && <ul className='absolute flex-1 justify-center items-center gap-8 flex-col bg-gradient-to-r  from-purple-400 to-blue-300 w-full min-h-screen top-0 left-0 hidden' ref={linksRef}>
                       
                        {navLinks.map((item) => (
                            <li key={item.label} className='relative navLinks '>
                                <Link to={item.to} className='font-primary leading-normal text-lg text-[#181818] hover:text-primary transition hover:text-[#000000]' onClick={toggleMenu}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>}
                    <div className=' text-4xl xl:hidden lg:block z-10 cursor-pointer'>
                        {isMenuOpen ? (
                           
                            <IoMdClose onClick={toggleMenu} />
                        ) : (

                            <CgMenuRight  onClick={toggleMenu}/>
                        )}
                    </div>
                </nav>
            </header>)
    )
}

export default Navbar