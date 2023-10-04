import { Animals } from "../parts/Animals";
import { Company } from "../parts/Company";
import { Copyright } from "../parts/Copyright";
import { Flow } from "../parts/Flow";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { Last } from "../parts/Last";
import { Model } from "../parts/Model";
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
      <Reviews />
      <Flow />
      <Steps />
      <Model />
      <Animals />
      <Descriptions />
      <Others />
      <Questions />
      <Last />
      <Company />
      <Copyright />
      <Footer />
    </>
  );
};
