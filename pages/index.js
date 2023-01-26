import Head from "next/head";
import Image from "next/image";
import { Inter, Aboreto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import videoLinks from "../src/configs/videoLinks";

const inter = Inter({ subsets: ["latin"] });
const aboreto = Aboreto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhajan Samrat</title>
        <meta name="description" content="Dharmendra Pandey musician" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.topBox}>
            <Image fill src="/logo-shri.png" objectFit="contain" />
          </div>
          <div className={styles.leftBox}>
            <h1 className={`${aboreto.className} ${styles.title}`}>
              Bhajan Samrat{" "}
            </h1>
            <h2 className={`${aboreto.className} ${styles.name}`}>
              Dharmendra Pandey
            </h2>
          </div>
          <div className={styles.rightBox}>
            <Image fill src="/hero-image.png" objectFit="contain" />
          </div>
        </div>

        <div className={styles.videoSection}>
          <h1 className={`${aboreto.className} ${styles.videoHeader}`}>
            Mesmerizing Bhajan for "Aatmaranjan"
          </h1>
          <div className={styles.grid}>
            {videoLinks.map((link) => (
              <iframe
                className={styles.videoFrame}
                width="330"
                height="250"
                src={link}
                frameborder="0"
              ></iframe>
            ))}
            <a
              href="https://www.youtube.com/@dharmendrapandeysultanpur/videos"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={aboreto.className}>
                See More <span>-&gt;</span>
              </h2>
            </a>
          </div>
        </div>

        <footer className={styles.footer}>
          <h2 className={aboreto.className}>Connect with us</h2>
          <div>
            <a
              href="https://www.youtube.com/@dharmendrapandeysultanpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.socialIcons}>
                <Image fill src="/youtube.png" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/babadharmendrapandey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.socialIcons}>
                <Image fill src="/facebook.png" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/dharmendra_pandey_7897/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.socialIcons}>
                <Image fill src="/instagram.png" />
              </div>
            </a>
          </div>
        </footer>

        <div className={styles.floatingButton}>
          <a
            href="tel:+917897217118"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.socialIcons}>
              <Image fill src="/call.png" />
            </div>
          </a>
          <div/>
          <a
            href="mailto:dharmendrapandit078@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.socialIcons}>
              <Image fill src="/email.png" />
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
