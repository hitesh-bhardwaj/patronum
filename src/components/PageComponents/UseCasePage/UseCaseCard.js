import Image from "next/image";

export default function UseCaseCard( {para, imgSrc,id} ) {
    return(
        <>
            <div className="">
                <div className={`lg:px-[1%] lg:py-[6%] px-[2%] py-[12%] flex  justify-between items-center ${id%2==0?"lg:flex-row flex-col":"lg:flex-row-reverse flex-col"}`}>
                    <div className="w-[70%] lg:w-[35%] mb-[10vw] lg:mb-0 fadeUp">
                        <Image height={340} width={500} src={imgSrc} alt="useCases Image"/>
                    </div>
                    <div className="lg:w-[42%] w-full">
                        <p className="content-p text-anim-2">
                            <span>
                                {para}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}