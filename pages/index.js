import Footer1 from "./components/Footer/Footer1";
import Footer2 from "./components/Footer/Footer2";
import Footer3 from "./components/Footer/Footer3";
import Explore from "./components/Homepage/Explore";
import Features from "./components/Homepage/Features";
import TopSection from "./components/Homepage/TopSection";
import HeaderNavbar from "./components/Header/HeaderNavbar";
import Recommended from "./components/Homepage/Recommended";
import TopDestCarousel from "./components/Homepage/TopDestCarousel";
import AccommodationPromotionsCarousel from "./components/Homepage/AccommodationPromotionsCarousel";
import FlightsAndActivitiesPromotionsCarousel from "./components/Homepage/FlightsAndActivitiesPromotionsCarousel";

export default function Home() {

  return (
    <>
      <HeaderNavbar />
      <TopSection />
      <div className="container-lg px-md-5 px-3 pt-5">
        <TopDestCarousel />
        <AccommodationPromotionsCarousel />
        <FlightsAndActivitiesPromotionsCarousel />
        <Explore />
        <Features />
        <Recommended />
        <TopDestCarousel />
      </div>
      <div className="mt-5">
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
    </>
  )
}

