import Card from "@/components/Card";
import wealthSubHeading from "@/message/ur.json";
import styles from "@/css/MainPage.module.css";

const Wealth = () => {
    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={`${styles.grid} ${styles.fadeInRightToLeft}`}>
                {wealthSubHeading?.wealthSubHeading?.map((item) => (
                    <Card key={item.id} href={`wealth/${item.id}`} title={item.title} />
                ))}
            </div>
        </div>
    );
};

export default Wealth;

export function generateMetadata() {
    return {
        title: "Wealth",
    };
}
