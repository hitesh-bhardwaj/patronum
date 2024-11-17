import Image from 'next/image';
import SectionTitle from '@/components/PageLayout/SectionTitle';
import styles from "./media.module.css";

// Import images statically
import associatedPressLogo from '/public/assets/about/associated-press.png';
import cbsLogo from '/public/assets/about/cbs.png';
import techBullionLogo from '/public/assets/about/tech-bullion.png';
import digitalJournalLogo from '/public/assets/about/digital-journal.png';
import abcLogo from '/public/assets/about/abc.png';
import foxNewsLogo from '/public/assets/about/fox-news.png';

const MediaLogos = () => {
  const logos = [
    {
      src: associatedPressLogo,
      alt: 'Associated Press logo',
      title: 'Featured in Associated Press.',
    },
    {
      src: cbsLogo,
      alt: 'CBS logo',
      title: 'Featured in CBS.',
    },
    {
      src: techBullionLogo,
      alt: 'Tech Bullion logo',
      title: 'Featured in Tech Bullion.',
    },
    {
      src: digitalJournalLogo,
      alt: 'Digital Journal logo',
      title: 'Featured in Digital Journal.',
    },
    {
      src: abcLogo,
      alt: 'ABC News logo',
      title: 'Featured in ABC News.',
    },
    {
      src: foxNewsLogo,
      alt: 'Fox News logo',
      title: 'Featured in Fox News.',
    },
  ];

  return (
    <section className="press-release" id="press">
      <div className="container">
        <div className="content">
          <div className="section-head">
            <SectionTitle
              sectionTitle1="Featured By Top"
              sectionTitle2="Media Publications"
              sectionPara="Patronum has been recognized for its innovation and impact in the Google Workspace, as featured in leading media publications."
            />
          </div>
          <div className={`${styles.mediaLogos} fadeUp`}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.mediaLogo}>
                <Image
                  className='w-full !static h-full object-cover'
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  fill
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaLogos;
