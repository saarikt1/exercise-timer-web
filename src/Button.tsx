import styles from "./Button.module.css";

interface ButtonProps {
  label: String;
}
export const Button = ({ label }: ButtonProps) => {
  return <button className={styles.button}>{label}</button>;
};
