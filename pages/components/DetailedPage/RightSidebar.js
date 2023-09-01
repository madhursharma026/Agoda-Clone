import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default function RightSidebar() {
    const [firstTab, setFirstTab] = useState(false)
    const [secondTab, setSecondTab] = useState(true)
    const [thirdTab, setThirdTab] = useState(false)
    return (
        <>
            <div className="row">
                <div className="col-lg">
                    <div class="card">
                        <div class="card-body text-center">
                            <h6>25 Aug</h6>
                            <span>From Rs. 7,255</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div class="card">
                        <div class="card-body text-center">
                            <h6>25 Aug</h6>
                            <span>From Rs. 7,255</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div class="card">
                        <div class="card-body text-center">
                            <h6>25 Aug</h6>
                            <span>From Rs. 7,255</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div class="card">
                        <div class="card-body text-center">
                            <h6>25 Aug</h6>
                            <span>From Rs. 7,255</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div class="card">
                        <div class="card-body text-center">
                            <h6>25 Aug</h6>
                            <span>From Rs. 7,255</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-group w-100 mt-3 bg-white" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                <label class="btn p-3" for="btnradio1" style={{ borderRadius: '0px', border: '0px', borderBottom: `${firstTab ? '3px solid #0D6EFD' : ''}` }} onClick={() => (setFirstTab(true), setSecondTab(false), setThirdTab(false))}>
                    <div className="row">
                        <div className="col-6">
                            <h6>Cheapest</h6>
                            <h6 style={{ marginTop: '-5px' }}>2h 16m</h6>
                        </div>
                        <div className="col-6" style={{ textAlign: 'right' }}>
                            <h6>From</h6>
                            <h6 className="text-muted" style={{ marginTop: '-5px' }}>Rs. 9,816</h6>
                        </div>
                    </div>
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label class="btn p-3" for="btnradio2" style={{ borderRadius: '0px', border: '0px', borderBottom: `${secondTab ? '3px solid #0D6EFD' : ''}` }} onClick={() => (setFirstTab(false), setSecondTab(true), setThirdTab(false))}>
                    <div className="row">
                        <div className="col-6">
                            <h6>Cheapest</h6>
                            <h6 style={{ marginTop: '-5px' }}>2h 16m</h6>
                        </div>
                        <div className="col-6" style={{ textAlign: 'right' }}>
                            <h6>From</h6>
                            <h6 className="text-danger" style={{ marginTop: '-5px' }}>Rs. 9,816</h6>
                        </div>
                    </div>
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label class="btn p-3" for="btnradio3" style={{ borderRadius: '0px', border: '0px', borderBottom: `${thirdTab ? '3px solid #0D6EFD' : ''}` }} onClick={() => (setFirstTab(false), setSecondTab(false), setThirdTab(true))}>
                    <div className="row">
                        <div className="col-6">
                            <h6>Cheapest</h6>
                            <h6 style={{ marginTop: '-5px' }}>2h 16m</h6>
                        </div>
                        <div className="col-6" style={{ textAlign: 'right' }}>
                            <h6>Cheapest</h6>
                            <h6 className="text-muted" style={{ marginTop: '-5px' }}>Rs. 9,816</h6>
                        </div>
                    </div>
                </label>
            </div>

            <div className="row mt-4">
                <div className="col-8">
                    <h4>Showing 1 flights from AGR to BLR</h4>
                    <span>Price per passenger includes tax and fees</span>
                </div>
                <div className="col-4" style={{ textAlign: 'right' }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ borderRadius: '30px' }}>
                            Best Overall
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div class="card mt-3">
                <div class="card-body bg-danger text-white px-3 py-2" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}>
                    <span style={{ fontSize: '15px' }}><i class="fa fa-tag"></i> Cheapest available flight</span>
                </div>
                <div class="card-body">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <span className="p-1" style={{ border: '1px solid black', fontSize: '12px' }}>Regular Fare</span>
                            <br />
                            <br />
                            <img src="https://img.agoda.net/images/mvc/default/airlines/6E_v2.png" alt="#ImgNotFound" width='30px' /> IndiGo
                        </div>
                        <div className="col-lg-3 col-6 order-lg-2" style={{ textAlign: 'right' }}>
                            <span className="p-1 bg-danger text-white" style={{ fontSize: '12px' }}>Rs. 132 OFF</span>
                            <br />
                            <del>Rs. 10,091</del>
                            <h5 className="text-danger">Rs. 9,960</h5>
                            <span style={{ fontSize: '12px' }}>Average price per passenger</span>
                            <br />
                            <button type="button" class="btn btn-primary">Select</button>
                            <br />
                            <button type="button" class="btn btn-outline-primary mt-2">Add to cart</button>
                            <div className="text-primary mt-2">Flight Details <i class="fa fa-caret-up"></i></div>
                        </div>
                        <div className="col-lg-6 text-center mt-lg-0 mt-3">
                            <h3>14:50 ---------- 17:05</h3>
                            <p>&emsp;AGR &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; BLR</p>
                            <p style={{ marginTop: '-20px' }}>2h 15m (Direct)</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-3">
                            <h6>14:50</h6>
                            <br />
                            <span>2h 15m</span>
                            <br />
                            <br />
                            <h6>17:05</h6>
                        </div>
                        <div className="col-9">
                            <h6>Agra Airport (AGR)</h6>
                            <h6><img src="https://img.agoda.net/images/mvc/default/airlines/6E_v2.png" alt="#ImgNotFound" width='30px' /> IndiGo</h6>
                            <span>
                                6E 5917 · Airbus A320
                                <br />
                                Economy class
                            </span>
                            <h6>Kempegowda International Airport (BLR)</h6>
                        </div>
                    </div>
                    <h6 className="p-2" style={{ background: '#DDE9FD', borderRadius: '20px' }}>You will arrive on  Sun, Aug 27</h6>
                    <div class="card">
                        <div class="card-body" style={{ fontSize: '14px' }}>
                            Baggage allowance and policies
                            <br />
                            Cancellation with fee: from Rs.3,000.00 per adult
                            <br />
                            Change with fee: from Rs.3,250.00 per adult
                            <div className="text-primary">Read full policies</div>
                            <div className="text-primary">Airline baggage fee information</div>
                        </div>
                    </div>
                    <div className="mt-3" style={{ float: 'right' }}>
                        <button type="button" class="btn btn-outline-primary mx-2">Add to cart</button>
                        <button type="button" class="btn btn-primary mx-2">Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}
