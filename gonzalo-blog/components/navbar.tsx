import Link from "next/link";
import {  useRouter } from "next/router";
import {  useState, useEffect } from "react";
import styles from '../styles/Navbar.module.css';

type DashboardNavbarProps = {
    selected: boolean;
};

export default function DashboardNavbar({  selected }: DashboardNavbarProps){
    const backgroundColor = selected ? "#0f2027": "#fff";
    const [ collapse, setCollapse ] = useState<boolean>(false);
    const router = useRouter();

    const toggleCollapse = () => {
        setCollapse(!collapse);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setCollapse(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={styles.navbar}
            style={{ backgroundColor: backgroundColor }}
        >
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <p style={{ color: "white" }}>Home</p>
                    </a>
                </Link>
                <Link href="/about">
                    <a className="navbar-brand">
                        <p style={{ color: "white" }}>About</p>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/gonzalo-p%C3%A9rez-d%C3%ADez/">
                    <a
                        className="navbar-brand"
                        target="_blank"
                    >
                        <p style={{ color: "white" }}>Linkedin</p>
                    </a>
                </Link>
            </div>
        </nav>
    );
}
