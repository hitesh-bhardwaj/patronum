
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton'
import Image from 'next/image'
import React from 'react'

const Group = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="content-2 lg:space-y-[7vw] ">
                    <h2 className="title-4xl text-anim w-[80%]">
                        <span>
                            This isn’t just another group- it's a working community to grow, build and empower IT professionals just like you.
                        </span>
                    </h2>
                    <div className='space-y-[2vw] '>
                        <div className='h-full w-full rounded-[1.5vw] overflow-hidden'>
                            <Image src={"/assets/community/group.png"} alt='Webinar Banner' height={650} width={1440} className='object-cover' />
                        </div>
                        <div className='h-full w-full flex flex-col items-center justify-center text-center py-[1vw] space-y-[1vw]'>
                          <PrimaryButton btnText={"Join Community"} link={"#"}/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Group