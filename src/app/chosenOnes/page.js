import message from "@/message/ur.json";
import styles from "@/css/DetailPage.module.css";

const ChosenOne = () => {
    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={styles.grid}>
                {message.chosenOnes.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <p className={styles.reference}>{item.reference}</p>
                        <p className={styles.translation}>{item.translation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChosenOne;

export function generateMetadata() {
    return {
        title: "Chosen Ones",
    };
}
