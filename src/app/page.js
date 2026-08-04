import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import LeagueTracks from "./Components/LeagueTracks/LeagueTracks";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <LeagueTracks />
    </>
  );
}
