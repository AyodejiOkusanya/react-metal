import Theme from "../Components/Theme";
import type { NextPage } from "next";
import { Grid } from "../Components/Grid";
import { Tabs } from "../Components/Tasb";
import { ThemeButton } from "../Components/ThemeButton";

const tabs = [
  { title: "London", content: "I love London", active: false },
  { title: "Paris", content: "I love Paris", active: false },
  { title: "Shanghai", content: "I love Shanghai", active: true },
];

const Home: NextPage = () => {
  return (
    <Theme>
      <Grid>
        <ThemeButton />
        <Tabs tabs={tabs} />
      </Grid>
    </Theme>
  );
};

export default Home;
