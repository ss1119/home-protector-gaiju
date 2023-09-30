import { Animals } from "../parts/Animals";
import { Company } from "../parts/Company";
import { Copyright } from "../parts/Copyright";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Others } from "../parts/Others";
import { Pages } from "../parts/Pages";
import { Questions } from "../parts/Questions";
import { Reviews } from "../parts/Reviews";
import { Steps } from "../parts/Steps";
import { Descriptions } from "../templates/Descriptions";

export const Home = () => {
  return (
    <>
      <Header />
      <Pages />
      <Steps />
      <Animals />
      <Descriptions />
      <Reviews />
      <Others />
      <Questions />
      <Company />
      <Copyright />
      <Footer />
    </>
  );
};
