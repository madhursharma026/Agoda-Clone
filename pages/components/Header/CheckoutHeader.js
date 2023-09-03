import Link from 'next/link';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';

export default function CheckoutHeader() {
    const steps = [
        'Customer information',
        'Payment information',
        'Booking is confirmed!',
    ];

    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 8px 2px' }}>
            <div className='container-xl pb-2'>
                <div className="row px-md-5 px-3">
                    <div className="col-md-2 col-6 mt-3">
                        <Link href='/'>
                            <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="#ImgNotFound" width='70px' />
                        </Link>
                    </div>
                    <div className="col-md-2 col-6 order-md-2 mt-3" style={{ textAlign: 'right' }}>
                        <Link href='/loginPage' type="button" class="btn btn-outline-primary">Sign In</Link>
                    </div>
                    <div className="col-md-8 mt-md-3 mt-4">
                        <Stepper activeStep={0} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </div>
        </div>
    )
}

