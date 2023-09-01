import styles from '../../../styles/Homepage/Explore.module.css'

export default function Explore() {
    return (
        <div className="row mt-5">
            <h4 className="text-center">
                Explore more travel vacation rentals
            </h4>
            <div className="col-sm-6 col-md-3 mt-3">
                <div class={`card w-100 ${styles.cardStyle}`}>
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" class="card-img-top" alt="#ImgNotFound" />
                    <div class="card-body p-2">
                        <h5 class="card-title">Apartments</h5>
                        <h6 class="card-title">156,786 properties</h6>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-3">
                <div class={`card w-100 ${styles.cardStyle}`}>
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" class="card-img-top" alt="#ImgNotFound" />
                    <div class="card-body p-2">
                        <h5 class="card-title">Apartments</h5>
                        <h6 class="card-title">156,786 properties</h6>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-3">
                <div class={`card w-100 ${styles.cardStyle}`}>
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" class="card-img-top" alt="#ImgNotFound" />
                    <div class="card-body p-2">
                        <h5 class="card-title">Apartments</h5>
                        <h6 class="card-title">156,786 properties</h6>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 mt-3">
                <div class={`card w-100 ${styles.cardStyle}`}>
                    <img src="https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg" class="card-img-top" alt="#ImgNotFound" />
                    <div class="card-body p-2">
                        <h5 class="card-title">Apartments</h5>
                        <h6 class="card-title">156,786 properties</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
