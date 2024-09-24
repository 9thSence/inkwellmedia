const Footer = () => {
    return (
        <footer className='bg-main py-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Navigation Links */}
                    <div className='mb-6 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul>
                            <li className='mb-2'>
                                <a href='#home' className='hover:underline'>
                                    Home
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href='#services' className='hover:underline'>
                                    Services
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a
                                    href='#portfolio'
                                    className='hover:underline'
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href='#contact' className='hover:underline'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className='mb-6 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Contact</h2>
                        <p className='mb-2'>Phone: +919172695325</p>
                        <p className='mb-2'>
                            Email:{' '}
                            <span className='underline'>
                                contact@inkwellmedia.agency{' '}
                            </span>
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className='mb-6 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
                        <div className='flex space-x-4'>
                            <a
                                href='https://wa.me/+919172695325'
                                target='_blank'
                            >
                                Whatsapp
                            </a>
                            <a
                                href='https://www.instagram.com/inkwellmediaa'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:underline'
                            >
                                Instagram
                            </a>
                            <a
                                href='https://twitter.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:underline'
                            >
                                Twitter
                            </a>
                            <a
                                href='https://linkedin.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:underline'
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className='mb-6 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Address</h2>
                        <p>Mumbai</p>
                        <p>Maharashtra, India</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className='mt-10 text-center'>
                    <p>
                        &copy; {new Date().getFullYear()}{' '}
                        <span className='text-btn'>Inkwell Media </span> All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
