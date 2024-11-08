import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useEffect } from "react";
import Link from "next/link";
import LinkButton from "@/components/Buttons/LinkButton";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function UseCases() {

    if (globalThis.innerWidth > 1024) {
        useEffect(() => {
            let ctx = gsap.context(() => {
                const sectionLength = document.getElementsByClassName('useCase-item').length;
                const foc_container = document.querySelector('.useCases-items');
                const newWidth = sectionLength * 100;
                foc_container.style.width = newWidth + "%";
                const foc_sections = gsap.utils.toArray(".useCases-items .useCase-item");

                const navbarLinks = document.querySelectorAll(".use-cases-list li a");
                const sections = gsap.utils.toArray('.useCase-item');

                const scrollTween = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#use-cases",
                        pin: true,
                        scrub: 1,
                        start: '20% top',
                        markers: false,
                        snap: {
                            snapTo: 1 / (foc_sections.length - 1),
                            inertia: false,
                            duration: { min: 0.1, max: 0.5 }
                        },
                        end: "+=" + (foc_container.offsetWidth - innerWidth),
                        invalidateOnRefresh: true,
                    }
                });

                scrollTween.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: 'none',
                });

                sections.forEach((section, i) => {

                    let relatedLink = document.querySelector(`[data-section="${section.id}"]`);

                    ScrollTrigger.create({
                        trigger: section,
                        start: "left 90%",
                        end: "right 90%",
                        containerAnimation: scrollTween,
                        markers: false,
                        id: `section-${i + 1}`,
                        onToggle: self => { // Use self to access trigger element within onToggle
                            const currentActive = document.querySelector('.use-cases-list .active');
                            if (self.isActive) {
                                relatedLink.classList.add('active');
                                if (currentActive && currentActive !== relatedLink) {
                                    currentActive.classList.remove('active');
                                }
                            } else {
                                relatedLink.classList.remove('active');
                            }
                        },
                    });
                });

                navbarLinks.forEach(anchor => {
                    anchor.addEventListener("click", function (e) {
                        e.preventDefault();
                        let targetElem = document.querySelector(e.target.getAttribute("href")),
                            y = targetElem;
                        if (targetElem && foc_container.isSameNode(targetElem.parentElement)) {
                            // Ensure scrollTrigger and its properties are defined
                            if (scrollTween.scrollTrigger && 'end' in scrollTween.scrollTrigger && 'start' in scrollTween.scrollTrigger) {
                                let totalScroll = scrollTween.scrollTrigger.end - scrollTween.scrollTrigger.start,
                                    totalMovement = (foc_sections.length - 1) * targetElem.offsetWidth;
                                y = Math.round(scrollTween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
                            }
                            gsap.to(window, {
                                scrollTo: {
                                    y: y,
                                    autoKill: false
                                },
                                duration: 1
                            });
                        }
                    });
                });
            });
            return () => ctx.revert();
        }, []);

        useEffect(() => {
            let ctx = gsap.context(() => {
                const UseCaseList = document.querySelectorAll('.use-cases-list li')

                gsap.fromTo(UseCaseList, {
                    scrollTrigger: {
                        trigger: '.use-cases-list',
                        start: 'top 80%',
                    },
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            });
            return () => ctx.revert();
        }, []);
    }

    return (
        <>
            <section id="use-cases" className="lg:block hidden">
                <div className="content">
                    <div className="container overflow-hidden">
                        <div className="section-head">
                            <h2 className="title-4xl text-anim">
                                <span>Master Challenges{" "}</span>
                                <br />
                                <span>Across Your Organization</span>
                            </h2>
                        </div>

                        <div className="use-cases-button">
                            <ul className="use-cases-list flex-all">
                                <li className="" data-section="useCase-1">
                                    <a href="#useCase-1" className="anchor" >For Business</a>
                                </li>
                                <li className="" data-section="useCase-2">
                                    <a href="#useCase-2" className="anchor" >For Human Resources</a>
                                </li>
                                <li className="" data-section="useCase-3">
                                    <a href="#useCase-3" className="anchor" >For Sales & Marketing</a>
                                </li>
                                <li className="" data-section="useCase-4">
                                    <a href="#useCase-4" className="anchor" >For Education</a>
                                </li>
                                <li className="" data-section="useCase-5">
                                    <a href="#useCase-5" className="anchor" >For Users</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="useCase-Scroll">
                        <div className="useCases-Container" id="panels">

                            <div className="useCases-items fadeUp" id="panels-container">

                                {/* Use Cases Item 1 */}
                                <div className="useCase-item w-full h-full" id="useCase-1">
                                    <div className="use_case_content">
                                        <div className="useCase-item-left">
                                            <img src="/assets/home/patronum-for-business.svg" loading="lazy" alt="use cases image" title="use case of patronum" />
                                        </div>
                                        <div className="useCase-item-right">
                                            <h4 className="title-3xl mb-[1.5vw]">
                                                <span>Patronum for Business</span>
                                            </h4>
                                            <p className="para-italic mb-[1.5vw]">
                                                Unlock the full potential of Google Workspace for your business, at your command.
                                            </p>
                                            <p className="content-p mb-[1.5vw]">
                                                <span>
                                                    Imagine a world where onboarding and offboarding processes are seamlessly automated, where organization-wide policies don't just exist; they thrive, ensuring efficiency and compliance.
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                    Patronum brings this vision to life, offering a suite of capabilities tailored for both large enterprises and SMEs. From Google Drive Management & Contact Sharing, to Email Signature Management, Patronum equips IT professionals and non-IT managers alike with unparalleled control and customization.
                                                </span>
                                            </p>
                                            <LinkButton href="/patronum-for-business" btnText="Learn More" />
                                        </div>
                                    </div>
                                </div>

                                {/* Use Cases Item 2 */}
                                <div className="useCase-item w-full h-full" id="useCase-2">
                                    <div className="use_case_content">
                                        <div className="useCase-item-left">
                                            <img src="/assets/home/patronum-for-hr.svg" loading="lazy" alt="use cases image" title="use case of patronum" />
                                        </div>
                                        <div className="useCase-item-right">
                                            <h4 className="title-3xl mb-[1.5vw]">
                                                <span>Patronum For HR</span>
                                            </h4>
                                            <p className="para-italic mb-[1.5vw]">
                                                Develop a culture of collaboration & turn new hires into integral assets from day one.
                                            </p>
                                            <p className="content-p mb-[1.5vw]">
                                                <span>
                                                    As an HR executive, do you daydream of offering a personalised, resource-rich and interconnected workspace experience to each user?
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                    With Patronum, onboarding new hires is a tailored journey, where new members are greeted by a Google Workspace sculpted just for their role. Google Groups, Labels, Calendars, and Contacts converge, syncing seamlessly with smart devices. With Patronum, your team is thriving from the outset, enveloped in a culture of collaboration.
                                                </span>
                                            </p>
                                            <LinkButton href="patronum-for-hr" btnText="Learn More" />
                                        </div>
                                    </div>
                                </div>

                                {/* Use Cases Item 3 */}
                                <div className="useCase-item w-full h-full" id="useCase-3">
                                    <div className="use_case_content">
                                        <div className="useCase-item-left">
                                            <img src="/assets/home/patronum-for-sales-marketing.svg" loading="lazy" alt="use cases image" title="use case of patronum" />
                                        </div>
                                        <div className="useCase-item-right">
                                            <h4 className="title-3xl mb-[1.5vw]">
                                                <span>For Sales & Marketing</span>
                                            </h4>
                                            <p className="para-italic mb-[1.5vw]">
                                                Unleash your Sales & Marketing teams from the shackles of IT dependency
                                            </p>
                                            <p className="content-p mb-[1.5vw]">
                                                <span>
                                                    Patronum breaks down silos, fostering a culture of shared success. Patronum enables sales & marketing managers to directly manage key Google Workspace features - from resetting passwords to configuring email signatures. From shared contacts and customer lists to up-to-date templates, every feature is designed to streamline workflows & amplify your market presence.
                                                </span>
                                                <br />
                                                <br />
                                                <span>
                                                    Patronum is like having a digital wizard at your fingertips, ensuring your team remains in the fast lane, fully equipped and ready from day one.
                                                </span>
                                            </p>
                                            <LinkButton href="patronum-for-sales-marketing" btnText="Learn More"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Use Cases Item 4 */}
                                <div className="useCase-item w-full h-full" id="useCase-4">
                                    <div className="use_case_content">
                                        <div className="useCase-item-left">
                                            <img src="/assets/home/patronum-for-education.svg" loading="lazy" alt="use cases image" title="use case of patronum" />
                                        </div>
                                        <div className="useCase-item-right">
                                            <h4 className="title-3xl mb-[1.5vw]">
                                                <span>Patronum For Education</span>
                                            </h4>
                                            <p className="para-italic mb-[1.5vw]">
                                                Efficiency meets security, on a budget, enabling you to focus on educational excellence.
                                            </p>
                                            <p className="content-p mb-[1.5vw]">
                                                <span>
                                                    Patronum is as an indispensable ally for educational institutions leveraging Google Workspace. From the precise alignment of staff in Google Groups to the strategic distribution of resources, Patronum ensures that everyone is on the same page.                                    </span>
                                                <br />
                                                <br />
                                                <span>
                                                    Patronum is as an indispensable ally for educational institutions leveraging Google Workspace. From the precise alignment of staff in Google Groups to the strategic distribution of resources, Patronum ensures that everyone is on the same page.                                       </span>
                                            </p>
                                            <LinkButton href="patronum-for-education" btnText="Learn More"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Use Cases Item 5 */}
                                <div className="useCase-item w-full h-full" id="useCase-5">
                                    <div className="use_case_content">
                                        <div className="useCase-item-left">
                                            <img src="/assets/home/patronum-for-users.svg" loading="lazy" alt="use cases image" title="use case of patronum" />
                                        </div>
                                        <div className="useCase-item-right">
                                            <h4 className="title-3xl mb-[1.5vw]">
                                                <span>Patronum For Users</span>
                                            </h4>
                                            <p className="para-italic mb-[1.5vw]">
                                                Transform the way your team works—with every document, contact, & calendar at their fingertips.
                                            </p>
                                            <p className="content-p mb-[1.5vw]">
                                                <span>
                                                    Patronum seamlessly integrates Google Drive Management, shares contacts & calendars and gives users a clear view of organization hierarchy, ensuring your staff has what they need, when they need it.                                         </span>
                                                <br />
                                                <br />
                                                <span>
                                                    Patronum eliminates the common hurdles of document access and schedule coordination, enabling your all team members to focus on productivity. Patronum also enhances organizational connectivity, with the ability to search for colleagues by department, location, or skillset via the Organization Chart and People Finder.                                        </span>
                                            </p>
                                            <LinkButton href="patronum-for-users" btnText="Learn More"/>
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