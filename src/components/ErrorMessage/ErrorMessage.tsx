import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={styles.error}>Something went wrong. Please try again.</p>
  );
}
