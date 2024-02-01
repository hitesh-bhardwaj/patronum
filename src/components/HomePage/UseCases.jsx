import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#useCase-Scroll",
                    pin: true,
                    scrub: 1,
                    start: 'top 15%',
                    end: '+=2500 15%',
                    // markers: true,
                }
            });

            tl.to('.useCases-items', {
                x: '-80%',
                duration: 10,
                ease: 'power1.out',
            })
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section id="use-cases">
                <div className="container">
                    <div className="content overflow-hidden">
                        <div className="use-cases-top">
                            <h3 className="title-4xl">
                                <span>Master Challenges</span> 
                                <br />
                                <span>Across Your Organisation</span>
                            </h3>
                        </div>

                        <div id="useCase-Scroll">
                            <div className="use-cases-button">
                                <ul className="use-cases-list flex-all">
                                    <li className="active">
                                        <a href="#useCase-1">For Business</a>
                                    </li>
                                    <li className="">
                                        <a href="#useCase-2">For Human Resources</a>
                                    </li>
                                    <li className="">
                                        <a href="#useCase-3">For Sales & Marketing</a>
                                    </li>
                                    <li className="">
                                        <a href="#useCase-4">For Education</a>
                                    </li>
                                    <li className="">
                                        <a href="#useCase-5">For Users</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="useCases-Container">
                            <div className="useCases-items">

                            <div className="useCase-item flex-all" id="useCase-1">
                                <div className="useCase-item-left">
                                    <img src="/assets/home/UseCase-1.svg"/>
                                </div>
                                <div className="useCase-item-right">
                                    <h4 className="title-3xl mb-10">
                                        <span>Patronum for Business</span>
                                    </h4>
                                    <p className="content-p mb-10">
                                        <span>
                                            Patronum gets more out of Google Workspace by expanding access to administration tasks across your business including some for users. By setting up policies with the help of IT professionals.
                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            You can delegate and automate a subset of administrative capabilities to non-IT managers, secure in the knowledge they are not going to break anything.
                                        </span>
                                    </p>
                                    <a href="#" className="link-btn">
                                        <span className="btn-text">Learn More</span>
                                        <span className="btn-images">
                                            <div>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="useCase-item flex-all" id="useCase-2">
                                <div className="useCase-item-left">
                                    <img src="/assets/home/UseCase-2.svg"/>
                                </div>
                                <div className="useCase-item-right">
                                    <h4 className="title-3xl mb-10">
                                        <span>Patronum For HR</span>
                                    </h4>
                                     <p className="content-p mb-10">
                                        <span>
                                            With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.                                        </span>
                                    </p>
                                    <a href="#" className="link-btn">
                                        <span className="btn-text">Learn More</span>
                                        <span className="btn-images">
                                            <div>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="useCase-item flex-all" id="useCase-3">
                                <div className="useCase-item-left">
                                    <img src="/assets/home/UseCase-3.svg"/>
                                </div>
                                <div className="useCase-item-right">
                                    <h4 className="title-3xl mb-10">
                                        <span>Patronum for Sales & Marketing</span>
                                    </h4>
                                    <p className="content-p mb-10">
                                        <span>
                                            Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts via labels, while giving administrators enhanced visibility and management of the whole process.                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            Patronum is the only enterprise-ready contact sharing application for Google Workspace. Allow your users to share their specific contacts.                                        </span>
                                    </p>
                                    <a href="#" className="link-btn">
                                        <span className="btn-text">Learn More</span>
                                        <span className="btn-images">
                                            <div>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="useCase-item flex-all" id="useCase-4">
                                <div className="useCase-item-left">
                                    <img src="/assets/home/UseCase-4.svg"/>
                                </div>
                                <div className="useCase-item-right">
                                    <h4 className="title-3xl mb-10">
                                        <span>Patronum For Education</span>
                                    </h4>
                                    <p className="content-p mb-10">
                                        <span>
                                            With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate the clean up of file sharing with external organisations.                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            With Patronum you can automatically unshare Google Files reducing your organisations exposure. Quickly and easily set up policies that automate.                                        </span>
                                    </p>
                                    <a href="#" className="link-btn">
                                        <span className="btn-text">Learn More</span>
                                        <span className="btn-images">
                                            <div>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="useCase-item flex-all" id="useCase-5">
                                <div className="useCase-item-left">
                                    <img src="/assets/home/UseCase-5.svg"/>
                                </div>
                                <div className="useCase-item-right">
                                    <h4 className="title-3xl mb-10">
                                        <span>Patronum For Users</span>
                                    </h4>
                                    <p className="content-p mb-10">
                                        <span>
                                            With Patronum your staff will be up and running from day one with Google Drive Management, contact and calendar sharing. No more hunting for documents, or requesting access to schedules, or data they need.                                        </span>
                                        <br />
                                        <br />
                                        <span>
                                            Even in small organizations, it’s often difficult to connect with the right people. Patronum gives your organization instant access to your internal staff list via contact sharing.                                        </span>
                                    </p>
                                    <a href="#" className="link-btn">
                                        <span className="btn-text">Learn More</span>
                                        <span className="btn-images">
                                            <div>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                                <svg className="" viewBox="0 0 38 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 9.27361C2.25898 9.27361 4.5105 9.26604 6.76947 9.26604C15.4997 9.26604 24.2299 9.26604 32.9602 9.26604C33.1018 9.26604 33.2509 9.26604 33.3777 9.26604C30.8876 6.74513 28.4049 4.22423 25.9521 1.74117C26.5784 1.09769 27.1375 0.537491 27.6669 0C31.0814 3.4672 34.5556 6.98738 37.9925 10.4773C34.5482 13.9672 31.0814 17.4874 27.6296 20.9924C27.1003 20.4549 26.5486 19.9023 25.982 19.327C28.4571 16.8212 30.9472 14.3003 33.4373 11.7794C33.4299 11.7491 33.4224 11.7188 33.415 11.6885C33.2733 11.6885 33.1391 11.6885 32.9975 11.6885C22.1573 11.6885 11.3172 11.6885 0.484599 11.6885C0.320581 11.6885 0.164018 11.6885 0 11.681C0 10.8861 0 10.0761 0 9.27361Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </section>    
        </>
    );
}