import './Navbar.css';
import { BsCameraReelsFill } from 'react-icons/bs';
// import logo from '../assets/logo.png';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <nav className='nav bg-transparent backdrop-brightness-md'>
                <div className='navbar'>
                    <div className='logo'>
                        {/* <img
                            src={logo}
                            className='drop-shadow-xl w-48'
                            alt='logo'
                        /> */}

                        <h1 className='text-xl text-btn font-bold flex justify-center items-center gap-2 w-full'>
                            Inkwell Media <BsCameraReelsFill />
                        </h1>
                    </div>
                    <div className='links'>
                        <a href='#home'>About</a>
                        <a href='#services'>Services</a>
                        {/* <a href='#services'>Portfolio</a> */}
                        <a href='#clients'>Our Clients</a>
                        <a href='#contact'>Contact</a>
                        <a
                            href='https://www.instagram.com/inkwellmediaa'
                            target='_blank'
                        >
                            <FaInstagram size='1.5em' />
                        </a>
                        <a
                            href='https://www.twitter.com/inkwellmediaa'
                            target='_blank'
                        >
                            <FaXTwitter size='1.5em' />
                        </a>
                        <a href='https://wa.me/+919172695325' target='_blank'>
                            <FaWhatsapp size='1.5em' />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
