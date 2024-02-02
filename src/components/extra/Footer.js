import { useEffect } from 'react';

const Footer = () => {

    return(
        <div id="footer">
            <div className="footer">
                <div className="container">
                    <div className='footer-main w-full h-full'>

                        <div className="footer-top">
    
                        <div className="footer-top-left">
                            <img className="footer-logo" src="/logo-white.svg" alt="patronum logo" title="patronum logo"/>
                            <p>Your Google Workspace Manager Providing a better way to manage your Google Workspace.</p>

                            <div className='flex gap-6 footer-iso'>
                                <img src='/assets/footer/ISO-1.svg' alt='ISO Certficates'/>
                                <img src='/assets/footer/ISO-2.svg' alt='ISO Certficates'/>
                                <img src='/assets/footer/ISO-3.svg' alt='ISO Certficates'/>
                                <img src='/assets/footer/ISO-4.svg' alt='ISO Certficates'/>
                            </div>

                            <div className='flex gap-6 footer-award'>
                                <img src="/assets/footer/award-2.png" alt="Award for best ease of use image" title="Award for best ease of use image"/>
                                <img src="/assets/footer/award-1.png" alt="Award for best value image" title="Award for best value image"/>
                                <img src="/assets/footer/google-partner-white.svg" alt="Patronum Google Patrner" title="Patronum Google Patrner"/>
                            </div>
                        </div>

                        <div className='footer-top-right'>
                            <div className='footer-top-right-top'>
                                <div className="">
                                    <h6 className="footer-link-head">Important Links</h6>
                                    <ul className='footer-links'>
                                        <li className="py-2">
                                            <a href="/features" className="text-xl">
                                                Features
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/use-cases" className="text-xl">
                                                Use Cases
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/community" className="text-xl">
                                                Community
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/resources" className="text-xl">
                                                Resources
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/legal" className="text-xl">
                                                Legal
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/help.patronum.io" className="text-xl">
                                                Help
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="">
                                    <h6 className="footer-link-head">Other Links</h6>
                                    <ul className='footer-links'>
                                        <li className="py-2">
                                            <a href="/blog" className="text-xl">
                                                About
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/guides" className="text-xl">
                                                Pricing
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/case-studies" className="text-xl">
                                                Partners
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/ebooks" className="text-xl">
                                                Support
                                            </a>
                                        </li>
                                        <li className="py-2">
                                            <a href="/webinars" className="text-xl">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='social-links'>
                                <ul className=''>
                                    <li>
                                        <a href='#'>
                                            <img src='/assets/footer/facebook.svg' alt='social icons'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <img src='/assets/footer/linkedin.svg' alt='social icons'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <img src='/assets/footer/twitter.svg' alt='social icons'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <img src='/assets/footer/instagram.svg' alt='social icons'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <img src='/assets/footer/youtube.svg' alt='social icons'/>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                </div>

                <div className="py-10 px-14">
                    <p className="text-center font-[400] text-[15px]">Bespin Labs Limited is registered with the Information Commissioners Office in relation to the processing of personal information (registration number: ZA686937). Bespin Labs Limited is incorporated in England and Wales (company number: 11068628). Our registered office is First Floor Office Suite, Mill B Colne Road Buildings, Colne Road, Huddersfield, United Kingdom, HD1 3AG</p>
                </div>

                <div className="py-6 border-t border-gray-200 text-[16px] flex justify-between text-center text-[aeonik]">
                    <p className="">© 2024 <a href="www.bespinlabs.com" target="black" className="">Bespin Labs Ltd.</a> All rights reserved.</p>
                    <a href='#'>By : Enigma</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;