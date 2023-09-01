
export default function LeftSidebar() {
    return (
        <div class="card">
            <div class="card-body">
                <div className="row">
                    <div className="col-6">
                        <h6>Times</h6>
                    </div>
                    <div className="col-6" style={{ textAlign: 'right' }}>
                        <h6 className="text-primary">Clear All</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <label for="departure" class="form-label">Departure from Agra (AGR)</label>
                    <input type="range" class="form-range" id="departure" aria-describedby="timing" />
                    <div id="timing" class="form-text">Between 00:00 and 24:00</div>
                </div>
                <div className="mt-3">
                    <label for="arrival" class="form-label">Arrival in Bangalore (BLR)</label>
                    <input type="range" class="form-range" id="arrival" aria-describedby="timing" />
                    <div id="timing" class="form-text">Between 00:00 and 24:00</div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <h6>Airlines</h6>
                    </div>
                    <div className="col-6" style={{ textAlign: 'right' }}>
                        <h6 className="text-primary">Clear All</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <input type="checkbox" id="indigo" name="indigo" />
                    <label for="indigo" style={{ cursor: 'pointer' }}>&nbsp; Indigo</label>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <h6>Stops</h6>
                    </div>
                    <div className="col-6" style={{ textAlign: 'right' }}>
                        <h6 className="text-primary">Clear All</h6>
                    </div>
                </div>
                <div className="mt-1">
                    <input type="checkbox" id="direct" name="direct" />
                    <label for="direct" style={{ cursor: 'pointer' }}>&nbsp; Direct</label>
                </div>
                <div className="mt-1">
                    <input type="checkbox" id="oneStop" name="oneStop" />
                    <label for="oneStop" style={{ cursor: 'pointer' }}>&nbsp; 1 Stop</label>
                </div>
                <div className="mt-1">
                    <input type="checkbox" id="twoPlusStop" name="twoPlusStop" />
                    <label for="twoPlusStop" style={{ cursor: 'pointer' }}>&nbsp; 2 Stop +</label>
                </div>
                <hr />
                <div className="row mt-3">
                    <div className="col-6">
                        <h6>Price</h6>
                    </div>
                    <div className="col-6" style={{ textAlign: 'right' }}>
                        <h6 className="text-primary">Clear All</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <input type="range" class="form-range" id="arrival" aria-describedby="timing" />
                    <div id="timing" class="form-text">Up to Rs. 9,816</div>
                </div>
                <hr />
                <div className="row mt-3">
                    <div className="col-6">
                        <h6>Duration</h6>
                    </div>
                    <div className="col-6" style={{ textAlign: 'right' }}>
                        <h6 className="text-primary">Clear All</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <input type="range" class="form-range" id="arrival" aria-describedby="timing" />
                    <div id="timing" class="form-text">Under 3 hours</div>
                </div>
            </div>
        </div>
    )
}


