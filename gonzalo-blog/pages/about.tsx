import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function About(){
    return(
        <div>
            <div
                className={styles.container}
            >
                <Head>
                    <title>About</title>
                </Head>

                <Navbar selected={true}/>

                <div className={styles.containerText}>
                    <h1>About Me</h1>
                    <hr style={{ width:"70%", marginLeft:"15%" }}/>
                    <p>
                        It's my about page
                    </p>
                </div>

                <Footer darkTheme={false} />
            </div>
        </div>
    )
}