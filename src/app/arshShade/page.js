import message from "@/message/ur.json";
import styles from "@/css/DetailPage.module.css";

const ArshShade = () => {
    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={styles.grid}>
                {message.arshShade &&
                    message.arshShade.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.reference}>{item.reference}</p>
                            <p className={styles.translation}>{item.translation}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ArshShade;

export function generateMetadata() {
    return {
        title: "Arsh Shade",
    };
}
