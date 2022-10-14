import styles from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

type FooterProps = {
    darkTheme: boolean;
};

const Footer = ({ darkTheme }: FooterProps) => {
    const backgroundColor = darkTheme ? "#F8F8F8": "#F8F8F8";
    const footerTextColor = darkTheme ? "#F8F8F8": "#202020";
    return (
        <footer
            className={styles.footer}
            style={{ backgroundColor: backgroundColor }}
        >
            <a
                href="https://www.linkedin.com/in/gonzalo-p%C3%A9rez-d%C3%ADez/"
                target="_blank"
                rel="noopener noreferrer"
                className="col-md-2 d-flex align-items-left align-text-left mb-md-0 ms-md-1 text-decoration-none"
            >
                <img src="img/linkedin-logo.png" height={30}/>
            </a>
            <p
                className="d-flex align-text-center mb-md-0 ms-md-1"
                style={{ color: footerTextColor }}
            >
                My Portfolio
            </p>
        </footer>
    );
};

export default Footer;
