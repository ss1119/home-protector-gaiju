import { Animals } from "../parts/Animals";
import { Company } from "../parts/Company";
import { Copyright } from "../parts/Copyright";
import { Header } from "../parts/Header";
import { Others } from "../parts/Others";
import { Pages } from "../parts/Pages";
import { Questions } from "../parts/Questions";
import { Reviews } from "../parts/Reviews";
import { Steps } from "../parts/Steps";

export const Home = () => {
  return (
    <>
      <Header />
      <Pages />
      <Steps />
      <Reviews />
      <Others />
      <Questions />
      <Animals />
      <Company />
      <Copyright />
    </>
  );
};
