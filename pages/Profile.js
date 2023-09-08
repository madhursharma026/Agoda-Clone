import Footer1 from "./components/Footer/Footer1";
import Footer3 from "./components/Footer/Footer3";
import LeftSidebar from "./components/Common/LeftSidebar";
import HeaderNavbar from "./components/Header/HeaderNavbar";
import RightSidebar from "./components/Profile/RightSidebar";

export default function Profile() {

    return (
        <>
            <HeaderNavbar />
            <div style={{ background: '#F9F9F9' }}>
                <div className="container-lg px-lg-5 px-3 pt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <LeftSidebar page='Profile' />
                        </div>
                        <div className="col-lg-8">
                            <RightSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
            <Footer3 />
        </>
    )
}

