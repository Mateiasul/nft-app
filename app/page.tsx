import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Image
        src={"/bkd1.png"}
        quality={100}
        priority
        fill
        style={{ objectFit: "cover" }}
        alt={"background guy"}
      ></Image>
    </main>
  );
}
