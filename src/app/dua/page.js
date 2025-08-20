import Card from "@/components/Card";
import message from "@/message/ur.json";
import styles from "@/css/MainPage.module.css";

const Dua = () => {
    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={`${styles.grid} ${styles.fadeInRightToLeft}`}>
                {message?.duaSubHeading?.map((item) => (
                    <Card key={item.id} href={`dua/${item.id}`} title={item.title} />
                ))}
            </div>
        </div>
    );
};

export default Dua;

export function generateMetadata() {
    return {
        title: "Dua",
    };
}
