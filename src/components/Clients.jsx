import Landson from '../assets/clients/landson.png';
import Pz from '../assets/clients/pz.png';
import Matrubhumi from '../assets/clients/matrubhumi.png';
import Navya from '../assets/clients/navya.png';
import Riyasat from '../assets/clients/riyasat.jpg';
import Sahyadri from '../assets/clients/sahyadri.png';
import Venkatesha from '../assets/clients/venkatesha.png';
import Dreamland from '../assets/clients/dreamland.png';

const clients = [
    { id: 1, logo: Landson },
    { id: 2, logo: Sahyadri },
    { id: 3, logo: Matrubhumi },
    { id: 4, logo: Navya },
    { id: 5, logo: Riyasat },
    { id: 6, logo: Pz },
    { id: 7, logo: Venkatesha },
    { id: 8, logo: Dreamland },
];

const Clients = () => {
    return (
        <>
            <div className='py-20' id='clients'>
                <h2 className='text-center text-black text-2xl font-bold my-4'>
                    Our Clients
                </h2>
                <div className='flex justify-center w-full'>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4 max-w-screen-lg'>
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className='client-logo flex justify-center items-center bg-white shadow-lg rounded-lg p-2'
                            >
                                <img
                                    loading='lazy'
                                    src={client.logo}
                                    alt={`Client ${client.id}`}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Clients;
