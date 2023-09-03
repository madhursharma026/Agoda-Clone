import styles from '../../../styles/SingleHotel/mainContent.module.css';
import Accordion from 'react-bootstrap/Accordion';


export default function MainContent() {

    return (
        <>
            <div className="row">
                <div className="col-md-4 mt-3">
                    <img src="https://pix8.agoda.net/hotelImages/43879/0/604250d16d9ebba5902f136c3075603b.jpg?ca=7&ce=1&s=1024x768" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4 col-6 mt-3">
                            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/9095769.jpg?k=66ba36f0585d2d55b86762632a47ab6cc6a666d8e44c3159c07d969037f54454&o=" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                        </div>
                        <div className="col-md-4 col-6 mt-3">
                            <img src="https://pix8.agoda.net/hotelImages/43879/-1/ce74bdbdbbf2375bb3977491af0f1c41.jpg?ca=7&ce=1&s=1024x768" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                        </div>
                        <div className="col-md-4 col-6 mt-3">
                            <img src="https://pix8.agoda.net/hotelImages/43879/-1/54d586eeba338a11ce2cb99a9d4ae875.jpg?ca=7&ce=1&s=1024x768" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                        </div>
                        <div className="col-md-4 col-6 mt-3">
                            <img src="https://pix8.agoda.net/hotelImages/43879/0/6d4806fbe8acd32f86beb62b14b893be.jpg?ca=7&ce=1&s=1024x768" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                        </div>
                        <div className="col-md-4 col-6 mt-3">
                            <img src="https://pix8.agoda.net/hotelImages/43879/-1/2037fbf452e08cc5ac25bf0020d149ae.jpg?ca=7&ce=1&s=1024x768" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                        </div>
                        <div className="col-md-4 col-6 mt-3">
                            <img src="https://pix8.agoda.net/hotelImages/43879/-1/b7366b5234132d1768d9c3ec97754e82.jpg?ca=7&ce=1&s=1024x768" alt="#ImgNotFound" className="h-100 w-100" style={{ borderRadius: '5px' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div class={`card mt-3`}>
                <div class="card-body row pb-0">
                    <div className={`col-lg-8 p-0 m-0`}>
                        <ul className={styles.someOptionContainer} style={{ listStyleType: 'none' }}>
                            <li className={`mx-3 ${styles.someOptions}`} style={{ display: 'inline' }}>Display</li>
                            <li className={`mx-3 ${styles.someOptions}`} style={{ display: 'inline' }}>Room</li>
                            <li className={`mx-3 ${styles.someOptions}`} style={{ display: 'inline' }}>Facilities</li>
                            <li className={`mx-3 ${styles.someOptions}`} style={{ display: 'inline' }}>Reviews</li>
                            <li className={`mx-3 ${styles.someOptions}`} style={{ display: 'inline' }}>Locations</li>
                            <li className={`mx-3 ${styles.someOptions}`} style={{ display: 'inline' }}>Policies</li>
                        </ul>
                    </div>
                    <div className={`col-lg-4 p-0 m-0 text-center`}>
                        <h5 style={{ fontSize: '12px' }}>from <span className="text-danger" style={{ fontSize: '18px' }}>Rs. 10,297</span><button type="button" class="btn btn-primary ms-2" style={{ borderRadius: '20px', marginTop: '-10px' }}>Book Room</button></h5>
                    </div>
                </div>
            </div>

            <div class={`row`}>
                <div className={`col-lg-8 col-md-7 mt-3`}>
                    <div class="card">
                        <div class="card-body">
                            <span className='py-1 px-2 text-white' style={{ background: '#0A4867', fontSize: '16px' }}>Domestic Deal</span>
                            <h2 className='mt-3'>The Lalit Mumbai <i class="fa fa-star text-warning fs-6"></i> <i class="fa fa-star text-warning fs-6"></i> <i class="fa fa-star text-warning fs-6"></i> <i class="fa fa-star text-warning fs-6"></i> <i class="fa fa-star text-warning fs-6"></i></h2>
                            <h6>Sahar, Andheri, Andheri East, Mumbai, India, 400059 - SEE MAP</h6>
                            <hr />
                            <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Andheri East, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Gateway of India. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.</p>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body row">
                            <div className="col-lg col-4 text-center mt-lg-0 mt-3">
                                <img src="https://cdn6.agoda.net/images/property/highlights/location.svg" alt="#ImgNotFound" className='w-100' style={{ maxWidth: '50px', }} />
                                <h6 style={{ fontSize: '14px' }}>Located in heart of Mumbai</h6>
                            </div>
                            <div className="col-lg col-4 text-center mt-lg-0 mt-3">
                                <img src="https://cdn6.agoda.net/images/property/highlights/location.svg" alt="#ImgNotFound" className='w-100' style={{ maxWidth: '50px', }} />
                                <h6 style={{ fontSize: '14px' }}>Located in heart of Mumbai</h6>
                            </div>
                            <div className="col-lg col-4 text-center mt-lg-0 mt-3">
                                <img src="https://cdn6.agoda.net/images/property/highlights/location.svg" alt="#ImgNotFound" className='w-100' style={{ maxWidth: '50px', }} />
                                <h6 style={{ fontSize: '14px' }}>Located in heart of Mumbai</h6>
                            </div>
                            <div className="col-lg col-6 text-center mt-lg-0 mt-3">
                                <img src="https://cdn6.agoda.net/images/property/highlights/location.svg" alt="#ImgNotFound" className='w-100' style={{ maxWidth: '50px', }} />
                                <h6 style={{ fontSize: '14px' }}>Located in heart of Mumbai</h6>
                            </div>
                            <div className="col-lg col-6 text-center mt-lg-0 mt-3">
                                <img src="https://cdn6.agoda.net/images/property/highlights/location.svg" alt="#ImgNotFound" className='w-100' style={{ maxWidth: '50px', }} />
                                <h6 style={{ fontSize: '14px' }}>Located in heart of Mumbai</h6>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body row">
                            <h5>Facilities</h5>
                            <div className="col-4"><i class="fa fa-check"></i> Free Wi-Fi</div>
                            <div className="col-4"><i class="fa fa-check"></i> Free Wi-Fi</div>
                            <div className="col-4"><i class="fa fa-check"></i> Free Wi-Fi</div>
                            <div className="col-4"><i class="fa fa-check"></i> Free Wi-Fi</div>
                            <div className="col-4"><i class="fa fa-check"></i> Free Wi-Fi</div>
                            <div className="col-4"><i class="fa fa-check"></i> Free Wi-Fi</div>
                        </div>
                    </div>


                    <div class="card mt-3 p-3" style={{ background: '#FDF3F3' }}>
                        <h6 className="text-danger">This property is in high demand!</h6>
                        <h6>52 travelers have booked today.</h6>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-5 mt-3`}>
                    <div class="card">
                        <div class="card-body">
                            <h4>8.2 Excellent</h4>
                            <h6 className="text-primary">3,579 reviews</h6>
                            <span style={{ border: '1px solid black', display: 'inline-block' }} className='m-1 p-1'>Break fast 79 <i class="fa fa-thumbs-up text-success"></i></span>
                            <span style={{ border: '1px solid black', display: 'inline-block' }} className='m-1 p-1'>House keeping 51 <i class="fa fa-thumbs-up text-success"></i></span>
                            <span style={{ border: '1px solid black', display: 'inline-block' }} className='m-1 p-1'>Food & Dining 28 <i class="fa fa-thumbs-up text-success"></i></span>

                            <div class="card mt-3" style={{ border: '0px' }}>
                                <div class="card-body p-0">
                                    <h6 className='p-3' style={{ background: '#F8F7F9' }}>
                                        "Hotel is clean, staff is very helpful and polite and food is good."
                                        <hr />
                                        Kaustubh
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-body">
                            <img src="https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg?s=1024x" alt="#ImgNotFound" className='w-100' />
                            <h6 className='mt-3'>8.6 Excellent</h6>
                            <h6>Location rating score</h6>
                            <h6><i class="fa fa-trophy"></i> &nbsp; Excellent location - Inside city center</h6>
                            <h6><i class="fa fa-building"></i> &nbsp; Popular neighborhood</h6>
                            <h6><i class="fa fa-user"></i> &nbsp; Excellent for walking</h6>
                            <hr />
                            <h6>Parking <span style={{ float: 'right', color: 'green' }}>FREE</span></h6>
                            <hr />
                            <h6 className='text-primary' style={{ float: 'right' }}>SEE NEARBY PLACES</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <h2>Deals you'll love</h2>
                <div className={`col-sm-6 col-lg-3 mt-3`}>
                    <div class="card">
                        <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <h6 class="card-title">South Delhi</h6>
                            <p style={{ marginTop: '-10px' }}>New Delhi and NCR</p>
                            <div style={{ marginTop: '-20px' }}><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i></div>
                            <div style={{ float: 'right' }}>
                                <del>₹ 10,221</del><br />
                                <span className='text-danger'><b>₹ 3,534</b></span>
                            </div>
                            <button type="button" class="btn btn-outline-primary w-100 mt-3" style={{ borderRadius: '20px' }}>View this deal</button>
                        </div>
                    </div>
                </div>

                <div className={`col-sm-6 col-lg-3 mt-3`}>
                    <div class="card">
                        <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <h6 class="card-title">South Delhi</h6>
                            <p style={{ marginTop: '-10px' }}>New Delhi and NCR</p>
                            <div style={{ marginTop: '-20px' }}><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i></div>
                            <div style={{ float: 'right' }}>
                                <del>₹ 10,221</del><br />
                                <span className='text-danger'><b>₹ 3,534</b></span>
                            </div>
                            <button type="button" class="btn btn-outline-primary w-100 mt-3" style={{ borderRadius: '20px' }}>View this deal</button>
                        </div>
                    </div>
                </div>
                <div className={`col-sm-6 col-lg-3 mt-3`}>
                    <div class="card">
                        <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <h6 class="card-title">South Delhi</h6>
                            <p style={{ marginTop: '-10px' }}>New Delhi and NCR</p>
                            <div style={{ marginTop: '-20px' }}><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i></div>
                            <div style={{ float: 'right' }}>
                                <del>₹ 10,221</del><br />
                                <span className='text-danger'><b>₹ 3,534</b></span>
                            </div>
                            <button type="button" class="btn btn-outline-primary w-100 mt-3" style={{ borderRadius: '20px' }}>View this deal</button>
                        </div>
                    </div>
                </div>
                <div className={`col-sm-6 col-lg-3 mt-3`}>
                    <div class="card">
                        <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" class="card-img-top" alt="#ImgNotFound" />
                        <div class="card-body">
                            <h6 class="card-title">South Delhi</h6>
                            <p style={{ marginTop: '-10px' }}>New Delhi and NCR</p>
                            <div style={{ marginTop: '-20px' }}><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i></div>
                            <div style={{ float: 'right' }}>
                                <del>₹ 10,221</del><br />
                                <span className='text-danger'><b>₹ 3,534</b></span>
                            </div>
                            <button type="button" class="btn btn-outline-primary w-100 mt-3" style={{ borderRadius: '20px' }}>View this deal</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <h5>Select your room</h5>
                <div className="row">
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                    <div className="col-3 text-primary"><i class="fa fa-check"></i> Free Wi-Fi</div>
                </div>
            </div>

            <div className="mt-5">
                <h3>What people love about The Lalit Mumbai</h3>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 mt-3">
                        <div className='p-2' style={{ background: '#F9F9FA' }}>
                            <h6 className="text-primary">Exceptional</h6>
                            <span className='bg-primary text-white p-1'>Staff</span>
                            <p className='fs-6'>"Hotel is clean, staff is very helpful and polite and food is good."</p>
                            <hr />
                            Kaustubh | 21 August 2023
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mt-3">
                        <div className='p-2' style={{ background: '#F9F9FA' }}>
                            <h6 className="text-primary">Exceptional</h6>
                            <span className='bg-primary text-white p-1'>Staff</span>
                            <p className='fs-6'>"Hotel is clean, staff is very helpful and polite and food is good."</p>
                            <hr />
                            Kaustubh | 21 August 2023
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mt-3">
                        <div className='p-2' style={{ background: '#F9F9FA' }}>
                            <h6 className="text-primary">Exceptional</h6>
                            <span className='bg-primary text-white p-1'>Staff</span>
                            <p className='fs-6'>"Hotel is clean, staff is very helpful and polite and food is good."</p>
                            <hr />
                            Kaustubh | 21 August 2023
                        </div>
                    </div>
                </div>
            </div>


            <div className="row my-3">
                <h2>Frequently asked questions</h2>
                <div className="col-md-8 mt-3">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Does The Lalit Mumbai offer spa services?</Accordion.Header>
                            <Accordion.Body>
                                You can enjoy your stay at The Lalit Mumbai much more by enjoying the benefits of the property's accessible spa services that are offered for all its guests to make your evening or night far better.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is the typical travel time to a nearby airport from The Lalit Mumbai?</Accordion.Header>
                            <Accordion.Body>
                                The average travel time to get from The Lalit Mumbai to the airport is 10 minutes, but please keep in mind that the travel time may fluctuate based on traffic, weather conditions, and time of day.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What are the property's policies for children's bedding at The Lalit Mumbai?</Accordion.Header>
                            <Accordion.Body>
                                The Lalit Mumbai's policy concerning children's bedding considers guests age 12 years and older as adults, and therefore requires an extra bed which will incur an additional fee. You can find additional information about specific child policy and age range for this property, by checking the "Property policies" section located in the property page for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How many rooms does The Lalit Mumbai have?</Accordion.Header>
                            <Accordion.Body>
                                The Lalit Mumbai has a total of 369 rooms.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>At what time of the year is The Lalit Mumbai most popular?</Accordion.Header>
                            <Accordion.Body>
                                The Lalit Mumbai's most popular month where verified tourists have stayed the most is in June.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg" alt="#ImgNotFound" className='w-100' />
                    <button type="button" class="btn btn-primary w-100">View Map</button>
                </div>
            </div>
        </>
    )
}

