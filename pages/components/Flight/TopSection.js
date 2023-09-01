import Link from 'next/link';
import { useState } from 'react';
import Input from '@mui/material/Input';
import GroupIcon from '@mui/icons-material/Group';
import styles from '../../../styles/searchTab.module.css';
import InputAdornment from '@mui/material/InputAdornment';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function TopSection() {
    const [tab1, setTab1] = useState(false)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)
    const [tab4, setTab4] = useState(true)
    const [tab5, setTab5] = useState(false)
    const [tab6, setTab6] = useState(false)

    return (
        <>
            <img src="https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png" alt="#ImgNotFound" className="w-100" style={{ maxHeight: '350px' }} />
            <div className={styles.topSectionContainer} style={{ marginTop: '-10%' }}>
                <div class="card pb-5 mx-lg-5 mx-3" style={{ boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', borderRadius: '20px' }}>
                    <div class="card-body mx-lg-5" style={{ marginTop: '-50px' }}>
                        <div class="card mx-md-5" style={{ boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }}>
                            <div class="card-body p-0 pt-3">
                                <div class="btn-group w-100 bg-white text-center" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                                    <Link href='/' class={`btn  ${styles.col1}`} for="btnradio1" style={{ borderRadius: '0px', border: '0px', borderBottom: `${tab1 ? '3px solid #0D6EFD' : ''}`, color: `${tab1 ? '#0D6EFD' : 'black'}` }} onClick={() => (setTab1(true), setTab2(false), setTab3(false), setTab4(false), setTab5(false), setTab6(false))}>
                                        <h6><i class={`fa fa-building`} style={{ fontSize: '20px' }}></i> Hotels & Homes</h6>
                                    </Link>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                    <Link href='#PrivatrStays' class={`btn  ${styles.col2}`} for="btnradio2" style={{ borderRadius: '0px', border: '0px', borderBottom: `${tab2 ? '3px solid #0D6EFD' : ''}`, color: `${tab2 ? '#0D6EFD' : 'black'}` }} onClick={() => (setTab1(false), setTab2(true), setTab3(false), setTab4(false), setTab5(false), setTab6(false))}>
                                        <h6><i class={`fa fa-home`} style={{ fontSize: '20px' }}></i> Private stays</h6>
                                    </Link>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                    <Link href='/FlightAndHotel' class={`btn  ${styles.col3}`} for="btnradio3" style={{ borderRadius: '0px', border: '0px', borderBottom: `${tab3 ? '3px solid #0D6EFD' : ''}`, color: `${tab3 ? '#0D6EFD' : 'black'}` }} onClick={() => (setTab1(false), setTab2(false), setTab3(true), setTab4(false), setTab5(false), setTab6(false))}>
                                        <h6><i class={`fa fa-plane`} style={{ fontSize: '20px' }}></i> Flights & Homes</h6>
                                    </Link>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                    <Link href='/Flight' class={`btn  ${styles.col4}`} for="btnradio4" style={{ borderRadius: '0px', border: '0px', borderBottom: `${tab4 ? '3px solid #0D6EFD' : ''}`, color: `${tab4 ? '#0D6EFD' : 'black'}` }} onClick={() => (setTab1(false), setTab2(false), setTab3(false), setTab4(true), setTab5(false), setTab6(false))}>
                                        <h6><i class={`fa fa-plane`} style={{ fontSize: '20px' }}></i> Flights</h6>
                                    </Link>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                                    <Link href='#LongStays' class={`btn  ${styles.col5}`} for="btnradio5" style={{ borderRadius: '0px', border: '0px', borderBottom: `${tab5 ? '3px solid #0D6EFD' : ''}`, color: `${tab5 ? '#0D6EFD' : 'black'}` }} onClick={() => (setTab1(false), setTab2(false), setTab3(false), setTab4(false), setTab5(true), setTab6(false))}>
                                        <h6><i class={`fa fa-calendar`} style={{ fontSize: '20px' }}></i> Long stays</h6>
                                    </Link>

                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" />
                                    <Link href='#Activities' class={`btn  ${styles.col6}`} for="btnradio6" style={{ borderRadius: '0px', border: '0px', borderBottom: `${tab6 ? '3px solid #0D6EFD' : ''}`, color: `${tab6 ? '#0D6EFD' : 'black'}` }} onClick={() => (setTab1(false), setTab2(false), setTab3(false), setTab4(false), setTab5(false), setTab6(true))}>
                                        <h6><i class={`fa fa-asterisk`} style={{ fontSize: '20px' }}></i> Activities</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="button" class="btn mx-2" style={{ border: '2px solid #0B5ED7', background: '#D5E3FD', borderRadius: '20px', color: '#0B5ED7', fontSize: '15px' }}>One Way</button>
                            <button type="button" class="btn btn-outline-primary" style={{ borderRadius: '20px', fontSize: '15px' }}>Round Way</button>
                        </div>
                        <div className="row ps-2">
                            <div className="col-md-6">
                                <Input id="input-with-icon-adornment" placeholder='Flying From' className='px-2 mt-3 w-100' style={{ fontSize: '18px', height: '60px', borderRadius: '5px', border: '1px solid #DEE2E6' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <FlightTakeoffIcon style={{ fontSize: '35px' }} /> </InputAdornment>} />
                            </div>
                            <div className="col-md-6">
                                <Input id="input-with-icon-adornment" placeholder='Flying To' className='px-2 mt-3 w-100' style={{ fontSize: '18px', height: '60px', borderRadius: '5px', border: '1px solid #DEE2E6' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <FlightLandIcon style={{ fontSize: '35px' }} /> </InputAdornment>} />
                            </div>
                        </div>
                        <div className="row ps-2">
                            <div className="col-md-6">
                                {/* <Input id="input-with-icon-adornment" placeholder='Departure Date' className='px-2 mt-3 w-100' style={{ fontSize: '18px', height: '60px', borderRadius: '5px', border: '1px solid #DEE2E6' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <CalendarMonthIcon style={{ fontSize: '35px' }} /> </InputAdornment>} /> */}
                                <Input multiline id="input-with-icon-adornment" placeholder='28 Aug 2023 Wednesday' defaultValue={'28 Aug 2023 \nWednesday'} className='px-2 mt-3 w-100' style={{ fontSize: '18px', height: '60px', borderRadius: '0px', border: '1px solid #DEE2E6', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <CalendarMonthIcon style={{ fontSize: '35px' }} /> </InputAdornment>} />
                            </div>
                            <div className="col-md-6">
                                {/* <Input id="input-with-icon-adornment" placeholder='Return Date' className='px-2 mt-3 w-100' style={{ fontSize: '18px', height: '60px', borderRadius: '5px', border: '1px solid #DEE2E6' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <GroupIcon style={{ fontSize: '35px' }} /> </InputAdornment>} /> */}
                                <Input multiline id="input-with-icon-adornment" placeholder='30 Aug 2023 Wednesday' defaultValue={'30 Aug 2023 \nWednesday'} className='px-2 mt-3 w-100' style={{ fontSize: '18px', height: '60px', borderRadius: '0px', border: '1px solid #DEE2E6', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }} disableUnderline={true} startAdornment={<InputAdornment position="start"> <CalendarMonthIcon style={{ fontSize: '35px' }} /> </InputAdornment>} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="card ms-2 mt-3">
                                    <div className="card-body">
                                        <input type="checkbox" id="direct" name="direct" />
                                        <label for="direct" style={{ cursor: 'pointer' }}>&nbsp; Add Hotel to save up to 25% <span className='bg-danger text-white p-1 mx-2'>Bundle & Save</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4' style={{ maxWidth: '500px', margin: 'auto', marginTop: '-25px', position: 'relative' }}>
                    <button type="button" class="btn text-white w-100 py-2" style={{ fontSize: '24px', background: 'rgb(83, 146, 249)' }}>Search Flights</button>
                </div>
            </div>
        </>
    )
}

