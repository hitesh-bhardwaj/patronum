import Faqs from "@/components/PageComponents/FeaturesPage/Faq";
import FeatureDetailCard from "@/components/PageComponents/FeaturesPage/FeatureDetailCard";
import FeatureDetailInfo from "@/components/PageComponents/FeaturesPage/FeatureDetailInfo";
import FeatureDetailTitle from "@/components/PageComponents/FeaturesPage/FeatureDetailTitle";
import PageLayout from "@/components/PageLayout";
import InstallBlackButton from "@/components/PageLayout/Button/InstallBlackButton";
import SectionBreak from "@/components/PageLayout/SectionBreak";
import SectionTitle from "@/components/PageLayout/SectionTitle";
import VideoPlayer from "@/components/PageLayout/VideoPlayer";

export default function FeatureDetail(){

    const featuresDetail = [
        {
            title: 'Advanced Intelligent Ransomware Protection',
            para: "In an era where ransomware attacks are increasingly prevalent, Patronum Backup offers a sophisticated layer of defense. By employing advanced automation and preemptive backup strategies, Patronum ensures your Google Workspace data remains intact and recoverable even in the face of sophisticated ransomware threats. The feature of auto-labeling recovery points is particularly noteworthy, as it precisely identifies the last uncorrupted data snapshot, ensuring a clean and efficient restoration process without compromising your data integrity.",
            img: "/assets/features/google-workspace-backup/main-1.svg",
        },
        {
            title: 'Guaranteed Backup Success with No Failures',
            para: "Patronum Backup eliminates the anxiety surrounding potential backup failures. Through its intelligent management system, which includes parallel processing and automatic rescheduling, Patronum guarantees a seamless backup experience free from common Google errors or failures. This state-of-the-art approach ensures your data protection mechanisms are foolproof and consistently reliable, offering peace of mind that your organization’s data is safe, secure, and always available.",
            img: "/assets/features/google-workspace-backup/main-2.svg",
        },
        {
            title: 'Empowering Simple Self-Service',
            para: "Patronum Backup goes beyond just safeguarding your data—it also simplifies the restoration process. With its user-friendly self-service feature, end users gain the autonomy to restore their own data, including files and emails, swiftly and efficiently. This empowerment significantly reduces the workload on IT staff, streamlining the recovery process and allowing for immediate access to lost or deleted data without the typical delays. By democratizing data restoration, Patronum Backup not only enhances data security but also fosters a more efficient and resilient organizational workflow.",
            img: "/assets/features/google-workspace-backup/main-3.svg",
        },
        {
            title: 'Intelligent Ransomware Protection',
            para: "In Google contact sharing your Google Contacts are updated automatically across various platforms: Desktop, Mobile, Tablet or Microsoft Outlook. Users get instant access to contacts across different devices automatically.",
            img: "/assets/features/google-workspace-backup/main-4.svg",
        },
    ]

    const featuresDetailCard = [
        {
            id: '01',
            title: 'Automated Backups',
            para: "Effortlessly Manage and Automate Google Group Memberships.",
            img: "/assets/features/google-workspace-backup/detail-1.svg",
        },
        {
            id: '02',
            title: 'Flexible Restore',
            para: "Empower Specific Users with Controlled Access to Manage Others' Google.",
            img: "/assets/features/google-workspace-backup/detail-2.svg",
        },
        {
            id: '03',
            title: 'Instant Offline Export',
            para: "Simplify and Streamline the Sharing of Calendars within your Organisation.",
            img: "/assets/features/google-workspace-backup/detail-3.svg",
        },
        {
            id: '04',
            title: '2FA Authentication',
            para: "Utilise Ready-Made Policy Templates for Quick and Efficient.",
            img: "/assets/features/google-workspace-backup/detail-4.svg",
        },
        {
            id: '05',
            title: 'Storage Locations',
            para: "Securely and Promptly Revoke User Access to Data and Resources.",
            img: "/assets/features/google-workspace-backup/detail-5.svg",
        },
        {
            id: '06',
            title: 'AI-Based Automation',
            para: "Easily Manage and Delete Calendar Events, Ensuring Up-to-Date.",
            img: "/assets/features/google-workspace-backup/detail-6.svg",
        },
        {
            id: '07',
            title: 'Versioning',
            para: "Seamlessly Manage the Entire User Journey within Google Workspace.",
            img: "/assets/features/google-workspace-backup/detail-7.svg",
        },
        {
            id: '08',
            title: 'Self-Service',
            para: "Gain Immediate Insights with Live Tracking of all User Activities.",
            img: "/assets/features/google-workspace-backup/detail-8.svg",
        },
        {
            id: '09',
            title: 'Encryption',
            para: "Easily manage and delete calendar events, ensuring up-to-date.",
            img: "/assets/features/google-workspace-backup/detail-9.svg",
        },
    ]

    return (
        <>
            <PageLayout
                pageTitle1={'Google Workspace'} 
                pageTitle2={'Backup'}
                pagePara={"The only tool you'll ever need to streamline your Google Workspace management."} 
                imgSrc={'google-workspace-backup.svg'}
                >

                <VideoPlayer videoId="POIX6FiWaN0" videoCover={"/assets/features/google-workspace-backup/video-cover.webp"}/>

                <FeatureDetailTitle
                    sectionTitle1="Google Workspace"
                    sectionTitle2="Backup"
                    sectionPara="Patronum Backup stands at the forefront of data protection, offering the fastest and most reliable backup solution specifically designed for Google Workspace. With Patronum Backup, you get the world’s faster backup solution for Google Workspace providing high-frequency backups of your Google data."
                    sectionParaBig="Protect your Google Workspace environment from accidental and malicious deletion. From crucial Files and Shared Drives to essential Emails, every piece of data is securely backed up, guaranteeing comprehensive point-in-time restores or the option for instant offline exports whenever the need arises. This means no piece of information is ever out of reach, providing a fail-safe against data loss incidents."
                />

                <section id="feature-detail-info">
                    <div className="container">
                        <div className="content">
                            <div className="section-list-container">
                                {featuresDetail.map((feature, index) => (
                                    <FeatureDetailInfo
                                        key={index}
                                        featureDetailInfoTitle={feature.title}
                                        featureDetailInfoPara={feature.para}
                                        imgSrc={feature.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>    
                </section>

                <SectionBreak 
                    sectionBreakText="Patronum Backup transforms how your organization approaches Google Workspace data protection, marrying speed, reliability, and user empowerment in a single, powerful solution. Secure your digital workspace with Patronum, and navigate the digital landscape with confidence, knowing that your data is protected by the pinnacle of backup innovation."
                />

                <section id="feature-detail-card">
                    <div className="container">
                        <div className="content">
                            <SectionTitle 
                                sectionTitle1="Additional User Lifecycle"
                                sectionTitle2="Management Features"
                            />

                            <div className="feature-detail-card-wrapper">
                                {featuresDetailCard.map((featureDetail, index) => (
                                    <FeatureDetailCard
                                        key={index}
                                        id={featureDetail.id}
                                        title={featureDetail.title}
                                        content={featureDetail.para}
                                        img={featureDetail.img}
                                    />
                                ))}
                            </div>

                            <div className="section-btn-container">
                                <InstallBlackButton btnText="Install Patronum"/>
                            </div>
                        </div>
                    </div>    
                </section>

                {/* Google Workspace Backup Table */}
                <section id="backup-chart">
                    <div className="container">
                        <div className="content">
                            <SectionTitle 
                                sectionTitle1="Google Workspace"
                                sectionTitle2="Backup Options"
                                sectionPara="Patronum Backup provides the most complete backup vs older vendor & native tools"
                            />

                            <div class="backup-tab">
                            {/* <!--Table Card 1--> */}
                                <div class="backup-tab-card tab-card-1 fadeLeft">
                                    <div></div>
                                    <div>
                                        <h5>Product &amp; Technology</h5>	
                                    </div>
                                    <div>
                                        <h5>Gmail Backup</h5>	
                                    </div>
                                    <div>
                                        <h5>Google Drive &amp; Shared Drives Backup</h5>	
                                    </div>
                                    <div>
                                        <h5>Other Google Workspace Data Backup</h5>	
                                    </div>
                                    <div>
                                        <h5>Recovery Capabilities</h5>	
                                    </div>
                                </div>
				
                                {/* <!--Table Card 2--> */}
                                <div class="backup-tab-card table-1 fadeUp">
                                    <div class="tab-card-row-1">
                                        <img 
                                            src="/assets/features/google-workspace-backup/compare-1.png"
                                            loading="lazy"
                                            alt="Google Admin Logo"
                                        />
                                        <h4>
                                            Google Admin
                                        </h4>
                                    </div>
                                    <div>
                                        <p>
                                            Standard Google Workspace admin panel lets administrator partially recover deleted Google Workspace data.
                                        </p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Emails deleted within 20-25 days can be recovered. No versioning is available, only the last known state is restored. Some labels (e.g. Drafts) cannot be restored.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Last state of files deleted within 20-30 days can be recovered. No single file recovery (only all deleted items in a time period).</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Last state of Calendars and Contacts can be recovered within 20-30 days after deletion.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Data restored only to the original location. Data you’re not trying to recover will also be replaced, as only bulk restore is possible.</p>
                                    </div>
                                </div>
				
                                {/* <!--Table Card 3--> */}
                                <div class="backup-tab-card table-2 fadeUp">
                                    <div class="tab-card-row-1">
                                        <img 
                                            src="/assets/features/google-workspace-backup/compare-2.png"
                                            loading="lazy"
                                            alt="Google Vault Logo"
                                        />
                                        <h4>
                                            Google Vault
                                        </h4>
                                    </div>
                                    <div>
                                        <p>
                                            Google Workspace add-on, enables legal hold &amp; partial retention of data relevant for litigation &amp; compliance.
                                        </p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn incomplete"></span>Incomplete</h5>
                                        <p>Emails can be recovered (with versioning) in MBOX format. Some emails are not retained, label structure is not preserved.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Deleted files are retained, but versioning only available for Google-native files. Directory structures are not restored.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn incomplete"></span>Incomplete</h5>
                                        <p>No versioning for non-Google files, Drive and Shared Drives metadata, Calendars or Contacts.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>No restore to Google Workspace, only manual offline export w/o folders &amp; labels. When user is deleted from Google Workspace, all backup data is erased as well.</p>
                                    </div>
                                </div>
				
                                {/* <!--Table Card 4--> */}
                                <div class="backup-tab-card table-3 fadeUp">
                                    <div class="tab-card-row-1">
                                        <h4>
                                            Legacy Google Workspace Backup
                                        </h4>
                                    </div>
                                    <div>
                                        <p>
                                            Backup solutions with limitations due to old monolithic architectures developed 7-10 years ago.
                                        </p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn partial"></span>Partial</h5>
                                        <p>Most vendors don't preserve the nested Gmail labels structure upon backup/restore. For some vendors the backup frequency is limited to 1x/day.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Data &amp; versions are preserved, but files can be silently skipped from backups and the number of retained versions may be limited.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn partial"></span>Partial</h5>
                                        <p>Backup of Google Workspace Contacts and Calendars. Only some vendors backup Google Sites &amp; Chats.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn"></span>Limited</h5>
                                        <p>Restore operations can take days and weeks. Export takes time &amp; many steps (request the export link, wait until it's ready, etc).</p>
                                    </div>
                                </div>
				
                                {/* <!--Table Card 5--> */}
                                <div class="backup-tab-card active table-4 fadeUp">
                                    <div class="tab-card-row-1">
                                            <img 
                                                src="/assets/features/google-workspace-backup/compare-p.png"
                                                loading="lazy"
                                                alt="Patronum Logo"
                                            />
                                        <h4>
                                            Patronum Backup
                                        </h4>
                                    </div>
                                    <div>
                                        <p>
                                            Cloud-native Google Workspace backup service purpose-built for SaaS data protection.
                                        </p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn full"></span>Full</h5>
                                        <p>Gmail backup with 1-24x daily frequency, preserving nested Gmail label structures, full text search, instant online preview and PST/MBOX/EML export.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn full"></span>Full</h5>
                                        <p>Full fidelity backup (only vendor to backup/recover Drive document IDs), accurate backup of shared files &amp; unlimited versioning.</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn full"></span>Full</h5>
                                        <p>Full support of Google Workspace apps and metadata with flexible export (MBOX, PST, EML, VFS, ICS).</p>
                                    </div>
                                    <div>
                                        <h5><span class="tab-radio-btn full"></span>Full</h5>
                                        <p>Only solution with full-text search, instant backup preview, in- place/non-destructive restore &amp; offline export via direct download.</p>
                                    </div>
                                </div>
			                </div>
                        </div>
                    </div>

                </section>

                <Faqs featureName="google_workspace_backup"/>

            </PageLayout>

        </>
    )
}