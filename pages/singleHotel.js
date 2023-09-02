import SearchBar from "./components/DetailedPage/SearchBar";
import Footer1 from "./components/Footer/Footer1";
import Footer3 from "./components/Footer/Footer3";
import HeaderNavbar from "./components/Header/HeaderNavbar";
import MainContent from "./components/SingleHotel/mainContent";

export default function singleHotel() {

    return (
        <>
            <HeaderNavbar />
            <SearchBar />
            <div className="container-lg px-md-5 px-3 mt-3">
                <MainContent />
            </div>
            <Footer1 />
            <Footer3 />
        </>
    )
}

