import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

const FeatureCard = ( {featTitle, featImg, featPara1, featPara2, featLink, btnText,id} ) => {
    return ( 
        <>
            <div className="">
                <div className="">
                    <span className="lineDraw lg:h-[2px] h-[1px] w-full bg-[#1a1a1a] block"/>
                    <h3 className="title-3xl fadeRight lg:font-medium text-head py-[1.5vw] lg:px-[1vw] px-[2vw] capitalize ">
                        <span>
                            {featTitle}
                        </span>
                    </h3>
                    <span className="lineDraw lg:h-[2px] h-[1px] w-full bg-[#1a1a1a] block"/>
                </div>
                <div className={` flex justify-between w-full lg:pt-[6%] lg:pb-[12%] pb-[30%] pt-[10%] px-[2%] items-center lg:items-start gap-[10vw] lg:gap-0 ${id%2==1?"lg:flex-row-reverse flex-col-reverse ":"lg:flex-row flex-col-reverse"}`}>
                    <div className="lg:w-[42%] w-full">
                        <p className="content-p fadeUp lg:mb-[2vw] mb-[10vw]">
                            {featPara1}
                        </p>
                        <p className="content-p fadeUp lg:mb-[2vw] mb-[10vw]">
                            {featPara2}
                        </p>
                        <div className="pt-[2vw]">
                            <PrimaryButton link={featLink} btnText={btnText}/>
                        </div>
                    </div>
                    <div className="lg:w-[35%] fadeUp pt-[2.5vw] w-[70%]">
                        <Image width={520} height={423} src={featImg} alt={featTitle} title={featTitle}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureCard;