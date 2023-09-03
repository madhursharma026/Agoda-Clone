import CheckoutHeader from "./components/Header/CheckoutHeader";
import styles from '../styles/checkout.module.css';
import Footer3 from "./components/Footer/Footer3";

export default function checkout() {

    return (
        <>
            <CheckoutHeader />
            <div className="container-lg px-md-5 px-3 mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h6>
                                    Sign in to use your AgodaCash!
                                    <br />
                                    Signing in to your Agoda account allows for faster bookings and more rewards.
                                </h6>
                            </div>
                        </div>
                        <div class="card mt-2" style={{ borderLeft: '5px solid green' }}>
                            <div class="card-body">
                                <h6>
                                    <i className="fa fa-check"></i> Great choice of property - with an average guest rating of 8.2 from 3579 reviews
                                </h6>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <div class={`card ${styles.cardWidth}`}>
                                <div class="card-body px-4">
                                    <h4>Let us know who you are</h4>
                                    <div class="mt-4">
                                        <label for="exampleFormControlInput1" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Full name *</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" style={{ borderRadius: "5px" }} />
                                    </div>
                                    <div class="mt-3">
                                        <label for="exampleFormControlInput2" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Email *</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput2" style={{ borderRadius: "5px" }} />
                                    </div>
                                    <div class="mt-3">
                                        <label for="exampleFormControlInput3" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Retype Email *</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput3" style={{ borderRadius: "5px" }} />
                                    </div>
                                    <div className="mt-3">
                                        <p style={{ fontSize: '14px' }}>If you enter your email address and do not complete your reservation, we may send you reminders to help you resume your booking</p>
                                    </div>
                                    <div className="mt-3">
                                        <div className="row">
                                            <div className="col-6">
                                                <label for="exampleFormControlInput4" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Phone number (optional)</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput4" style={{ borderRadius: "5px" }} />
                                            </div>
                                            <div className="col-6">
                                                <label for="exampleFormControlInput5" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Country/region of residence *</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput5" style={{ borderRadius: "5px" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <input type="checkbox" id="checkbox" name="checkbox" style={{ fontSize: '24px' }} />
                                        <label for="checkbox" style={{ cursor: 'pointer' }}>&nbsp; Make this booking for someone else</label>
                                    </div>
                                    <div className="p-3 mt-3" style={{ background: '#F8F7F9' }}>
                                        <h4>Guest information</h4>
                                        <div className="mt-3">
                                            <label for="exampleFormControlInput6" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Full name *</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput6" style={{ borderRadius: "5px" }} />
                                        </div>
                                        <div className="mt-3">
                                            <label for="exampleFormControlInput7" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Country/region of residence *</label>
                                            <input type="text" class="form-control w-50" id="exampleFormControlInput7" style={{ borderRadius: "5px" }} />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h4><b>Let us know what you need</b></h4>
                                        <p>Requests are subject to availability. We'll send yours right after you book.</p>
                                    </div>
                                    <div className="p-3 mt-3" style={{ background: '#F8F7F9' }}>
                                        <label style={{ fontSize: '15px', fontWeight: '600' }}>Do you have a smoking preference?</label>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <input type="checkbox" id="nonSmoking" name="nonSmoking" style={{ fontSize: '24px' }} />
                                                <label for="nonSmoking" style={{ cursor: 'pointer' }}>&nbsp; Non-Smoking</label>
                                            </div>
                                            <div className="col-6">
                                                <input type="checkbox" id="smoking" name="smoking" style={{ fontSize: '24px' }} />
                                                <label for="smoking" style={{ cursor: 'pointer' }}>&nbsp; Smoking</label>
                                            </div>
                                        </div>
                                        <label className="mt-3" style={{ fontSize: '15px', fontWeight: '600' }}>What bed configuration do you prefer?</label>
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <input type="checkbox" id="nonSmoking" name="nonSmoking" style={{ fontSize: '24px' }} />
                                                <label for="nonSmoking" style={{ cursor: 'pointer' }}>&nbsp; I'd like a large bed</label>
                                            </div>
                                            <div className="col-6">
                                                <input type="checkbox" id="smoking" name="smoking" style={{ fontSize: '24px' }} />
                                                <label for="smoking" style={{ cursor: 'pointer' }}>&nbsp; I'd like twin beds</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-primary">Click here for more requests</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 pb-5'>
                            <div class={`card ${styles.cardWidth}`}>
                                <div class="card-body px-4">
                                    <p>By proceeding with this booking, I agree to Agoda’s <span className="text-primary">Terms of use</span> and <span className="text-primary">Privacy Policy</span></p>
                                    <p className="text-danger" style={{ textAlign: 'right' }}>Our last 3 rooms at this price</p>
                                    <button type="button" class="btn btn-primary px-4">NEXT: FINAL STEP</button>
                                    <h6 className="text-success" style={{ textAlign: 'right' }}>You won't be charged yet.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='mt-3 pb-5'>
                            <div class={`card ${styles.cardWidth}`}>
                                <div class="card-body px-4">
                                    <div className="row">
                                        <div className="col-xxl-4">
                                            <img src="https://pix8.agoda.net/hotelImages/43879/0/604250d16d9ebba5902f136c3075603b.jpg?ca=7&ce=1&s=1024x&ar=16x9" alt="#ImgNotFound" className="w-100" />
                                        </div>
                                        <div className="col-xxl-8 mt-xxl-0 mt-2">
                                            <h6 className="text-success">Free Wi-Fi</h6>
                                            <h4>The Lalit Mumbai</h4>
                                            <h4>
                                                <i class="fa fa-star text-warning"></i>
                                                <i class="fa fa-star text-warning"></i>
                                                <i class="fa fa-star text-warning"></i>
                                                <i class="fa fa-star text-warning"></i>
                                            </h4>
                                            <span style={{ fontSize: '12px' }}>
                                                Sahar, Andheri, Andheri East, Mumbai, Maharashtra, India, 400059
                                            </span>
                                            <br />
                                            <h1 style={{ fontSize: '14px' }}>
                                                Excellent location
                                                <br />
                                                <span className="text-primary">- What's nearby?</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div class={`card ${styles.cardWidth}`}>
                                    <div class="card-body p-0">
                                        <h6 style={{ display: 'inline-block', fontSize: '12px' }} className="bg-primary p-2 text-white">LOWEST PRICE!</h6>
                                    </div>
                                    <div className="p-3">
                                        <h6>15 Sep 2023 - 16 Sep 2023 <span style={{ float: 'right' }}>1 night</span></h6>
                                        <h6 style={{ fontSize: '12px' }} className="mt-3">1 x Deluxe King Room <span className="text-primary" style={{ float: 'right' }}>Change</span></h6>
                                        <h6 className="mt-3 text-primary">Excellent cleanliness</h6>
                                        <hr />
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <img src="https://pix8.agoda.net/hotelImages/43879/0/604250d16d9ebba5902f136c3075603b.jpg?ca=7&ce=1&s=1024x&ar=16x9" alt="#ImgNotFound" className="w-100 h-100" />
                                            </div>
                                            <div className="col-xl-8">
                                                <ul style={{ listStyleType: 'none' }}>
                                                    <li>1 room, 2 adults</li>
                                                    <li>2 adults</li>
                                                    <li>Parking</li>
                                                    <li>Express check-in</li>
                                                    <li>Free WiFi</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr />
                                        <p className="text-primary">Special Conditions</p>
                                        <h6>Tax receipt available for this booking</h6>
                                        <h6>Domestic rate</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div class={`card ${styles.cardWidth}`} style={{ borderLeft: '5px solid red' }}>
                                    <div class="card-body">
                                        <h6>We only have 3 rooms left at this price!</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div class={`card ${styles.cardWidth}`} style={{ borderLeft: '5px solid green' }}>
                                    <div class="card-body">
                                        <h6>Well done! You're getting this property's lowest price!</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div class={`card ${styles.cardWidth}`}>
                                    <h6 className="bg-danger p-2 text-white" style={{ float: 'right', display: 'inline-block' }}>50% OFF TODAY</h6>
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-xl-8">
                                                Original price (1 room x 1 night)
                                            </div>
                                            <div className="col-xl-4">
                                                <del>Rs. 20,726.82</del>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-8">
                                                Room price (1 room x 1 night)
                                            </div>
                                            <div className="col-xl-4">
                                                Rs. 10,296.80
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-8">
                                                Booking fees
                                            </div>
                                            <div className="col-xl-4 text-primary">
                                                FREE
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-xl-8">
                                                Final price
                                            </div>
                                            <div className="col-xl-4">
                                                <b>Rs. 12,150.22</b>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '12px' }}>Included in price: Goods & Services Tax Rs. 1,853.42</span>
                                        <div className="bg-success mt-2 p-2 text-white" style={{ fontSize: '12px' }}>
                                            We price match. Find it for less, and we'll match it!
                                        </div>
                                        <span style={{ fontSize: '12px' }}>You'll pay The Lalit Mumbai in the property's local currency (Rs.).</span>
                                        <span style={{ fontSize: '12px' }}>YOU SAVED Rs. 10,430.02 ON THIS BOOKING!</span>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <div class={`card p-3 ${styles.cardWidth}`} style={{ borderLeft: '5px solid blue' }}>
                                    <h5>About payment</h5>
                                    <hr />
                                    <p style={{ fontSize: '14px' }}>Payment for this booking will be charged by the property, not Agoda. We will be sharing your credit card details with our supplier and with the property to secure your booking and complete the transaction.  See booking conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src="https://cdn6.agoda.net/images/new-bf/15-mil-reviews-light.png" alt="#ImgNotFound" style={{ width: "50px" }} />
                        <h6 style={{ color: '#8660C7' }}>103+ MILLION VERIFIED REVIEWS</h6>
                        <p style={{ fontSize: '12px' }}>
                            Find the perfect place to stay. Read honest reviews from the Agoda travel community.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://cdn6.agoda.net/images/new-bf/15-mil-reviews-light.png" alt="#ImgNotFound" style={{ width: "50px" }} />
                        <h6 style={{ color: '#8660C7' }}>103+ MILLION VERIFIED REVIEWS</h6>
                        <p style={{ fontSize: '12px' }}>
                            Find the perfect place to stay. Read honest reviews from the Agoda travel community.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://cdn6.agoda.net/images/new-bf/15-mil-reviews-light.png" alt="#ImgNotFound" style={{ width: "50px" }} />
                        <h6 style={{ color: '#8660C7' }}>103+ MILLION VERIFIED REVIEWS</h6>
                        <p style={{ fontSize: '12px' }}>
                            Find the perfect place to stay. Read honest reviews from the Agoda travel community.
                        </p>
                    </div>
                </div>
            </div>
            <Footer3 />
        </>
    )
}

