import SearchBar from "./components/DetailedPage/SearchBar";
import HeaderNavbar from "./components/Header/HeaderNavbar";
import LeftSidebar from "./components/DetailedPage/LeftSidebar";
import RightSidebar from "./components/DetailedPage/RightSidebar";
import Footer1 from "./components/Footer/Footer1";
import Footer3 from "./components/Footer/Footer3";

export default function detailedPage() {
    return (
        <div style={{ background: '#F8F7F9' }}>
            <HeaderNavbar />
            <SearchBar />
            <div className="container-lg px-md-5 px-3">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mt-3">
                        <LeftSidebar />
                    </div>
                    <div className="col-lg-9 col-md-8 mt-3">
                        <RightSidebar />
                    </div>
                </div>
            </div>
            <div className="mt-5 pt-5">
                <Footer1 />
                <Footer3 />
            </div>
        </div>
    )
}
