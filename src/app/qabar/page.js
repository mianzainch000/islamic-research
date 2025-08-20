import message from "@/message/ur.json";
import styles from "@/css/DetailPage.module.css";

const Qabar = () => {
    return (<div className={`${styles.container} ${styles.rightToLeft}`}>
        <div className={styles.grid}>
            {message.qabar.map((item) => (
                <div key={item.id} className={styles.card}>
                    <p className={styles.reference}>{item.reference}</p>
                    <p className={styles.translation}>{item.translation}</p>
                </div>
            ))}
        </div>
    </div>);
};

export default Qabar;

export function generateMetadata() {
    return {
        title: "Qabar",
    };
}
