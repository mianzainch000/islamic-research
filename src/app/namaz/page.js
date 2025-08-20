import Card from "@/components/Card";
import message from "@/message/ur.json";
import styles from "@/css/MainPage.module.css";

const Namaz = () => {
    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={`${styles.grid} ${styles.fadeInRightToLeft}`}>
                {message?.namazSubHeading?.map((item) => (
                    <Card key={item.id} href={`namaz/${item.id}`} title={item.title} />
                ))}
            </div>
        </div>
    );
};

export default Namaz;

export function generateMetadata() {
    return {
        title: "Namaz",
    };
}
