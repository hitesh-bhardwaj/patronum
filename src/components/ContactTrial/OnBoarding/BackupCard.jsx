import SectionTitle from "@/components/PageLayout/SectionTitle";

const BackupCard = () => {
    return (
        <section id="">
            <div className="container">
                <div className="px-0 lg:px-0">
                    <SectionTitle
                        sectionTitle1="Google Workspace"
                        sectionTitle2="Backup Options"
                        sectionPara="Patronum Backup provides the most complete backup vs older vendor & native tools"
                    />

                    <div className="lg:overflow-hidden overflow-x-scroll">
                        <div className="w-[220vw] md:w-[200%] lg:w-full grid grid-cols-[15%_20%_20%_20%_20%] md:grid-cols-[14%_20%_20%_20%_21%] justify-center gap-[15px] h-full mt-[5vw]">
                            {/* <!--Table Card 1--> */}
                            <div className="fadeLeft grid grid-rows-[110px_auto_auto_auto_auto_auto] md:grid-rows-[110px_130px_210px_190px_170px_190px] lg:grid-rows-[8vw_9vw_12vw_11vw_10.5vw_10.5vw] border-none bg-transparent rounded-none pt-[3vw] px-[10px] pb-[40px]">
                                <div></div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.45vw] 2xl:text-[1.45vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">Product &amp; Technology</h5>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.45vw] 2xl:text-[1.45vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">Gmail Backup</h5>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.45vw] 2xl:text-[1.45vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">Google Drive &amp; Shared Drives Backup</h5>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.45vw] 2xl:text-[1.45vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">Other Google Workspace Data Backup</h5>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.45vw] 2xl:text-[1.45vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">Recovery Capabilities</h5>
                                </div>
                            </div>

                            {/* <!--Table Card 2--> */}
                            <div className="fadeUp grid grid-rows-[110px_auto_auto_auto_auto_auto] md:grid-rows-[110px_130px_210px_190px_170px_190px] lg:grid-rows-[8vw_9vw_12vw_11vw_10.5vw_10.5vw] border border-[#e2e2e2] bg-[#fdfdfd] rounded-[10px] pt-[3vw] px-[20px] pb-[10px]">
                                <div className="text-center flex flex-col items-center gap-[10px] justify-end mb-[2.5vw]">
                                    <img
                                        src="/assets/features/google-workspace-backup/compare-1.png"
                                        loading="lazy"
                                        alt="Google Admin Logo"
                                        className="w-[40px] md:w-[5vw] lg:w-[2.6vw]"
                                    />
                                    <h4 className="text-[1.5vw] lg:text-[1.5vw] 2xl:text-[24px] font-medium text-[var(--text-head)] leading-[1.2]">
                                        Google Admin
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">
                                        Standard Google Workspace admin panel lets administrator partially recover deleted Google Workspace data.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Emails deleted within 20-25 days can be recovered. No versioning is available, only the last known state is restored. Some labels (e.g. Drafts) cannot be restored.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Last state of files deleted within 20-30 days can be recovered. No single file recovery (only all deleted items in a time period).</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Last state of Calendars and Contacts can be recovered within 20-30 days after deletion.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Data restored only to the original location. Data you're not trying to recover will also be replaced, as only bulk restore is possible.</p>
                                </div>
                            </div>

                            {/* <!--Table Card 3--> */}
                            <div className="fadeUp grid grid-rows-[110px_auto_auto_auto_auto_auto] md:grid-rows-[110px_130px_210px_190px_170px_190px] lg:grid-rows-[8vw_9vw_12vw_11vw_10.5vw_10.5vw] border border-[#e2e2e2] bg-[#fdfdfd] rounded-[10px] pt-[3vw] px-[20px] pb-[10px]">
                                <div className="text-center flex flex-col items-center gap-[10px] justify-end mb-[2.5vw]">
                                    <img
                                        src="/assets/features/google-workspace-backup/compare-2.png"
                                        loading="lazy"
                                        alt="Google Vault Logo"
                                        className="w-[40px] md:w-[5vw] lg:w-[2.6vw]"
                                    />
                                    <h4 className="text-[1.5vw] lg:text-[1.5vw] 2xl:text-[24px] font-medium text-[var(--text-head)] leading-[1.2]">
                                        Google Vault
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">
                                        Google Workspace add-on, enables legal hold &amp; partial retention of data relevant for litigation &amp; compliance.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fcbe43] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Incomplete
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Emails can be recovered (with versioning) in MBOX format. Some emails are not retained, label structure is not preserved.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Deleted files are retained, but versioning only available for Google-native files. Directory structures are not restored.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fcbe43] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Incomplete
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">No versioning for non-Google files, Drive and Shared Drives metadata, Calendars or Contacts.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">No restore to Google Workspace, only manual offline export w/o folders &amp; labels. When user is deleted from Google Workspace, all backup data is erased as well.</p>
                                </div>
                            </div>

                            {/* <!--Table Card 4--> */}
                            <div className="fadeUp grid grid-rows-[110px_auto_auto_auto_auto_auto] md:grid-rows-[110px_130px_210px_190px_170px_190px] lg:grid-rows-[8vw_9vw_12vw_11vw_10.5vw_10.5vw] border border-[#e2e2e2] bg-[#fdfdfd] rounded-[10px] pt-[3vw] px-[20px] pb-[10px]">
                                <div className="text-center flex flex-col items-center gap-[10px] justify-end mb-[2.5vw]">
                                    <h4 className="text-[1.5vw] lg:text-[1.5vw] 2xl:text-[24px] font-medium text-[var(--text-head)] leading-[1.2]">
                                        Legacy Google Workspace Backup
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">
                                        Backup solutions with limitations due to old monolithic architectures developed 7-10 years ago.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#b9b9b9] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Partial
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Most vendors don't preserve the nested Gmail labels structure upon backup/restore. For some vendors the backup frequency is limited to 1x/day.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Data &amp; versions are preserved, but files can be silently skipped from backups and the number of retained versions may be limited.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#b9b9b9] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Partial
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Backup of Google Workspace Contacts and Calendars. Only some vendors backup Google Sites &amp; Chats.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-[var(--text-head)] font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-[#1a73e8] rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#fe140b] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Limited
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] text-[var(--text-body)] leading-[1.5]">Restore operations can take days and weeks. Export takes time &amp; many steps (request the export link, wait until it's ready, etc).</p>
                                </div>
                            </div>

                            {/* <!--Table Card 5--> */}
                            <div className="fadeUp grid grid-rows-[110px_auto_auto_auto_auto_auto] md:grid-rows-[110px_130px_210px_190px_170px_190px] lg:grid-rows-[8vw_9vw_12vw_11vw_10.5vw_10.5vw] border border-[#e2e2e2] !bg-[#1a73e8] rounded-[10px] pt-[3vw] px-[20px] pb-[10px]">
                                <div className="text-center flex flex-col items-center gap-[10px] justify-end mb-[2.5vw]">
                                    <img
                                        src="/assets/features/google-workspace-backup/compare-p.png"
                                        loading="lazy"
                                        alt="Patronum Logo"
                                        className="w-[40px] md:w-[5vw] lg:w-[2.6vw]"
                                    />
                                    <h4 className="text-[1.5vw] lg:text-[1.5vw] 2xl:text-[24px] font-medium !text-white leading-[1.2]">
                                        Patronum Backup
                                    </h4>
                                </div>
                                <div>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] !text-white leading-[1.5]">
                                        Cloud-native Google Workspace backup service purpose-built for SaaS data protection.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] !text-white font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-white rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#00ff1a] after:h-[10px] after:w-[10px] after:rounded-full after:absolute lg:mt-0 lg:mb-0 mt-10 mb-10 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Full
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] !text-white leading-[1.5]">Gmail backup with 1-24x daily frequency, preserving nested Gmail label structures, full text search, instant online preview and PST/MBOX/EML export.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] !text-white font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-white rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#00ff1a] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Full
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] !text-white leading-[1.5]">Full fidelity backup (only vendor to backup/recover Drive document IDs), accurate backup of shared files &amp; unlimited versioning.</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] !text-white font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-white rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#00ff1a] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Full
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] !text-white leading-[1.5]">Full support of Google Workspace apps and metadata with flexible export (MBOX, PST, EML, VFS, ICS).</p>
                                </div>
                                <div>
                                    <h5 className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] !text-white font-medium flex items-center pb-[10px] leading-[1.2]">
                                        <span className="h-[18px] w-[18px] border border-white rounded-full relative mr-[14px] overflow-hidden after:content-[''] after:bg-[#00ff1a] after:h-[10px] after:w-[10px] after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></span>
                                        Full
                                    </h5>
                                    <p className="text-[3.8vw] md:text-[1.8vw] lg:text-[0.9vw] !text-white leading-[1.5]">Only solution with full-text search, instant backup preview, in- place/non-destructive restore &amp; offline export via direct download.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BackupCard;