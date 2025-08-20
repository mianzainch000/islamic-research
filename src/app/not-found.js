import Link from "next/link";
import styles from "@/css/404.module.css";

const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.title}>Page Not Found </h2>
            <p className={styles.message}>
                &quot;وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ&quot; <br />
                (وہ تمہارے ساتھ ہے جہاں بھی تم ہو) – سورۃ الحدید 4
            </p>
            <Link href="/" className={styles.homeBtn}>
                Back To Home Page
            </Link>
        </div>
    );
};

export default NotFoundPage;
