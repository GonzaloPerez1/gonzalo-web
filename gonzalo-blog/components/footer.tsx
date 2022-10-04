import Link from 'next/link'
import styles from '../styles/Home.module.css';

type FooterProps = {
    darkTheme: boolean;
};

const Footer = ({ darkTheme }: FooterProps) => {
    const backgroundColor = darkTheme ? "#041460": "#fff";
    return (
        <footer
            className={styles.footer}
            style={{ backgroundColor: backgroundColor }}
        >
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
        <   img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
        </footer>
    );
};

export default Footer;
