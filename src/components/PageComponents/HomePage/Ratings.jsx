import Image from "next/image";

const Ratings = () => {
    return (
        <div id="second-section" className="ratings lg:mt-[4vw] mt-[15vw] fadeUp">
            <div className="container-lg bg-[#fdfdfd] border border-[#e2e2e2] rounded-2xl">
                <div className="w-[90%] mx-auto flex flex-col items-center lg:py-[3vw] md:py-[6vw] py-[10vw]">
                    <div className="md:flex items-center lg:flex-row lg:gap-8 lg:mb-2 md:mb-[5vw] flex-col flex gap-2 mb-[10vw]">
                        <h2 className="lg:text-[1.55vw] md:text-[5vw] text-[7vw] text-[#2a2a2a]">Our Customers Say</h2>
                        <Image className="lg:w-[40%] w-[70%]" src="/assets/home/rating.svg" alt="Rating Stars" width={200} height={50} />
                    </div>
                    <div className="lg:items-end justify-between w-full h-fit gap-[7vw] lg:flex-nowrap md:flex-wrap md:flex-row md:items-end md:justify-between flex items-center flex-col">
                        <a href="https://workspace.google.com/marketplace/app/patronum/824001351376" target="_blank" rel="noopener">
                            <Image className="h-auto " src="https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/google-marketplace.png" alt="Google Workspace Image" width={353} height={108} />
                        </a>
                        <a href="https://www.capterra.in/software/1025234/patronum" target="_blank" rel="noopener">
                            <Image className="h-auto" src="https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/capterra.png" alt="Captera Image" width={160} height={36} />
                        </a>
                        <a href="https://www.softwareadvice.com/crm/patronum-profile/" target="_blank" rel="noopener">
                            <Image className="h-auto mb-[0.5vw]" src="https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/software-advice.png" alt="Software Advice Image" width={222} height={26} />
                        </a>
                        <a href="https://www.getapp.com/it-management-software/a/patronum/" target="_blank" rel="noopener">
                            <Image className="h-auto mb-[0.3vw]" src="https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/get-app.png" alt="Get App Image" width={150} height={28} />
                        </a>
                        <a href="https://www.g2.com/products/patronum/reviews" target="_blank" rel="noopener">
                            <Image className="h-auto" src="https://wordpress-213572-4463644.cloudwaysapps.com/wp-content/uploads/2024/10/g2.png" alt="G2 Image" width={45} height={47} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ratings;