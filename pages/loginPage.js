import { useState } from "react";
import Footer3 from "./components/Footer/Footer3";
import Footer1 from "./components/Footer/Footer1";
import styles from '../styles/loginPage.module.css';
import HeaderNavbar from "./components/Header/HeaderNavbar";
import Link from "next/link";

export default function loginPage() {
    const [activeTabStatus, setActiveTabStatus] = useState("emailTab")

    function tabStatus(tabName) {
        setActiveTabStatus(tabName)
    }

    return (
        <>
            <HeaderNavbar />
            <div className={`${styles.loginPageContainer} py-5`}>
                <div className='mx-lg-5 mx-3 pb-5'>
                    <div class={`card ${styles.cardWidth}`}>
                        <div class="card-body px-4">
                            <h4>Sign in</h4>
                            <h6>For security, please sign in to access your information</h6>
                            <div className="row text-center pt-3">
                                <div className={`col-6 ${(activeTabStatus === 'emailTab') ? styles.activeTab : styles.unActiveTab}`} onClick={() => tabStatus('emailTab')}>
                                    <h6>EMAIL</h6>
                                </div>
                                <div className={`col-6 ${(activeTabStatus === 'mobileTab') ? styles.activeTab : styles.unActiveTab}`} onClick={() => tabStatus('mobileTab')}>
                                    <h6>MOBILE</h6>
                                </div>
                            </div>
                            {(activeTabStatus === 'emailTab') ?
                                <>
                                    <div class="mt-4">
                                        <label for="exampleFormControlInput1" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Email</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" style={{ borderRadius: "5px" }} />
                                    </div>
                                    <div class="mt-3">
                                        <label for="exampleFormControlInput2" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="Password" style={{ borderRadius: "5px" }} />
                                    </div>
                                </>
                                :
                                <></>
                            }
                            {(activeTabStatus === 'mobileTab') ?
                                <>
                                    <div class="mt-4">
                                        <label for="exampleFormControlInput3" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Mobile number</label>
                                        <div className="row">
                                            <div className="col-3">
                                                <input type="text" class="form-control" defaultValue='+91' maxLength={3} id="exampleFormControlInput1" placeholder="Mobile Number" style={{ borderRadius: "5px" }} />
                                            </div>
                                            <div className="col-9">
                                                <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Mobile Number" style={{ borderRadius: "5px" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <label for="exampleFormControlInput4" class="form-label" style={{ fontSize: '15px', fontWeight: '600' }}>Password</label>
                                        <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="Password" style={{ borderRadius: "5px" }} />
                                    </div>
                                </>
                                :
                                <></>
                            }
                            <button type="button" class="btn btn-primary mt-4 w-100">Sign In</button>
                            <div className="mt-4 row">
                                <div className="col-6">
                                    <Link href='/signUpPage' style={{textDecoration: 'none'}}>Create account</Link>
                                </div>
                                <div className="col-6" style={{ textAlign: 'right' }}>
                                    <i class="fa fa-lock"></i> Forgot password?
                                </div>
                            </div>

                            <h6 class={`${styles.backgroundHR} mt-4`}><span class={styles.hrContent}>or sign in with</span></h6>
                            <button type="button" class="btn btn-outline-primary mt-3 w-100 p-2"><i class="fa fa-google"></i> Google</button>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" class="btn btn-outline-primary mt-2 w-100 p-2"><i class="fa fa-facebook"></i> Facebook</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" class="btn btn-outline-primary mt-2 w-100 p-2"><i class="fa fa-apple"></i> Apple</button>
                                </div>
                            </div>
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

