import { TiSocialAtCircular } from 'react-icons/ti';
import { FaVideo } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { SiMicrostrategy } from 'react-icons/si';
import { IoMdAnalytics } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';

import Information from './Information'; // Adjust the import as needed

const services = [
    {
        icon: <TiSocialAtCircular />,
        title: 'Social Media',
        description:
            "Expert management tailored to your brand's voice and goals.",
    },
    {
        icon: <FaVideo />,
        title: 'VideoGraphy',
        description:
            'High-quality video production that captures your essence.',
    },
    {
        icon: <IoIosCreate />,
        title: 'Content Creation',
        description: 'Engaging content that resonates with your audience.',
    },
    {
        icon: <SiMicrostrategy />,
        title: 'Brand Strategy',
        description: 'Strategic planning to elevate your brand identity.',
    },
    {
        icon: <IoMdAnalytics />,
        title: 'Analytics',
        description: 'Data-driven insights to improve performance.',
    },
    {
        icon: <MdManageAccounts />,
        title: 'Consultation',
        description: 'Personalized consultations to meet your needs.',
    },
];

const Services = () => {
    return (
        <div>
            <Information />
            <div className='py-10 px-4 md:px-20'>
                <h1
                    className='text-center text-3xl font-bold mb-8'
                    id='services'
                >
                    Our Core Services
                </h1>
                <div className='flex justify-center mb-8 gap-2'>
                    <button className='transition duration-300 ease-in-out bg-btn text-white border font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-btn'>
                        Get Started with Us
                    </button>
                    <button className='transition duration-300 ease-in-out bg-white text-btn border border-x-btn font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-btn'>
                        Explore Our Services
                    </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-white shadow-lg rounded-lg p-6 text-center'
                        >
                            <div className='flex justify-center items-center mb-4'>
                                <div className='text-5xl text-btn w-16 h-16 flex justify-center items-center'>
                                    {service.icon}
                                </div>
                            </div>
                            <h2 className='text-xl font-bold mb-2'>
                                {service.title}
                            </h2>
                            <p className='text-gray-600'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
