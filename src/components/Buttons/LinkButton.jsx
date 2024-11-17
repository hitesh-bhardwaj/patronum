import Link from "next/link";
import styles from "./link.module.css";

const LinkButton = ({ btnText, className=" ", ...props }) => {
    return (
        <Link {...props} className={`${styles.linkBtn} ${className}`}>
            <span className={styles.btnText}>{btnText}</span>
            <span className="screen-reader-text">{" "}About This</span>
            <span className={styles.btnImages}>
                <div className={styles.div}>
                    <img alt="arrow-icon" className={styles.img} src="/assets/icons/link-arrow-blue.svg" width={27} height={15}/>
                    <img alt="arrow-icon" className={styles.img} src="/assets/icons/link-arrow-black.svg" width={27} height={15}/>
                </div>
            </span>
        </Link>
    )
}

export default LinkButton;