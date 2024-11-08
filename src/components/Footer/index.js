import Link from "next/link";
import FooterContact from "./FooterContact";
import styles from "./styles.module.css";
import Newsletter from "./Newsletter";
// import Newsletter from "./Newsletter";

const Footer = () => {

    return (
        <footer id="footer" className="relative z-10">

            <FooterContact />

            <div className={styles.footer}>
                <div className="container">
                    <div className='w-full h-full'>
                        <div className={styles.footerTop}>
                            <div className={`${styles.footerTopLeft} fadeUp`}>
                                <img className="lg:w-[50%] w-[50%]" width="311" height="75" loading='lazy' src="/logo-white.svg" alt="patronum logo" title="patronum logo" />
                                <p className="lg:w-[85%] lg:text-[1.2vw] lg:mb-[0.5vw] font-normal leading-[1.5] md:text-[3.5vw] md:mb-[1vw] text-[4.6vw] mb-[6vw]">Your Google Workspace Manager Providing a better way to manage your Google Workspace.</p>

                                <div className={`flex gap-6 ${styles.footerIso}`}>
                                    <img width="76" height="76" src='/assets/footer/ISO-1.svg' loading='lazy' alt='ISO Certficates' />
                                    <img width="76" height="76" src='/assets/footer/ISO-2.svg' loading='lazy' alt='ISO Certficates' />
                                    <img width="76" height="76" src='/assets/footer/ISO-3.svg' loading='lazy' alt='ISO Certficates' />
                                    <img width="76" height="76" src='/assets/footer/ISO-4.svg' loading='lazy' alt='ISO Certficates' />
                                </div>

                                <div className={`flex gap-6 lg:w-[90%] md:flex-nowrap flex-wrap md:w-[70%] w-full items-center md:justify-normal justify-center ${styles.footerAward}`}>
                                    <img className="lg:w-[15%] md:w-[16%] w-[20%] object-contain h-auto" loading='lazy' src="/assets/footer/award-2.png" alt="Award for best ease of use image" title="Award for best ease of use image" />
                                    <img className="lg:w-[15%] md:w-[16%] w-[20%] object-contain h-auto" loading='lazy' src="/assets/footer/award-1.png" alt="Award for best value image" title="Award for best value image" />
                                    <img className="lg:w-[27%] md:w-[30%] w-[30%] object-contain h-auto" loading='lazy' src="/assets/footer/google-partner-white.svg" alt="Patronum Google Patrner" title="Patronum Google Patrner" />
                                    <img className="lg:w-[27%] md:w-[28%] w-[35%] object-contain h-auto" loading="lazy" src="/assets/footer/GOV.UK-2.png" alt="UK GOV digital marketplace logo" title="UK GOV digital marketplace logo" />
                                </div>

                                <div className={`${styles.socialLinks} fadeUp`}>
                                    <ul className=''>
                                        <li>
                                            <Link href='https://www.facebook.com/patronum.io' target="_blank" rel="nofollow">
                                                <img width="25" height="25" src='/assets/footer/facebook.svg' alt='social icons' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.linkedin.com/company/wearepatronum/' target="_blank" rel="nofollow">
                                                <img width="25" height="25" src='/assets/footer/linkedin.svg' alt='social icons' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://twitter.com/Patronum_io' target="_blank" rel="nofollow">
                                                <img width="25" height="25" src='/assets/footer/twitter.svg' alt='social icons' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.instagram.com/patronum.io/' target="_blank" rel="nofollow">
                                                <img width="25" height="25" src='/assets/footer/instagram.svg' alt='social icons' />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='https://www.youtube.com/@wearepatronum' target="_blank" rel="nofollow">
                                                <img width="25" height="25" src='/assets/footer/youtube.svg' alt='social icons' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>


                            </div>

                            <div className={styles.footerTopRight}>
                                <div className={`${styles.footerTopRightTop} fadeUp`}>
                                    <div className="">
                                        <h6 className={styles.footerLinkHead}>Important Links</h6>
                                        <ul className={styles.footerLinks}>
                                            <li className={styles.py2}>
                                                <Link href="/features" className="text-xl">
                                                    Features
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/use-cases" className="text-xl">
                                                    Use Cases
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/privacy-policy" className="text-xl">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/security-and-compliance" className="text-xl">
                                                    Compliance
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="https://help.patronum.io" target="_blank" rel="nofollow" className="text-xl">
                                                    Help
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/legal" className="text-xl">
                                                    Legal
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="">
                                        <h6 className={styles.footerLinkHead}>Other Links</h6>
                                        <ul className={styles.footerLinks}>
                                            <li className={styles.py2}>
                                                <Link href="/about-us" className="text-xl">
                                                    About
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/pricing" className="text-xl">
                                                    Pricing
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/partner-with-us" className="text-xl">
                                                    Partners
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/support" className="text-xl">
                                                    Support
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="/blog" className="text-xl">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className={styles.py2}>
                                                <Link href="https://community.patronum.io" target="_blank" rel="nofollow" className="text-xl">
                                                    Community
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Newsletter />
                                
                            </div>
                        </div>

                        <div className="py-10 px-0 fadeUp">
                            <p className="text-center font-[400] lg:text-[0.89vw] md:text-[2.6vw] text-[3.25vw]">Bespin Labs Limited is registered with the Information Commissioners Office in relation to the processing of personal information (registration number: ZA686937). Bespin Labs Limited is incorporated in England and Wales (company number: 11068628). Our registered office is First Floor Office Suite, Mill B Colne Road Buildings, Colne Road, Huddersfield, United Kingdom, HD1 3AG</p>
                        </div>

                        <span className="drawLine h-[1px] bg-white/50 w-full block" />

                        <div className="py-6 lg:text-[0.9vw] md:text-[2.5vw] lg:pr-0 md:pr-[8vw] text-[2.8vw] flex justify-between text-center tracking-[0.5px]">
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