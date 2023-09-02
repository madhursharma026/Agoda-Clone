import Footer3 from "./components/Footer/Footer3";
import Footer1 from "./components/Footer/Footer1";
import styles from '../styles/loginPage.module.css';
import HeaderNavbar from "./components/Header/HeaderNavbar";
import Link from "next/link";

export default function signUpPage() {

    return (
        <>
            <HeaderNavbar />
            <div className={`${styles.loginPageContainer} py-5`}>
                <div className='mx-lg-5 mx-3 pb-5'>
                    <div class={`card ${styles.cardWidth}`}>
                        <div class="card-body px-4">
                            <h4>Sign up</h4>
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>First name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First name" style={{ borderRadius: "5px" }} />
                            </div>
                            <div class="mt-3">
                                <label for="exampleFormControlInput2" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Last name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Last name" style={{ borderRadius: "5px" }} />
                            </div>
                            <div class="mt-3">
                                <label for="exampleFormControlInput3" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Email" style={{ borderRadius: "5px" }} />
                            </div>
                            <div class="mt-3">
                                <label for="exampleFormControlInput4" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="Password" style={{ borderRadius: "5px" }} />
                            </div>
                            <div class="mt-3">
                                <label for="exampleFormControlInput5" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Confirm Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput5" placeholder="Confirm Password" style={{ borderRadius: "5px" }} />
                            </div>
                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" id="5star" name="someCondition" style={{fontSize: '24px'}} defaultChecked />
                                    </div>
                                    <div className="col-11">
                                        <label for="someCondition" style={{ cursor: 'pointer' }}>
                                            &nbsp; Email me exclusive Agoda promotions. I can opt out later as stated in the Privacy Policy.</label>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary mt-4 w-100">Sign Up</button>
                            <h6 class={`${styles.backgroundHR} mt-4`}><span class={styles.hrContent}>or continue with</span></h6>
                            <button type="button" class="btn btn-outline-primary mt-3 w-100 p-2"><i class="fa fa-google"></i> Google</button>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" class="btn btn-outline-primary mt-2 w-100 p-2"><i class="fa fa-facebook"></i> Facebook</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" class="btn btn-outline-primary mt-2 w-100 p-2"><i class="fa fa-apple"></i> Apple</button>
                                </div>
                            </div>
                            <hr />
                            <Link href="/loginPage" type="button" class="btn btn-primary w-100">Already have an account? Sign in</Link>
                            <h6 style={{ fontSize: '12px' }} className="text-center mt-4">By signing in, I agree to Agoda's Terms of Use and Privacy Policy.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
            <Footer3 />
        </>
    )
}

