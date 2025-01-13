import SectionTitle from '@/components/PageLayout/SectionTitle'
import { Check, XIcon, InfoIcon } from 'lucide-react'
import React from 'react'

const Comparison = ({ data, product, productprice, productpriceInfo }) => {
    return (
        <section className='cloudm-comparison'>
            <div className='container my-[5vw]'>
                <div>
                    <SectionTitle sectionTitle1={`Comparing ${product} with Patronum Google Workspace Management Platform.`} sectionPara={`Whilst the features of the Patronum Google Workspace Management Platform are comparable to those of ${product}, we feel that Patronum goes much further and deeper as Patronum is purely focused on Google Workspace.`} />
                </div>
                <div className='flex flex-col items-center justify-center mt-[3vw]'>
                    <h3 className='lg:text-2xl text-[6vw] font-medium md:text-[5vw]'>{`Patronum v ${product}`}</h3>
                    <div className="w-[100%] lg:w-[85vw] overflow-x-scroll">
                        <table className="lg:w-full w-[200%] border-2  border-gray-300 lg:mt-[3vw]  overflow-x-scroll lg:overflow-hidden mb-[5vw] mt-[8vw] lg:my-0 comparison-table">
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-left lg:px-[1vw] px-[2vw]"></th>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-left"></th>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-left lg:text-[1.2vw] font-light leading-[1.2] lg:px-[1vw] px-[2vw] text-[6vw] md:text-[4vw]">Patronum</th>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-left lg:text-[1.2vw] font-light leading-[1.2] lg:px-[1vw] px-[2vw] text-[6vw] md:text-[4vw]">{product}</th>
                                </tr> 
                                
                            </thead>
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-left lg:text-[1.7vw] font-medium leading-[1.2] lg:px-[1vw] px-[2vw] text-[6vw] md:text-[4vw]">Annual Cost</th>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-left lg:text-[1.7vw] font-medium leading-[1.2] lg:px-[1vw] px-[2vw] text-[6vw] md:text-[4vw]"> Features</th>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-center lg:text-[1.7vw] font-medium leading-[1.2] lg:px-[1vw] px-[2vw] text-[6vw] md:text-[4vw]">$8</th>
                                    <th className="border border-gray-300 lg:p-3 p-5 text-center lg:text-[1.7vw] font-medium leading-[1.2] lg:px-[1vw] px-[2vw] relative text-[6vw] md:text-[4vw]">
                                        {productprice}
                                        <div className="absolute lg:top-auto lg:bottom-[-10%] lg:right-[-20%] transform translate-x-[20%] translate-y-[-20%] group z-[99] bottom-[10%] right-[20%] md:right-[30%]">
                                            <InfoIcon className="bg-gray-400 text-white !border-none rounded-full lg:w-4 lg:h-4  w-6 h-6 md:w-5 md:h-5 cursor-pointer" />
                                            <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg  mt-2 lg:w-[15vw] lg:text-[0.9vw] rounded-[0.5vw] top-[0%] lg:left-[-8vw] h-fit transform -translate-x-[50%] font-light ageo w-[40vw] text-[3vw] left-[-20vw] ">
                                                {productpriceInfo}
                                            </div>
                                        </div>
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="ageo">
                                {data.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-200 transition-all duration-500 ease">
                                        <td className="border border-gray-300 lg:p-[1vw] content-p px-[3vw] py-[1.5vw]">{row.col1}</td>
                                        <td className="border border-gray-300 lg:p-[1vw] content-p px-[3vw] py-[1.5vw]">{row.col2}</td>
                                        {/* Icon 1 */}
                                        <td className="border border-gray-300 p-[1vw]">
                                            <div
                                                className={`p-[1vw] rounded-full lg:w-[1.5vw] lg:h-[1.5vw] w-[6vw] h-[6vw] relative ml-auto mr-auto ${row.img1 ? 'bg-green-200' : 'bg-red-200'
                                                    }`}
                                            >
                                                {row.img1 ? (
                                                    <>
                                                    <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 p-[0.2vw]" />
                                                    {row.info1 && (
                                                        <div className="absolute lg:top-auto lg:bottom-[-10%] lg:right-[-20%] transform translate-x-[20%] translate-y-[-20%] group z-[99] bottom-[-50%] right-[-50%] md:left-[50%] md:top-[80%]">
                                                            <InfoIcon className="bg-gray-400 text-white !border-none rounded-full lg:w-4 lg:h-4  w-6 h-6 md:w-5 md:h-5 cursor-pointer" />
                                                            <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg  mt-2 lg:w-[15vw] lg:text-[0.9vw] rounded-[0.5vw] top-[0%] lg:left-[-8vw] h-fit transform -translate-x-[50%] font-light ageo w-[40vw] text-[3vw] left-[-20vw] md:w-[50vw] md:top-[3vw]">
                                                                {row.info1}
                                                            </div>
                                                        </div>
                                                    )}
                                                    </>
                                                ) : (
                                                    <>
                                                        <XIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 p-[0.2vw]" />
                                                        {row.info1 && (
                                                            <div className="absolute lg:top-auto lg:bottom-[-10%] lg:right-[-20%] transform translate-x-[20%] translate-y-[-20%] group z-[99] bottom-[-50%] right-[-50%] md:left-[50%] md:top-[80%]">
                                                                <InfoIcon className="bg-gray-400 text-white !border-none rounded-full lg:w-4 lg:h-4  w-6 h-6 md:w-5 md:h-5 cursor-pointer" />
                                                                <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg  mt-2 lg:w-[15vw] lg:text-[0.9vw] rounded-[0.5vw] top-[0%] lg:left-[-8vw] h-fit transform -translate-x-[50%] font-light ageo w-[40vw] text-[3vw] left-[-20vw] md:w-[50vw] md:top-[3vw]">
                                                                    {row.info1}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                        {/* Icon 2 */}
                                        <td className="border border-gray-300 p-[1vw]">
                                            <div
                                                className={`p-[1vw] rounded-full lg:w-[1.5vw] lg:h-[1.5vw] w-[6vw] h-[6vw] relative ml-auto mr-auto ${row.img2 ? 'bg-green-200 border-green-500' : 'bg-red-200 border-red-500'
                                                    }`}
                                            >
                                                {row.img2 ? (
                                                    <>
                                                    <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500 p-[0.2vw]" />
                                                    {row.info2 && (
                                                        <div className="absolute lg:top-auto lg:bottom-[-10%] lg:right-[-20%] transform translate-x-[20%] translate-y-[-20%] group z-[99] bottom-[-50%] right-[-50%] md:left-[50%] md:top-[80%]">
                                                            <InfoIcon className="bg-gray-400 text-white !border-none rounded-full lg:w-4 lg:h-4  w-6 h-6 md:w-5 md:h-5 cursor-pointer" />
                                                            <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg  mt-2 lg:w-[15vw] lg:text-[0.9vw] rounded-[0.5vw] top-[0%] lg:left-[-8vw] h-fit transform -translate-x-[50%] font-light ageo w-[40vw] text-[3vw] left-[-20vw] md:w-[50vw] md:top-[3vw]">
                                                                {row.info2}
                                                            </div>
                                                        </div>
                                                    )}
                                                    </>
                                                ) : (
                                                    <>
                                                        <XIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 p-[0.2vw]" />
                                                        {row.info2 && (
                                                            <div className="absolute lg:top-auto lg:bottom-[-10%] lg:right-[-20%] transform translate-x-[20%] translate-y-[-20%] group z-[99] bottom-[-50%] right-[-50%] md:left-[50%] md:top-[80%]">
                                                                <InfoIcon className="bg-gray-400 text-white !border-none rounded-full lg:w-4 lg:h-4  w-6 h-6 md:w-5 md:h-5 cursor-pointer" />
                                                                <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg  mt-2 lg:w-[15vw] lg:text-[0.9vw] rounded-[0.5vw] top-[0%] lg:left-[-8vw] h-fit transform -translate-x-[50%] font-light ageo w-[40vw] text-[3vw] left-[-20vw] md:w-[50vw] md:top-[3vw]">
                                                                    {row.info2}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparison
