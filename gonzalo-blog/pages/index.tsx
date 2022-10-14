import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Home() {
  const widthValue = '70%';
  return (
    <div>
      <div
        className={styles.container}
      >
        <Head>
          <title>Gonzalo's portfolio</title>
        </Head>

        <Navbar selected={true}/>

        <div className={styles.containerText}>
          <h1>Welcome to my portfolio</h1>
          <hr style={{ width:"70%", marginLeft:"15%" }}/>
          <p>
            Muy buenas, esto es mi portfolio y es muy jodido.
          </p>
        </div>

        <Footer darkTheme={false} />
      </div>
    </div>
  )
}
