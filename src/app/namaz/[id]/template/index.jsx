"use client";
import message from "@/message/ur.json";
import { useParams } from "next/navigation";
import styles from "@/css/DetailPage.module.css";

const DetailPage = () => {
  const { id } = useParams();
  const detail = message.namazDetailPage.find((item) => item.id === id);

  if (!detail) {
    return <p className={styles.error}>⚠️ No details found for this ID.</p>;
  }

  return (
    <div className={`${styles.container} ${styles.rightToLeft}`}>
      <div className={styles.grid}>
        {detail.content.map((item, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.reference}>{item.reference}</p>
            <p className={styles.translation}>{item.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
