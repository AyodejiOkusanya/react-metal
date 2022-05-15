import type { NextPage } from "next";
import { Body } from "../Components/Body";
import Expandable from "../Components/Theme";
import { ThemeButton } from "../Components/ThemeButton";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Expandable>
      <ThemeButton />
      <Body />
    </Expandable>
  );
};

export default Home;
