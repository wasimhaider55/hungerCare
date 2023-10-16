import React, { useState } from 'react'

const DonateMoney = () => {
    const [showDivs, setShowDivs] = useState([false, false, false, false, false, false]);
    const handleToggle = (index) => {
        setShowDivs((prevShowDivs) => {
            const updatedShowDivs = prevShowDivs.map((value, i) => (i === index ? !value : false));
            return updatedShowDivs;
        });
    };
    return (
        <main >
            {/* Donate Money section open */}
            <div className='relative w-full h-52 bg-cover bg-center bg-[url("https://image.khaleejtimes.com/?uuid=9d530cb1-b2d2-5933-b804-fabeb18997de&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.85188&x=0&y=0&width=1200&height=675")]'>
                <div className=" absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className=' absolute pt-20 md:pl-20 pl-10 '>
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
                    <p>If you would like to inform us after donating, or if you would like to discuss with us about your charity or if you have any question before making donation to our Foundation, please feel free to contact us either on our email <strong>wasimhaider2022@gmail.com</strong> or contact our Founder & President Mr. Tahir Fida on his official Contact / WhatsApp number <strong>0092 336 0574327</strong>.</p>
                </div>
            </div>



            <div className='sm:pt-20 pt-8 md:pl-20 pl-5'>
                <h1 className=' text-black lg:text-4xl sm:text-3xl text-2xl font-bold'> How To Donate </h1>
                <div className=' w-24 h-1 bg-red-500 rounded-full mt-3'></div>
                <p className='md:text-xl text-lg pt-5 text-black'>Donation can be made to Spogmai Foundation using one of the following methods :</p>
            </div>


            {/* Donation in different ways  section open*/}
            <section className='sm:mx-20 mx-5 my-10 border-2 border-gray-300 rounded-lg'>

                {/* Direct Bank Transfer sections */}
                <div
                    className={`flex justify-between items-center text-xl font-bold bg-gray-200 px-5 py-2 cursor-pointer
                     ${showDivs[0] ? 'text-blue-500' : 'text-black'} 
                     ${showDivs[0] ? 'border-2 border-blue-300' : ''}                     
                     `}
                    onClick={() => handleToggle(0)}
                >
                    <h1>1. Direct Bank Transfer:</h1>
                    <p className='cursor-pointer  text-4xl'>{showDivs[0] ? '-' : '+'}</p>
                </div>
                <hr className='border-1 border-gray-600' />
                {showDivs[0] && <div className='sm:px-10 px-3  text-justify'>
                    <p className='py-3 '>
                        You can donate to Spogmai at any “Bank of UBL” Branch in Pakistan:
                    </p>
                    <h1> <strong>Account Title:</strong> Spogmai Fundation </h1>
                    <h1> <strong>Account Number:</strong> 200609810056361002</h1>
                    <h1> <strong>Iban Number:</strong> PK56BAHL20060981563601</h1>
                    <h1> <strong>Bank Name:</strong> United Bank Limited</h1>
                    <h1> <strong>Branch Name:</strong> University Road Branch, Peshawar, PAKISTAN.</h1>
                    <h1> <strong>Branch Code:</strong> 2006</h1>
                    <p className='py-5'> <strong>Note:</strong> Due to prevailing restrictions by the current government on all commercial bank accounts in Pakistan, Direct Bank Transfer to above account can only be made from a Pakistani Bank and not from abroad. Please use other options if you are an international donor. Please contact us via our WhatsApp <strong>00923360574327</strong>  if you need more details for international bank transfer.</p>
                </div>
                }


                {/* International Money Transfer for Cash Pick-up sections*/}
                <div
                    className={`flex justify-between items-center text-xl font-bold bg-gray-200 px-5 py-2 cursor-pointer
                     ${showDivs[1] ? 'text-blue-500' : 'text-black'}
                     ${showDivs[1] ? 'border-2 border-blue-300' : ''}
                     `}
                    onClick={() => handleToggle(1)}
                >
                    <h1>2. International Money Transfer for Cash Pick-up:</h1>
                    <p className='cursor-pointer  text-4xl'>{showDivs[1] ? '-' : '+'}</p>
                </div>
                <hr className='border-1 border-gray-600' />
                {showDivs[1] && <div className='sm:px-10 px-3 text-justify'>
                    <p className='py-5'>
                        You can send your donations as Cash Pick-up via any bank in Pakistan. Or via other platforms of your choice, for example; Western Union, MoneyGram, Ria, ACE, WorldRemit, InstantCash, Remitly, IME, Transfast etc. Every company has their own requirements and restrictions so we make sure your remittance is received successfully. Please contact us via WhatsApp no <strong> 00923360574327</strong>  beforehand so we can provide you with our recipient's details and instructions.
                    </p>
                </div>
                }


                {/* Cross Cheque sections*/}
                <div
                    className={`flex justify-between items-center text-xl font-bold bg-gray-200 px-5 py-2 cursor-pointer
                     ${showDivs[2] ? 'text-blue-500' : 'text-black'} 
                     ${showDivs[2] ? 'border-2 border-blue-300' : ''}                     
                     `}
                    onClick={() => handleToggle(2)}
                >
                    <h1>3. Cross Cheque:</h1>
                    <p className='cursor-pointer  text-4xl'>{showDivs[2] ? '-' : '+'}</p>
                </div>
                <hr className='border-1 border-gray-600' />
                {showDivs[2] && <div className='sm:px-10 px-3 text-justify'>
                    <p className='py-3 '>
                        You can send or drop a crossed-cheque payable to “Spogmai” on the following address:
                    </p>
                    <h1>  Spogmai </h1>
                    <h1> Office # 1, First Floor,STH Plaza,,</h1>
                    <h1> Main Forest Bazar Agriculture University ,</h1>
                    <h1> Peshawar 27800, PAKISTAN</h1>
                    <h1 className='pb-3'> Contact: 0092336-0574327</h1>
                </div>
                }


                {/* Cash Donation sections */}
                <div
                    className={`flex justify-between items-center text-xl font-bold bg-gray-200 px-5 py-2 cursor-pointer
                     ${showDivs[3] ? 'text-blue-500' : 'text-black'} 
                     ${showDivs[3] ? 'border-2 border-blue-300' : ''}                     
                     `}
                    onClick={() => handleToggle(3)}
                >
                    <h1>4. Cash Donation:</h1>
                    <p className='cursor-pointer  text-4xl'>{showDivs[3] ? '-' : '+'}</p>
                </div>
                <hr className='border-1 border-gray-600' />
                {showDivs[3] && <div className='sm:px-10 px-3 text-justify'>
                    <p className='py-3 '>
                        You can make cash donation by visiting our Office at the following address:
                    </p>
                    <h1>  Spogmai </h1>
                    <h1> Office # 1, First Floor,STH Plaza,,</h1>
                    <h1> Main Forest Bazar Agriculture University ,</h1>
                    <h1> Peshawar 27800, PAKISTAN</h1>
                    <h1> Contact: 0092336-0574327</h1>
                    <p className='py-2'>
                        We also have the facility to come to you for donation collection if you live in Peshawar, Pakistan. Please contact us on our mobile/Whatsapp <strong>0092336-0574327</strong> and we will be happy to help.
                    </p>
                </div>
                }


                {/* JazzCash or EasyPaisa Account sections */}
                <div
                    className={`flex justify-between items-center text-xl font-bold bg-gray-200 px-5 py-2 cursor-pointer
                     ${showDivs[4] ? 'text-blue-500' : 'text-black'} 
                     ${showDivs[4] ? 'border-2 border-blue-300' : ''}                     
                     `}
                    onClick={() => handleToggle(4)}
                >
                    <h1>5. JazzCash or EasyPaisa Account:</h1>
                    <p className='cursor-pointer  text-4xl'>{showDivs[4] ? '-' : '+'}</p>
                </div>
                <hr className='border-1 border-gray-600' />
                {showDivs[4] && <div className='sm:px-10 px-3 text-justify'>
                    <p className='py-3 '>
                        You can donate through JazzCash Account or EasyPaisa Account by using our following Mobile Account number:
                    </p>
                    <h1> <strong>Account Title : </strong> Wasim Haider</h1>
                    <h1 className='pb-3'> <strong>Account Number: </strong> 0336-0574327 </h1>
                </div>
                }


                {/* Online Credit Card section */}
                <div
                    className={`flex justify-between items-center text-xl font-bold bg-gray-200 px-5 py-2 cursor-pointer
                     ${showDivs[5] ? 'text-blue-500' : 'text-black'} 
                     ${showDivs[5] ? 'border-2 border-blue-300' : ''}                     
                     `}
                    onClick={() => handleToggle(5)}
                >
                    <h1>6. Online Credit Card:</h1>
                    <p className='cursor-pointer  text-4xl'>{showDivs[5] ? '-' : '+'}</p>
                </div>
                <hr className='border-1 border-gray-600' />
                {showDivs[5] && <div className='sm:px-10 px-3 text-justify'>
                    <p className='py-3 '>
                        Online Credit/Debit Card facility is under construction and will be updated in due course.
                    </p>
                </div>
                }

            </section>
            {/* Donation in different ways  section closed*/}


        </main>
    );
}

export default DonateMoney