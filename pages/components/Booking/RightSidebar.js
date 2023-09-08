
export default function RightSidebar() {

    return (
        <div className="mb-5">
            <h3>User Details</h3>
            <div class="card" style={{ background: '#B7F181', borderRadius: '0px' }}>
                <div class="card-body">
                    <h5>
                        Name
                        <br />
                        Your Name
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            Edit
                        </span>
                    </h5>
                </div>
            </div>
            <div class="card mt-3" style={{ borderRadius: '0px' }}>
                <div class="card-body">
                    <h6>Email</h6>
                    <div class="alert alert-warning py-1 px-2" role="alert">
                        <i class="fa fa-warning"></i> Your email hasn’t been verified. Verify email
                    </div>
                    <h5>youremail121@gmail.com</h5>
                </div>
            </div>
            <div class="card mt-3 pb-4" style={{ borderRadius: '0px' }}>
                <div class="card-body">
                    <h6>
                        Phone number
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            Add
                        </span>
                    </h6>
                </div>
            </div>
            <div class="card mt-3 pb-4" style={{ borderRadius: '0px' }}>
                <div class="card-body">
                    <h6>
                        Password
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            Edit
                        </span>
                    </h6>
                </div>
            </div>
            <h3 className="my-4">
                Payment methods
            </h3>
            <div class="card mt-3 py-2" style={{ borderRadius: '0px' }}>
                <div class="card-body form-check form-switch">
                    <h6>
                        Save my credit card information
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        </span>
                    </h6>
                </div>
            </div>
            <h3 className="my-4">
                Email subscriptions
            </h3>
            <div class="card mt-3 py-2" style={{ borderRadius: '0px' }}>
                <div class="card-body">
                    <h6>Newsletter</h6>
                    <span className="me-4">
                        <input class="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                            Daily
                        </label>
                    </span>
                    <span className="mx-4">
                        <input class="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault2" />
                        <label class="form-check-label" for="flexCheckDefault2">
                            Twice a week
                        </label>
                    </span>
                    <span className="mx-4">
                        <input class="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault3" />
                        <label class="form-check-label" for="flexCheckDefault3">
                            Weekly
                        </label>
                    </span>
                    <span className="ms-4">
                        <input class="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault4" />
                        <label class="form-check-label" for="flexCheckDefault4">
                            Never
                        </label>
                    </span>
                </div>
            </div>
            <div class="card mt-3 py-2" style={{ borderRadius: '0px' }}>
                <div class="card-body form-check form-switch">
                    <h6>
                        I would like to receive booking assist reminders
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        </span>
                    </h6>
                </div>
            </div>
            <div class="card mt-3 py-2" style={{ borderRadius: '0px' }}>
                <div class="card-body form-check form-switch">
                    <h6>
                        I would like to receive emails about Agoda promotions
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        </span>
                    </h6>
                </div>
            </div>
            <div class="card mt-3 py-2" style={{ borderRadius: '0px' }}>
                <div class="card-body form-check form-switch">
                    <h6>
                        I would like to know about information and offers related to my upcoming trip
                        <span style={{ float: 'right', fontSize: '18px' }}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    )
}

