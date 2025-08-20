import Card from "@/components/Card";
import message from "@/message/ur.json";
import styles from "@/css/MainPage.module.css";

const QuranTranslation = () => {
    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={`${styles.grid} ${styles.fadeInRightToLeft}`}>
                {message.tarjumaQuran.map((item) => (
                    <Card key={item.id} href={item.link} title={item.text} />
                ))}
            </div>
        </div>
    );
};

export default QuranTranslation;

export function generateMetadata() {
    return {
        title: "Tarjuma Quran ",
    };
}
