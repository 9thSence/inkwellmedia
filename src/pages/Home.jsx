import graphics from '../assets/m_image.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <>
            <section
                id='home'
                className='w-full h-full pt-20 py-8 bg-main md:my-0 md:pt-16 flex flex-col justify-center'
            >
                <div className='w-full flex flex-col md:flex-row justify-around items-center'>
                    <div className='flex flex-col items-center justify-around text-center md:text-left md:items-start mb-8 md:mb-0'>
                        <h1 className='text-5xl w-full md:text-6xl font-bold'>
                            Elevate your{' '}
                            <span className='text-btn'>
                                <Typewriter
                                    className='Typewriter__cursor'
                                    options={{
                                        loop: true,
                                        autoStart: true,
                                        skipAddStyles: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                '<span style="color: #main; font-weight: bold;">Brand</span>'
                                            )
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString(
                                                '<span style="color: #main; font-weight: bold;">Business</span>'
                                            )
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString(
                                                '<span style="color: #main; font-weight: bold;">Social Media</span>'
                                            )
                                            .pauseFor(1000)
                                            .start();
                                    }}
                                />
                            </span>{' '}
                            with us!
                        </h1>
                        <p className='w-full text-justify p-4 md:w-96 md:p-0 mb-4'>
                            At Elegant Media Solutions, we specialize in
                            transforming your digital presence through
                            exceptional social media management, captivating
                            videography, and tailored content creation. Our
                            mission is to help your brand shine in the crowded
                            digital landscape.
                        </p>
                        <button className='transition duration-300 ease-in-out mt-2 border border-btn bg-btn p-3 text-black text-main font-bold hover:text-btn hover:bg-main hover:shadow-lg hover:shadow-btn'>
                            Learn More ...
                        </button>
                    </div>
                    <div className='w-full md:w-6/12'>
                        <img
                            className='w-full h-auto'
                            src={graphics}
                            alt='Inkwell media agency team'
                            loading='lazy'
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
