import Link from 'next/link';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../../../styles/HeaderNavbar.module.css'

function HeaderNavbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="sm" className="px-md-5 px-3">
                <Navbar.Brand>
                    <Link href='/'>
                        <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="#ImgNotFound" width='70px' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => handleShow()} />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.hideAfterSMScrn}>
                    <Nav className="me-auto">
                        <h6 className={`pt-2 ${styles.FlightAndHotelOptions}`}><Nav.Link href="/FlightAndHotel" className={`ms-4 ${styles.headerMenu}`}>Flight + Hotel</Nav.Link></h6>
                        <h6 className={`pt-2 ${styles.HotelsAndHomesOptions}`}><Nav.Link href="/" className={`mx-3 ${styles.headerMenu}`}>Hotels & Homes</Nav.Link></h6>
                        <h6 className={`pt-2 ${styles.FlightsOptions}`}><Nav.Link href="/Flight" className={`mx-2 ${styles.headerMenu}`}>Flights</Nav.Link></h6>
                        <h6 className={`pt-2 ${styles.CouponsAndDealsOptions}`}><Nav.Link href="#CouponsAndDeals" className={`mx-2 ${styles.headerMenu}`}><span className={`p-0 px-1 ${styles.newOption}`}>New!</span> Coupons & Deals</Nav.Link></h6>
                        <h6 className={`pt-2 ${styles.AirportsTransferOptions}`}><Nav.Link href="#AirportsTransfer" className={`mx-2 ${styles.headerMenu}`}>Airport transfer</Nav.Link></h6>
                        <h6 className={`pt-2 ${styles.ActivitiesOptions}`}><Nav.Link href="#Activities" className={`mx-2 ${styles.headerMenu}`}><span className={`p-0 px-1 ${styles.newOption}`}>New!</span> Activities</Nav.Link></h6>
                        <h6 className={`pt-2 ${styles.OtherOptions}`}><Nav.Link href="#OtherOptions" className={`mx-2 ${styles.headerMenu}`}><i class="fa fa-ellipsis-h"></i></Nav.Link></h6>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className={`justify-content-end ${styles.hideAfterSMScrn}`}>
                    <button type="button" class={`btn btn-outline-danger mx-3 ${styles.ListYourPlaceBtn}`}>List You Place</button>
                    <img className={`mx-3 ${styles.FlagImg}`} src="https://cdn6.agoda.net/images/mobile/flag-us@2x.png" alt="#ImgNotFound" width='30px' />
                    <h6 className={`mx-3 ${styles.RsText}`}>Rs.</h6>
                    <button type="button" class={`btn btn-outline-primary mx-3 ${styles.SignInBtn}`}>Sign In</button>
                    <button type="button" class={`btn btn-outline-primary mx-3 ${styles.CreateAccountBtn}`}>Create Account</button>
                    <i class={`fa fa-shopping-cart mx-3 ${styles.ShoppingCartBtnOption}`} style={{ fontSize: '20px' }}></i>
                    <i class={`fa fa-bars mx-3 ${styles.MenuBarsOption}`} style={{ fontSize: '20px' }}></i>
                </Navbar.Collapse>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul style={{ listStyleType: 'none' }}>
                        <li className='mt-3'>
                            <Link href='/FlightAndHotel' style={{textDecoration: 'none', fontSize: '20px'}}>Flight + Hotel</Link>
                        </li>
                        <li className='mt-3'>
                            <Link href='/' style={{textDecoration: 'none', fontSize: '20px'}}>Hotels & Homes</Link>
                        </li>
                        <li className='mt-3'>
                            <Link href='/Flight' style={{textDecoration: 'none', fontSize: '20px'}}>Flights</Link>
                        </li>
                        <li className='mt-3'>
                            <Link href='#' style={{textDecoration: 'none', fontSize: '20px'}}>Coupons & Deals</Link>
                        </li>
                        <li className='mt-3'>
                            <Link href='#' style={{textDecoration: 'none', fontSize: '20px'}}>Airport transfer</Link>
                        </li>
                        <li className='mt-3'>
                            <Link href='#' style={{textDecoration: 'none', fontSize: '20px'}}>Activities</Link>
                        </li>
                        <li className='mt-3'>
                            <Link href='#' style={{textDecoration: 'none', fontSize: '20px'}}>Airport transfer</Link>
                        </li>
                        <li className='mt-3'>
                            <button type="button" class={`btn btn-outline-danger`}>List You Place</button>
                        </li>
                        <li className='mt-3'>
                            <button type="button" class={`btn btn-outline-primary`}>Create Account</button>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default HeaderNavbar;