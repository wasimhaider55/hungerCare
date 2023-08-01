import React from 'react'

const DonateMoney = () => {
    return (
        <main className='pt-20'>
            {/* Donate Money section open */}
            <div className='w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
                <div className='pt-20 md:pl-20 pl-10 '>
                    <h1 className=' text-white text-4xl font-bold'> Donate Money Now </h1>
                    <div className=' w-24 h-1 bg-red-500 rounded-full mt-3'></div>
                    <p className='text-2xl text-white pt-5'>Help Us So We Can Feed Needy People</p>
                </div>
            </div>
            {/* Donate Money section Closed */}


            {/* important note section */}
            <div>
                <div className='py-10 lg:px-24 md:px-16 sm:px-12 px-5 text-justify'>
                    <h1 className='text-2xl font-bold'>IMPORTANT NOTE</h1>
                    <p className=' font-bold py-5'>We accept all types of charity including Zakat, Sadaqah, Fitrana, Kafarah, General Charity, and we make sure to utilize these charities in the relevant sectors according to Islamic Shariah.</p>
                    <p className='pb-5'>You can either donate towards anyone of our specific causes, or you may leave the choice of utilizing your charity on our discretion and we will make the best use of your charity in the most needed causes. For list of our help sectors, please visit Our Causes link.</p>
                    <p>If you would like to inform us after donating, or if you would like to discuss with us about your charity or if you have any question before making donation to our Foundation, please feel free to contact us either on our email <strong>wasimhaider2022@gmail.com</strong> or contact our Founder & President Mr. Wasim Haider on his official Contact / WhatsApp number <strong>0092 336 0574327</strong>.</p>
                </div>
            </div>



            <div className='pt-20 md:pl-20 pl-10'>
                <h1 className=' text-black text-4xl font-bold'> How To Donate </h1>
                <div className=' w-24 h-1 bg-red-500 rounded-full mt-3'></div>
                <p className='text-2xl pt-5 text-black'>Donation can be made to HungerCare Foundation using one of the following methods :</p>
            </div>


        </main>
    )
}

export default DonateMoney