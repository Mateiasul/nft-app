import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Image
          src={"/bkd1.png"}
          fill
          objectFit="cover"
          alt={"background image of wizzard"}
          quality={100}
          priority
        ></Image>
      </div>
    </main>
  );
}
