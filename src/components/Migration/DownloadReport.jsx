import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import styles from "../Buttons/primary.module.css";


const DownloadReport = () => {
  return (
    <section id="second-section" className="">
      <div className="container">
        <div className="">
          <div className="fadeUp mx-auto relative flex  flex-col items-start  gap-[8vw] rounded-[1.5vw] bg-white px-[2rem] py-[3rem] shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:flex-row lg:px-[4rem] lg:py-[4vw] border border-[#e8e8e8] lg:h-[35vw] h-[70vh] md:h-[85vh]">
            <div className="lg:w-[30%] w-[80%] flex justify-center mx-auto md:w-[50%]">
              <Image
                width={500}
                height={460}
                src="/assets/features/migration/migration-report.svg"
                priority
                alt="Migration report illustration"
                className="h-auto w-full  object-contain"
              />
            </div>
            <div className="lg:w-[60%] w-full text-center lg:text-left">
              <h2 className="lg:text-[3.4vw] leading-[1.2] mb-[1.5rem] text-[6vw]">See what your migration report looks like</h2>
              <p className="content-p mb-[2rem] max-w-[38rem] mx-auto lg:mx-0">
                Generated automatically after discovery - no manual analysis, no spreadsheets.
              </p>
              <PrimaryButton
                href="/assets/features/migration/Project-SH_CD-AI-Discovery-Report.pdf"
                target="_blank"
                rel="noreferrer noopener"
                btnText="View Sample Report"
                className={styles.btnDownload}
              />
            </div>

            <div className="absolute lg:bottom-10 right-[3vw] xl:w-[11.5vw] md:w-[25vw] w-[20%] bottom-5">
              <Image
                className="w-full h-auto block relative z-[3]"
                src="/logo.svg"
                width={200}
                height={50}
                alt="Patronum Logo"
                title="Patronum Logo"
                priority={true}
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadReport;
