import Footer1 from "./components/Footer/Footer1";
import Footer2 from "./components/Footer/Footer2";
import Footer3 from "./components/Footer/Footer3";
import SearchBar from "./components/DetailedPage/SearchBar";
import HeaderNavbar from "./components/Header/HeaderNavbar";
import HotelLeftSidebar from "./components/DetailedPage/HotelLeftSidebar";
import HotelRightSidebar from "./components/DetailedPage/HotelRightSidebar";

export default function hotelDetailed() {
  return (
    <>
      <HeaderNavbar />
      <SearchBar />
      <div className="container-lg px-md-5 px-3">
        <div className="row">
          <div className="col-lg-3 col-md-4 mt-3">
            <HotelLeftSidebar />
          </div>
          <div className="col-lg-9 col-md-8 mt-3">
            <HotelRightSidebar />
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </>
  )
}
