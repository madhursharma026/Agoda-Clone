import Link from "next/link";

export default function LeftSidebar(props) {
    let page = props.page

    return (
        <>
            <div class="list-group">
                <Link href="/Booking" class="border border-0 list-group-item list-group-item-action text-primary" style={{ background: `${page === 'Booking' ? '#e6e1e1' : 'transparent'}` }}><h5><i class="fa fa-calendar-check-o"></i> My Booking</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-commenting"></i> Property messages</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-star-o"></i> Reviews</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-star"></i> AgodaVIP</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-star"></i> AgodaCash</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-star"></i> Cashback Rewards</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-star"></i> PointsMAX</h5></Link>
                <Link href="#" class="border border-0 bg-transparent list-group-item list-group-item-action text-primary"><h5><i class="fa fa-star"></i> PointsMAX</h5></Link>
                <Link href="/Profile" class="border border-0 list-group-item list-group-item-action text-primary" style={{ background: `${page === 'Profile' ? '#e6e1e1' : 'transparent'}` }}><h5><i class="fa fa-user"></i> Profile</h5></Link>
            </div >
        </>
    )
}


