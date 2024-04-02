import Link from "next/link";
import FooterContact from "./FooterContact";

const Footer = () => {

    return(
        <footer id="footer" className="relative z-10">

            <FooterContact />

            <div className="footer">
                <div className="container">
                    <div className='footer-main w-full h-full'>

                        <div className="footer-top">
    
                        <div className="footer-top-left">
                            <img className="footer-logo fadeUp" width="311" height="75" loading='lazy' src="/logo-white.svg" alt="patronum logo" title="patronum logo"/>
                            <p className="fadeUp">Your Google Workspace Manager Providing a better way to manage your Google Workspace.</p>

                            <div className='flex gap-6 footer-iso fadeUp'>
                                <img width="76" height="76" src='/assets/footer/ISO-1.svg' loading='lazy' alt='ISO Certficates'/>
                                <img width="76" height="76" src='/assets/footer/ISO-2.svg' loading='lazy' alt='ISO Certficates'/>
                                <img width="76" height="76" src='/assets/footer/ISO-3.svg' loading='lazy' alt='ISO Certficates'/>
                                <img width="76" height="76" src='/assets/footer/ISO-4.svg' loading='lazy' alt='ISO Certficates'/>
                            </div>

                            <div className='flex gap-6 footer-award fadeUp'>
                                <img loading='lazy' src="/assets/footer/award-2.png" alt="Award for best ease of use image" title="Award for best ease of use image"/>
                                <img loading='lazy' src="/assets/footer/award-1.png" alt="Award for best value image" title="Award for best value image"/>
                                <img loading='lazy' src="/assets/footer/google-partner-white.svg" alt="Patronum Google Patrner" title="Patronum Google Patrner"/>
                            </div>
                        </div>

                        <div className='footer-top-right'>
                            <div className='footer-top-right-top'>
                                <div className="">
                                    <h6 className="footer-link-head fadeUp">Important Links</h6>
                                    <ul className='footer-links fadeUp'>
                                        <li className="py-2">
                                            <Link href="/features" className="text-xl">
                                                Features
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="/use-cases" className="text-xl">
                                                Use Cases
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="https://community.patronum.io" target="_blank" className="text-xl">
                                                Community
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="#" className="text-xl">
                                                Resources
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="/legal" className="text-xl">
                                                Legal
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="https://help.patronum.io" target="_blank" className="text-xl">
                                                Help
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="">
                                    <h6 className="footer-link-head fadeUp">Other Links</h6>
                                    <ul className='footer-links fadeUp'>
                                        <li className="py-2">
                                            <Link href="/about-us" className="text-xl">
                                                About
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="/pricing" className="text-xl">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="/partner-with-us" className="text-xl">
                                                Partners
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="/support" className="text-xl">
                                                Support
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link href="/contact-us" className="text-xl">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='social-links fadeUp'>
                                <ul className=''>
                                    <li>
                                        <Link href='https://www.facebook.com/patronum.io' target="_blank">
                                            <img width="25" height="25" src='/assets/footer/facebook.svg' alt='social icons'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.linkedin.com/company/wearepatronum/' target="_blank">
                                            <img width="25" height="25" src='/assets/footer/linkedin.svg' alt='social icons'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://twitter.com/Patronum_io' target="_blank">
                                            <img width="25" height="25" src='/assets/footer/twitter.svg' alt='social icons'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.instagram.com/patronum.io/' target="_blank">
                                            <img width="25" height="25" src='/assets/footer/instagram.svg' alt='social icons'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.youtube.com/@wearepatronum' target="_blank">
                                            <img width="25" height="25" src='/assets/footer/youtube.svg' alt='social icons'/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                </div>

                <div className="py-10 lg:px-10 px-0 fadeUp">
                    <p className="text-center font-[400] lg:text-[0.84vw] text-[3vw]">Bespin Labs Limited is registered with the Information Commissioners Office in relation to the processing of personal information (registration number: ZA686937). Bespin Labs Limited is incorporated in England and Wales (company number: 11068628). Our registered office is First Floor Office Suite, Mill B Colne Road Buildings, Colne Road, Huddersfield, United Kingdom, HD1 3AG</p>
                </div>
                
                <span className="drawLine h-[1px] bg-white/50 w-full block"/>

                <div className="py-6 lg:text-[0.9vw] text-[2.5vw] flex justify-between text-center text-[aeonik] tracking-[0.5px]">
                    <span>© 2024 <Link href="https://www.bespinlabs.com/" target="_blank" className="relative after:absolute after:bg-white after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full">Bespin Labs Ltd.</Link> All rights reserved.</span>
                    <Link href='https://weareenigma.com' target="_blank" title="We Create Magic">By: <span className="relative after:absolute after:bg-white after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full">Enigma</span></Link>
                </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;