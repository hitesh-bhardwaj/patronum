import SectionTitle from "@/components/PageLayout/SectionTitle";
import Image from "next/image";
import styles from "./featureDetail.module.css";
import InstallButton from "@/components/Buttons/InstallButton";

const FeatureDetailCards = ({ content, title1, title2 }) => {
    return (
        <>
            <section id="feature-detail-card">
                <div className="container">
                    <div className="content">
                        <SectionTitle
                            sectionTitle1={title1}
                            sectionTitle2={title2}
                        />
                        <div className={styles.featureDetailCardWrapper}>
                            {content.map((item, index) => (
                                <div key={index} className={`${styles.featureDetailCard} fadeUp`}>
                                    <div className={styles.cards_num}>
                                        <span className="aeonik">
                                            {item.id}
                                        </span>
                                    </div>
                                    <div className={styles.img}>
                                        <Image
                                            loading="lazy"
                                            height={185}
                                            width={270}
                                            src={item.img}
                                            alt={item.title}
                                            title={item.title}
                                        />
                                    </div>
                                    <div>
                                        <h5 className={styles.title}>
                                            {item.title}
                                        </h5>
                                        <p className={styles.p}>
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="section-btn-container">
                            <InstallButton />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureDetailCards;