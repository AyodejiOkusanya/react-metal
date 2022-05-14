import type { NextPage } from "next";
import { Body } from "../Components/Body";
import Expandable from "../Components/Expandable";
import { Header } from "../Components/Header";
import { Icon } from "../Components/Icon";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Expandable>
      <Header>Header</Header>
      <Icon />
      <Body>Body</Body>
    </Expandable>
  );
};

export default Home;
