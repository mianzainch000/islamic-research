"use client";
import Link from "next/link";
import message from "@/message/ur.json";
import styles from "@/css/MainPage.module.css";
import { useSnackbar } from "@/components/Snackbar";

const Azkar = () => {
    const showAlert = useSnackbar();

    const alert = () => {
        showAlert({
            message: "Please check your download folder",
            type: "success",
        });
    };

    const pdfFiles = ["/blueCard.pdf", "/greenCard.pdf", "/orangeCard.pdf"];

    return (
        <div className={`${styles.container} ${styles.rightToLeft}`}>
            <div className={`${styles.grid} ${styles.fadeInRightToLeft}`}>
                {message.azkar.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <Link
                            href={pdfFiles[index]}
                            download
                            rel="noopener noreferrer"
                            className={styles.cardContent}
                            onClick={alert}
                        >
                            <div className={styles.cardInner}>
                                <h2>{item.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Azkar;
