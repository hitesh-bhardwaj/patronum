
import PrimaryButton from '@/components/PageLayout/Button/PrimaryButton'
import Image from 'next/image'
import React from 'react'

const scrollToId = (id) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
const Group = () => {
    return (
        <section id="second-section">
            <div className="container">
                <div className="content-2 lg:space-y-[7vw] space-y-[10vw] md:!py-0 lg:my-[5vw]">
                    <h2 className="title-4xl text-anim lg:w-[80%] w-full md:w-full">
                        <span className='span lg:block overflow-hidden'>
                            This isn’t just another group- it's a 
                        </span>
                        <span className='span lg:block overflow-hidden'>
                            working community to grow, build 
                        </span>
                        <span className='span lg:block overflow-hidden'>
                            and empower IT professionals just 
                        </span>
                        <span className='span lg:block overflow-hidden'>
                            like you.
                        </span>
                    </h2>
                    <div className='lg:space-y-[2vw] space-y-[5vw]'>
                        <div className='h-full w-full rounded-[1.5vw] overflow-hidden fadeUp'>
                            <Image src={"/assets/community/group.png"} alt='Webinar Banner' height={650} width={1440} className='object-cover' />
                        </div>
                        <div className='h-full w-full flex flex-col items-center justify-center text-center py-[1vw] space-y-[1vw]'>
                          <PrimaryButton onClick={(e) => {
        e.preventDefault();
        scrollToId("#join-community");
      }}  btnText={"Join Community"} link={"#join-community"}/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Group