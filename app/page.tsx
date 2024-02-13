import styles from "./page.module.css";

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
