import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 576, itemsToShow: 5, itemsToScroll: 3 },
    { width: 768, itemsToShow: 7, itemsToScroll: 3 },
];

export default function TopDestCarousel() {
    return (
        <div className="mt-5">
            <h4 className="mb-3" style={{ textAlign: "center" }}>Top destinations in India</h4>
            <Carousel breakPoints={breakPoints}>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/11304/077a5dc2a344a604731be86537916ba0.jpg?ce=0&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/8845/017f7c5548e391397f2be20f88df0b2c.jpg?ce=0&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/16854/0abc435fa78c2ca6fb4cb5ec86af89d0.jpg?ce=0&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
                <div className="mx-2 text-center mt-1">
                    <img src="https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="#ImgNotFound" style={{ width: '85%', borderRadius: '100%' }} />
                    <h6 className='mt-2' style={{ fontSize: '15px' }}>New Delhi and NCR</h6>
                    <p style={{ fontSize: '14px' }}>12,741 accommodations</p>
                </div>
            </Carousel>
        </div>
    );
}