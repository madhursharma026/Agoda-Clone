import styles from '../../../styles/Homepage/Features.module.css'

export default function Features() {
    return (
        <>
            <div className="row mt-5">
                <h4 className="text-center">
                    Featured homes recommended for you
                </h4>
                <div className={`col-md-6 col-lg-3 mt-3 ${styles.imgContainer}`}>
                    <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" alt="#ImgNotFound" className="w-100" />
                    <h6 className={`p-2 ${styles.contentPosition}`}>9</h6>
                    <h6 className='mt-2'>Entire 2BHK Flat for Parties/ Family</h6>
                    <h6><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i>&nbsp;<i class="fa fa-map-marker"></i><span className='text-primary'>&nbsp;South Delhi, New Delhi and NCR</span></h6>
                    <h6 className="text-danger">INR 9,899.01</h6>
                </div>
                <div className={`col-md-6 col-lg-3 mt-3 ${styles.imgContainer}`}>
                    <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" alt="#ImgNotFound" className="w-100" />
                    <h6 className={`p-2 ${styles.contentPosition}`}>9.4</h6>
                    <h6 className='mt-2'>Entire 2BHK Flat for Parties/ Family</h6>
                    <h6><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i>&nbsp;<i class="fa fa-map-marker"></i><span className='text-primary'>&nbsp;South Delhi, New Delhi and NCR</span></h6>
                    <h6 className="text-danger">INR 9,899.01</h6>
                </div>
                <div className={`col-md-6 col-lg-3 mt-3 ${styles.imgContainer}`}>
                    <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" alt="#ImgNotFound" className="w-100" />
                    <h6 className={`p-2 ${styles.contentPosition}`}>8.1</h6>
                    <h6 className='mt-2'>Entire 2BHK Flat for Parties/ Family</h6>
                    <h6><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i>&nbsp;<i class="fa fa-map-marker"></i><span className='text-primary'>&nbsp;South Delhi, New Delhi and NCR</span></h6>
                    <h6 className="text-danger">INR 9,899.01</h6>
                </div>
                <div className={`col-md-6 col-lg-3 mt-3 ${styles.imgContainer}`}>
                    <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" alt="#ImgNotFound" className="w-100" />
                    <h6 className={`p-2 ${styles.contentPosition}`}>8.1</h6>
                    <h6 className='mt-2'>Entire 2BHK Flat for Parties/ Family</h6>
                    <h6><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i>&nbsp;<i class="fa fa-map-marker"></i><span className='text-primary'>&nbsp;South Delhi, New Delhi and NCR</span></h6>
                    <h6 className="text-danger">INR 9,899.01</h6>
                </div>
                <div className={`col-md-6 col-lg-3 mt-3 ${styles.imgContainer}`}>
                    <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" alt="#ImgNotFound" className="w-100" />
                    <h6 className={`p-2 ${styles.contentPosition}`}>7.8</h6>
                    <h6 className='mt-2'>Entire 2BHK Flat for Parties/ Family</h6>
                    <h6><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i>&nbsp;<i class="fa fa-map-marker"></i><span className='text-primary'>&nbsp;South Delhi, New Delhi and NCR</span></h6>
                    <h6 className="text-danger">INR 9,899.01</h6>
                </div>
                <div className={`col-md-6 col-lg-3 mt-3 ${styles.imgContainer}`}>
                    <img src="https://pix8.agoda.net/hotelImages/33924205/0/b5822f8baf325836005fdda011f0b21f.jpg?ce=0" alt="#ImgNotFound" className="w-100" />
                    <h6 className={`p-2 ${styles.contentPosition}`}>7.6</h6>
                    <h6 className='mt-2'>Entire 2BHK Flat for Parties/ Family</h6>
                    <h6><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i><i class="fa fa-star text-danger"></i>&nbsp;<i class="fa fa-map-marker"></i><span className='text-primary'>&nbsp;South Delhi, New Delhi and NCR</span></h6>
                    <h6 className="text-danger">INR 9,899.01</h6>
                </div>
            </div>
            <div className='mt-4' style={{ maxWidth: '500px', margin: 'auto' }}>
                <button type="button" class="btn btn-primary w-100" style={{ fontSize: '18px' }}>See more (New Delhi and NCR) properties</button>
            </div>
        </>
    )
}
