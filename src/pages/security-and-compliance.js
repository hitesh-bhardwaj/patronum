import LinkButton from "@/components/Buttons/LinkButton";
import PageLayout from "@/components/PageLayout";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function security() {

  const cerfications = [
    {
      id: "1",
      title: "ISO 27001:2013",
      contentTop: "Patronum is certified under ISO 27001:2013, a premier global standard for information security management systems (ISMS).",
      description: "This certification demonstrates our commitment to maintaining the highest standards of data security. The ISO 27001:2013 standard provides a systematic approach to managing sensitive company information so that it remains secure. It includes people, processes, and IT systems by applying a risk management process. It helps small, medium, and large businesses in any sector keep information assets secure. Following this standard, we ensure the confidentiality, integrity, and availability of information through a set of policies, procedures, and technical and physical controls. These measures are critical in safeguarding the security of the systems and technology that process, store, and transmit this information.",
      imgSrc: "iso-27001_2013.svg",
      link: "https://drive.google.com/file/d/1JheIsdSCdAcXR6Hc6GPYtwjfDcMBJAYd/view",
      btnText: "View Certificate"
    },
    {
      id: "2",
      title: "ISO 27701:2019",
      contentTop: "As a privacy extension to ISO 27001, ISO 27701:2019 enhances our ISMS to include management of privacy risks associated with personally identifiable information (PII).",
      description: "This standard outlines the requirements for establishing, implementing, maintaining, and continuously improving a Privacy Information Management System (PIMS). By adhering to ISO 27701:2019, Patronum ensures that the privacy rights of individuals are respected and protected, reducing the risk to the privacy of data. This certification is especially crucial as it addresses the need to manage privacy through data processing or technology, ensuring compliance with privacy regulations like the GDPR. For organizations acting as PII controllers or processors, it provides clarity on roles and responsibilities in the protection of personal data.",
      imgSrc: "iso-27701_2019.svg",
      link: "https://drive.google.com/file/d/1UfvIC0dhmegETihBmlAkW8DJ8OGTSVDt/view",
      btnText: "View Certificate"
    },
    {
      id: "3",
      title: "ISO 22301:2019",
      contentTop: "Our compliance with ISO 22301:2019 underlines our readiness to safeguard against, respond to, and recover from disruptive incidents.",
      description: "This business continuity management standard helps organizations prepare for, and deal with, potential threats to the business. The standard demands a documented management system for implementing and managing an effective business continuity plan. It ensures continuity and recovery during times of crisis, thus minimizing the impact on business operations. Patronum's adherence to ISO 22301:2019 reflects our commitment to resilience and our ability to operate under adverse conditions, thereby protecting our stakeholders' interests.",
      imgSrc: "iso-22301_2019.svg",
      link: "https://drive.google.com/file/d/1C4S5dI5WGtmvTfZ_VMBanb4R9DDNkx3w/view",
      btnText: "View Certificate"
    },
    {
      id: "4",
      title: "ISO 9001:2015",
      contentTop: "ISO 9001:2015 sets out the criteria for a quality management system and is the only standard in the ISO 9000 family that can be certified to.",
      description: "It focuses on various aspects of quality management and contains some of ISO’s best-known standards. The standards provide guidance and tools for companies and organizations who want to ensure that their products and services consistently meet customer’s requirements, and that quality is consistently improved. This standard is based on a number of quality management principles including a strong customer focus, the motivation and implication of top management, the process approach, and continual improvement. By meeting these standards, Patronum demonstrates its ability to consistently provide products and services that meet customer and regulatory requirements.",
      imgSrc: "iso-9001_2015.svg",
      link: "https://drive.google.com/file/d/16ll3xpO9gHPYei9OfkpqA7ffuGKfTl72/view",
      btnText: "View Certificate"
    },
    {
      id: "5",
      title: "Cyber Essentials",
      contentTop: "Cyber Essentials is a UK government-backed, industry-supported scheme to help organizations protect themselves against common online threats.",
      description: "It is also a prerequisite for bidding for some government contracts which involve handling sensitive and personal information. At Patronum, obtaining the Cyber Essentials certification reaffirms our commitment to cybersecurity. This certification specifically covers essential precautions related to internet security, such as boundary firewalls and internet gateways, secure configuration, access control, malware protection, and patch management. By adhering to these standards, Patronum not only boosts its defense against the most common cyber threats but also demonstrates its dedication to cybersecurity best practices.",
      imgSrc: "cyber-essentials.svg",
      link: "https://drive.google.com/file/d/1mF9o4nkfvemiFz3Abue2NPPtnwOTkOJF/view",
      btnText: "View Certificate"
    },
    {
      id: "6",
      title: "CSA STAR Certification",
      contentTop: "Patronum is a proud participant in the CSA Security, Trust & Assurance Registry (STAR), the leading global certification program for cloud security.",
      description: "Managed by the Cloud Security Alliance (CSA), the STAR registry is designed to promote best practices for ensuring a secure cloud computing environment. By aligning with the CSA STAR principles, Patronum demonstrates its commitment to cloud security, helping customers trust that their data is protected in a cloud environment. Our inclusion in the CSA STAR registry highlights our ongoing dedication to maintaining robust cloud security standards.",
      imgSrc: "cloud-security-alliance.svg",
      link: "https://cloudsecurityalliance.org/star/registry/bespin-labs-limited/services/patronum-the-google-workspace-manager",
      btnText: "View Listing"
    },
    {
      id: "7",
      title: "GDPR Compliance",
      contentTop: "The General Data Protection Regulation (GDPR) represents a significant overhaul of data protection legislation in the European Union.",
      description: "Compliance with GDPR is crucial for any organization that processes the data of EU citizens, regardless of its location. At Patronum, GDPR compliance is paramount, ensuring that personal data is processed transparently, securely, and in a manner that preserves the privacy of the individuals. This regulation empowers individuals to have control over their personal data, with strict guidelines on processing personal information. Our compliance helps in building trust with our customers by enhancing our reputation as a secure and trustworthy data processor.",
      imgSrc: "gdpr-compliance.svg",
      link: "https://www.gdpreu.org/gdpr-requirements/",
      btnText: "View Guidelines"
    },
    {
      id: "8",
      title: "UK G-Cloud 14 Framework Supplier Status",
      contentTop: "Bespin Labs Awarded UK G-Cloud 14 Framework Supplier Status.",
      description: "Bespin Labs has been appointed as a supplier on the UK Crown Commercial Service’s (CCS) G-Cloud 14 framework agreement. As an approved supplier under the UK Government’s latest G-Cloud framework, Bespin Labs now offers Patronum, its Google Workspace Manager, to public sector organisations via the Digital Marketplace.",
      imgSrc: "uk.gov.png",
      link: "https://www.applytosupply.digitalmarketplace.service.gov.uk/g-cloud/services/160164702246842",
      btnText: "View Profile"
    },
  ]

  const compliances = [
    {
      id: "1",
      title: "Penetration Testing and Security Audits",
      contentTop: "At Patronum, we regularly engage in penetration testing to identify and resolve potential security vulnerabilities within our systems.",
      description: "Penetration tests simulate cyberattacks to assess the effectiveness of our security measures. By employing an external third party to conduct these tests, we ensure an objective review of our cybersecurity posture. These tests are essential for detecting unseen vulnerabilities that could be exploited by attackers. The findings from penetration tests lead to targeted improvements in our security infrastructure, thereby enhancing our resilience against actual cyber threats. Our comprehensive penetration testing is performed by an independent security auditor using OWASP testing guidelines, and SANS 25 & NIST frameworks. The audit also included a comprehensive review of our source code as part of our Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) approach.",
      imgSrc: "penetration-testing.svg"
    },
    {
      id: "2",
      title: "Secure Coding Practices",
      contentTop: "Secure coding is a cornerstone of our software development process at Patronum.",
      description: "We adhere to industry-standard secure coding guidelines to prevent common security vulnerabilities such as SQL injection, cross-site scripting (XSS), and buffer overflows. Our development team is trained regularly on the latest secure coding techniques and best practices. This proactive approach to security is vital for maintaining the integrity and security of our applications. By embedding security considerations at every stage of the software development lifecycle, we mitigate risks early and ensure that our applications are robust against cyber threats. This not only protects our systems but also safeguards our customers’ data from potential security breaches.",
      imgSrc: "secure-coding-practices.svg"
    },
    {
      id: "3",
      title: "Hosting & Deployment",
      contentTop: "Patronum’s infrastructure is hosted on the Google Cloud Platform (GCP), utilizing its secure, robust, and resilient global infrastructure.",
      description: "Our services are deployed solely within the EU (Frankfurt), and the United Kingdom (London), allowing us to provide high availability and data residency options for our clients. GCP's data centers are among the most secure and compliant in the world, with certifications such as SOC1 – SSAE-16, SOC2, PCI DSS Level 1, ISO 27001, HIPAA, and FIPS 140-2. This hosting environment ensures that our applications are resilient, secure, and capable of scaling to meet the needs of our customers. We employ container-based architectures to ensure seamless scalability and management of our applications, enhancing our service reliability and operational efficiency.",
      imgSrc: "hosting-deployment.svg"
    },
    {
      id: "4",
      title: "Backup & Resiliency",
      contentTop: "Our commitment to reliability and data protection is demonstrated through our comprehensive backup and resiliency strategies.",
      description: "Patronum uses Google Cloud Platform for deploying services, which includes built-in disaster recovery and high availability features. We have robust backup policies in place that involve regular snapshots of data, ensuring that we can quickly restore service in the event of an incident. Our data replication processes are designed to maintain data integrity and availability across multiple geographic locations, providing redundancy and minimizing the risk of data loss. These practices are regularly tested to ensure they meet our stringent service level agreements (SLAs) and can handle unexpected disruptions without loss of service.",
      imgSrc: "backup-resiliency.svg"
    },
    {
      id: "5",
      title: "Sub-processors",
      contentTop: "Patronum maintains strict criteria for engaging with sub-processors.",
      description: "We ensure that all our technology providers pass regular security reviews and audits and comply with relevant data protection and privacy regulations such as SOC 2 and/or ISO 27001. This minimizes the risk associated with third-party engagements and ensures that our sub-processors uphold the same high standards of data security and privacy that we do. Our sub-processor agreements reflect our commitment to data privacy, stipulating strict data handling and security measures. We share only the minimum necessary information with our sub-processors, safeguarding our customers' data throughout our supply chain.",
      imgSrc: "sub-processors.svg"
    },
  ] 

  return (
    <>
      <PageLayout
        pageTitle1={"Security & Compliance"}
        pagePara={"Our unwavering commitment to ensure your data is always protected"}
        imgSrc={"security-hero.svg"}
        title={"Data Security & Compliance at Patronum"}
        description={"Patronum ensures top-notch data security for its customers with industry-leading certifications and secure practices. Learn about our compliance measures and commitment to protecting your data."}
        url={"security-and-compliance"}
        img={"homepage.jpg"}
        date_published={"2024-05-22T12:00"}
        date_modified={"2024-05-22T12:00"}
        keywords={"Google Workspace, Google Compliance, ISO Certificates"}
      >
        <section id="second-section">
          <div className="container">
            <div className="content-2">
              <SectionTitle
                sectionTitle1="Security Overview"
                sectionPara="At Patronum, our commitment to security is paramount. We employ a comprehensive, defense-in-depth strategy to safeguard our systems and your data. Our team of security experts diligently updates our practices in line with the latest in regulations, ensuring that we stay at the cutting edge of data protection."
              />

              <div className="mt-[10vw]">
                <div className="lg:mb-[2vw] md:mb-[5vw] mb-[6vw]">
                  <h2 className="title-4xl text-anim">
                    <span>Certifications & Standards</span>
                  </h2>
                </div>
                <div className="faq-wrapper">
                  <Accordion type="single" collapsible>
                    {cerfications.map((item, index) => (
                      <AccordionItem
                        value={`item-${item.id}`}
                        key={index}
                        className="fadeUp"
                      >
                        <AccordionTrigger className=" pb-1 relative px-[2vw] lg:py-[2vw] py-[3vw] w-[90%]">
                          <div className="lg:w-[6vw] lg:h-[6vw] w-[10vw] h-[10vw]">
                            <img src={`/assets/security/certifications/${item.imgSrc}`} alt="certificate image"/>
                          </div>
                          <div className="lg:w-[78%] w-[75%] lg:space-y-0 space-y-[2vw]">
                            <span className="lg:text-[2.5vw] text-[4.8vw] font-medium block">
                              {item.title}
                            </span>
                            <span className="content-p">
                              {item.contentTop}
                            </span>
                          </div>
                          <div className="feat-accordion-btn security">
                            <span className="plus" />
                            <span className="minus" />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="content-p lg:ml-[10.5vw] ml-[14.5vw] lg:w-[75%] w-[80%] space-y-[2.5vw]">
                          <span className="block">
                            {item.description}
                          </span>
                          <LinkButton href={item.link} btnText={item.btnText} target="_blank" />
                        </AccordionContent>
                        <span className="h-[1px] bg-[#1a1a1a] w-full lineDraw block" />
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="content">
              <div className="lg:mb-[2vw] md:mb-[5vw] mb-[6vw]">
                <h2 className="title-4xl text-anim">
                  <span>Compliance and Secure Practices</span>
                </h2>
              </div>

              <div className="faq-wrapper">
                  <Accordion type="single" collapsible>
                    {compliances.map((item, index) => (
                      <AccordionItem
                        value={`item-${item.id}`}
                        key={index}
                        className="fadeUp"
                      >
                        <AccordionTrigger className=" pb-1 relative px-[2vw] lg:py-[2vw] py-[3vw] w-[90%]">
                          <div className="lg:w-[5vw] lg:h-[5vw] w-[10vw] h-[10vw]">
                            <img src={`/assets/security/compliances/${item.imgSrc}`} alt="certificate image"/>
                          </div>
                          <div className="lg:w-[78%] w-[75%] lg:space-y-0 space-y-[2vw]">
                            <span className="lg:text-[2.5vw] text-[4.8vw] font-medium block">
                              {item.title}
                            </span>
                            <span className="content-p">
                              {item.contentTop}
                            </span>
                          </div>
                          <div className="feat-accordion-btn security">
                            <span className="plus" />
                            <span className="minus" />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="content-p lg:ml-[9.5vw] ml-[14.5vw] lg:w-[75%] w-[80%] space-y-[2.5vw]">
                          <span className="block">
                            {item.description}
                          </span>
                        </AccordionContent>
                        <span className="h-[1px] bg-[#1a1a1a] w-full lineDraw block" />
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="lg:mt-[5vw] mt-[5vh]">
                  <p className="paraSectionHead text-anim-2">
                    <span className="aeonik font-[400]">
                      These comprehensive practices and certifications highlight Patronum&#39;s unwavering commitment to security and compliance, ensuring that our customers&#39; data is protected by the most rigorous standards in the industry.
                    </span>
                  </p>
                </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export default security;
