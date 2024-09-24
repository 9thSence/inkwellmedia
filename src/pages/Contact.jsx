const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const mailtoLink = `mailto:contact@inkwellmedia.agency?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
            name
        )}%0AEmail:%20${encodeURIComponent(
            email
        )}%0AMessage:%20${encodeURIComponent(message)}`;
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_blank');
    };

    return (
        <section id='contact' className='w-full h-fit py-20 px-4 bg-gray-100'>
            <h1 className='text-center text-3xl font-bold mb-8 overline decoration-btn'>
                Contact Us
            </h1>
            <div className='max-w-screen-md mx-auto bg-white shadow-lg rounded-lg p-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='mt-1 block w-full px-3 py-2 border bg-main border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main focus:border-main sm:text-sm'
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='mt-1 block w-full px-3 py-2 border bg-main border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main focus:border-main sm:text-sm'
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Phone
                        </label>
                        <input
                            type='phone'
                            id='phone'
                            name='phone'
                            className='mt-1 block w-full px-3 py-2 border bg-main border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main focus:border-main sm:text-sm'
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='message'
                            className='block text-sm font-medium text-gray-700'
                        >
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows='4'
                            className='mt-1 block w-full px-3 py-2 border bg-main border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main focus:border-main sm:text-sm'
                            required
                        ></textarea>
                    </div>
                    <div className='flex justify-between items-center'>
                        <button
                            type='submit'
                            className='transition duration-300 ease-in-out bg-btn text-white font-bold py-2 px-4 rounded-lg hover:bg-main-dark'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
