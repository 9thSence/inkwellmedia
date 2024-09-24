// import Branding from '../assets/branding.svg';
// import Mgmt from '../assets/social_management.svg';
// import Content from '../assets/content_creation.svg';
// import Marketing from '../assets/digital_marketing.svg';
// const services = [
//     {
//         id: 1,
//         title: 'Branding',
//         description: [
//             'Brand name creation and development',
//             'Brand identity Design',
//             'Brand story and strategy',
//         ],
//         url: Branding,
//     },
//     {
//         id: 2,
//         title: 'Social Media Management',
//         description: [
//             'Social media strategy',
//             'Content creation',
//             'Community management',
//             'Social media advertising',
//         ],
//         url: Mgmt,
//     },
//     {
//         id: 3,
//         title: 'Content Creation',
//         description: [
//             'Storyboarding',
//             'Scriptwriting',
//             'Filming',
//             'Editing',
//             'VideoGraphy',
//         ],
//         url: Content,
//     },
//     {
//         id: 4,
//         title: 'Digital Marketing',
//         description: [
//             'SEO',
//             'PPC',
//             'Email Marketing',
//             'Affiliate Marketing',
//             'Influencer Marketing',
//             'Content Marketing',
//         ],
//         url: Marketing,
//     },
// ];
import Team from '../assets/team.png'; // Example import, adjust as needed
import Development from '../assets/digital_marketing.svg'; // Example import, adjust as needed
import { FaCheck } from 'react-icons/fa';

const Information = () => {
    return (
        <>
            <section id='info' className='w-full h-fit px-4 md:px-20'>
                <div className='flex flex-col md:flex-row items-center my-8 bg-main'>
                    <div className='w-full md:w-96 p-4'>
                        <img
                            loading='lazy'
                            src={Team}
                            alt='Marketing Service'
                            className='w-full h-auto rounded-lg'
                        />
                    </div>
                    <div className='w-full md:w-1/2 p-4'>
                        <h2 className='text-xl font-bold mb-4'>
                            Elevate Your Brand with Expert Social Media
                            Management
                        </h2>
                        <p className='mb-4'>
                            Transform your online presence with our tailored
                            social media strategies, captivating videography,
                            and stunning content creation. We help brands like
                            yours stand out and connect with their audience
                            effectively.
                        </p>
                        <ul className='list-none mb-4'>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Brand Creation and Development
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Brand Identity Design
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Brand Story and Strategy
                            </li>
                        </ul>
                        <button className='transition duration-300 ease-in-out mt-2 p-3 bg-btn text-white text-black font-bold hover:text-btn hover:bg-main hover:border hover:border-x-btn'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-center my-8 bg-main'>
                    <div className='w-full md:w-96 p-4'>
                        <img
                            loading='lazy'
                            src={Development}
                            alt='Development Service'
                            className='w-full h-auto rounded-lg bg-main'
                        />
                    </div>
                    <div className='w-full md:w-1/2 p-4'>
                        <h2 className='text-xl font-bold mb-4'>
                            Transforming Your Online Presence
                        </h2>
                        <p className='mb-4'>
                            Our agency specializes in enhancing your digital
                            footprint through effective social media management,
                            captivating videography, and engaging content
                            creation. Let us tell your story.
                        </p>
                        <ul className='list-none mb-4'>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Social Media Mastery
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Captivating Videography
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Creative Content Creation
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaCheck className='text-green-500 mr-2' />
                                Social Media Strategy
                            </li>
                        </ul>
                        <button className='transition duration-300 ease-in-out mt-2 p-3 bg-btn text-white text-black font-bold hover:text-btn hover:bg-main hover:border hover:border-x-btn'>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Information;

// <div className='flex flex-col md:flex-row flex-wrap justify-around'>
//     {services.map((service) => {
//         return (
//             <div
//                 key={service.id}
//                 className='bg-white p-6 text-main flex flex-col md:flex-row justify-between w-full md:w-5/12 my-4 rounded-lg'
//             >
//                 <div className='p-4 flex flex-col items-center md:items-start md:w-1/2'>
//                     <h2 className='text-3xl md:text-3xl w-full font-bold underline mb-4'>
//                         {service.title}
//                     </h2>
//                     <ul className='list-disc text-lg mb-4'>
//                         {service.description.map(
//                             (desc, index) => (
//                                 <li key={index}>{desc}</li>
//                             )
//                         )}
//                     </ul>
//                     {/* <button className='transition duration-300 ease-in-out mt-2 border border-main p-3 bg-main text-white hover:text-main hover:bg-white'>
//                         Learn More
//                     </button> */}
//                 </div>
//                 <div className='flex justify-center md:justify-start md:w-1/2'>
//                     <img
//                         className='w-full md:w-72 rounded-2xl'
//                         src={service.url}
//                         alt='Inkwell media agency team'
//                         loading='lazy'
//                     />
//                 </div>
//             </div>
//         );
//     })}
// </div>
