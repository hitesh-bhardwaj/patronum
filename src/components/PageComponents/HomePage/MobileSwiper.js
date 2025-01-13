import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import LinkButton from '@/components/Buttons/LinkButton';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MobileSwiper() {
    return (
        <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="UseCaseSwiper fadeUp"
        >
            {useCaseData.map((data, index) => (
                <SwiperSlide key={index} className=''>
                    <UseCasesMobileCard
                        title={data.title}
                        img={data.img}
                        description1={data.description1}
                        description2={data.description2}
                        link={data.link}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

const UseCasesMobileCard = ({ title, img, description1, description2, link }) => {
    return (
        <div className="text-center w-full h-full md:px-12 px-8 space-y-[8vw] pt-[1.4vw]">
            <h4 className="md:text-4xl text-[6vw]">
                <span>
                    {title}
                </span>
            </h4>
            <div className="md:w-1/2 w-2/3 mx-auto">
                <img width="265" height="176" loading="lazy" className="w-full h-full" src={`assets/home/${img}`} alt={`${title} image`} />
            </div>
            <div className="md:text-2xl text-lg space-y-[4vw]">
                <p>
                    {description1}
                </p>
                <p>
                    {description2}
                </p>
            </div>
            <div className="section-button-container">
                <LinkButton
                    href={link}
                    btnText="Learn More"
                />
            </div>
        </div>
    )
}

const useCaseData = [
    {
        id: 0,
        title: "For Business",
        img: "patronum-for-business.svg",
        description1: "Imagine a world where onboarding and offboarding processes are seamlessly automated, where organization-wide policies don't just exist; they thrive, ensuring efficiency and compliance.",
        description2: "Patronum brings this vision to life, offering a suite of capabilities tailored for both large enterprises and SMEs. From Google Drive Management & Contact Sharing, to Email Signature Management, Patronum equips IT professionals and non-IT managers alike with unparalleled control and customization.",
        link: "/patronum-for-business",
    },
    {
        id: 1,
        title: "For HR",
        img: "patronum-for-hr.svg",
        description1: "As an HR executive, do you daydream of offering a personalised, resource-rich and interconnected workspace experience to each user?",
        description2: "With Patronum, onboarding new hires is a tailored journey, where new members are greeted by a Google Workspace sculpted just for their role. Google Groups, Labels, Calendars, and Contacts converge, syncing seamlessly with smart devices. With Patronum, your team is thriving from the outset, enveloped in a culture of collaboration.",
        link: "/patronum-for-hr",
    },
    {
        id: 3,
        title: "For Sales & Marketing",
        img: "patronum-for-sales-marketing.svg",
        description1: "Patronum breaks down silos, fostering a culture of shared success. Patronum enables sales & marketing managers to directly manage key Google Workspace features - from resetting passwords to configuring email signatures. From shared contacts and customer lists to up-to-date templates, every feature is designed to streamline workflows & amplify your market presence.",
        description2: "Patronum is like having a digital wizard at your fingertips, ensuring your team remains in the fast lane, fully equipped and ready from day one.",
        link: "/patronum-for-sales-marketing",
    },
    {
        id: 4,
        title: "For Education",
        img: "patronum-for-education.svg",
        description1: "Patronum is as an indispensable ally for educational institutions leveraging Google Workspace. From the precise alignment of staff in Google Groups to the strategic distribution of resources, Patronum ensures that everyone is on the same page.",
        description2: "Patronum is as an indispensable ally for educational institutions leveraging Google Workspace. From the precise alignment of staff in Google Groups to the strategic distribution of resources, Patronum ensures that everyone is on the same page.",
        link: "/patronum-for-hr",
    },
    {
        id: 5,
        title: "For Users",
        img: "patronum-for-users.svg",
        description1: "Patronum seamlessly integrates Google Drive Management, shares contacts & calendars and gives users a clear view of organization hierarchy, ensuring your staff has what they need, when they need it.",
        description2: "Patronum eliminates the common hurdles of document access and schedule coordination, enabling your all team members to focus on productivity. Patronum also enhances organizational connectivity, with the ability to search for colleagues by department, location, or skillset via the Organization Chart and People Finder.",
        link: "/patronum-for-users",
    }
]