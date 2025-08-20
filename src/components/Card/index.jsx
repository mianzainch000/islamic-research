"use client";
import Link from "next/link";
import styles from "@/css/MainPage.module.css";
const Card = ({ title, href }) => {
  return (
    <div className={styles.card}>
      <Link href={href} className={styles.cardContent}>
        <div className={styles.cardInner}>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
