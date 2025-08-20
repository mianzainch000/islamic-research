import Card from "@/components/Card";
import message from "@/message/ur.json";
import styles from "@/css/MainPage.module.css";

const MainHeadings = () => {
  return (
    <div className={`${styles.container} ${styles.rightToLeft}`}>
      <div className={`${styles.grid} ${styles.fadeInRightToLeft}`}>
        {message.mainHeadings.map((item, index) => (
          <Card key={index} href={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default MainHeadings;
