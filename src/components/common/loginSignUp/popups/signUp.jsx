import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import LoginSignUpLeftCol from '../../loginSignUp/left-coulmn';
import ProfilePic from './assets/images/profile-pic.png';
import './SignUp.css';

const SignUpPopUp = (props) => {

    const { show, onClose } = props;

    return (
        <Modal show={show} fullscreen={true} onHide={onClose}>
            <Modal.Body className="p-0">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="p-0">
                            <LoginSignUpLeftCol />
                        </Col>
                        <Col lg={6} className="bg-for-col-2-login">
                            <Row className="mt-5 mx-3">
                                <Col>
                                    <Row>
                                        <Col xs={1}>
                                            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.9038 1.65379L9.24066 0L0 9.25L9.25 18.5L10.9038 16.8462L3.30758 9.25L10.9038 1.65379Z" fill="white" />
                                            </svg>
                                        </Col>
                                        <Col>
                                            <a href="#" onClick={onClose} class="for-back-col-2-login text-decoration-none">Back</a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="text-end">
                                    <h5 class="for-Step-col-2-login">STEP 01/02</h5>
                                    <h5 class="for-info-col-2-login">Personal Info.</h5>
                                </Col>
                            </Row>
                            <div class="for-form-container-col-2-login pt-0">

                                <Row className="pt-2">
                                    <Col className="text-center">
                                        <Form.Group controlId="profilePic" className="mb-3">
                                            <Form.Label>
                                                <img src={ProfilePic} className="mb-2" />
                                                <div>Add Profile Picture</div>
                                            </Form.Label>
                                            <Form.Control type="file" style={{ display: "none" }} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h1 className="for-login-col-2-login">Register Individual Account!</h1>
                                <p className="form-text-col-2-login">For the purpose of regulation, your details are required.</p>
                                <form>
                                    <div className="mb-4">
                                        <Form.Group className="mb-3" controlId="SignUpInputfirstname">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control id="SignUpInputfirstname" className="input-for-log-in-and-singup-page" type="text" placeholder="Enter Full Name" />
                                        </Form.Group>
                                    </div>
                                    <div class="mb-4">

                                        <Form.Group className="mb-3" controlId="SignUpInputEmail">
                                            <Form.Label>Email*</Form.Label>
                                            <Form.Control id="SignUpInputEmail" className="input-for-log-in-and-singup-page" type="email" placeholder="Enter email address" />
                                        </Form.Group>
                                    </div>
                                    <div class="mb-4">
                                        <Form.Group className="mb-3" controlId="SignUpInputPassword">
                                            <Form.Label>Password*</Form.Label>
                                            <Form.Control id="SignUpInputPassword" className="input-for-log-in-and-singup-page" type="password" placeholder="************" />
                                        </Form.Group>
                                    </div>
                                    <div class="mb-4">
                                        <Form.Group className="mb-3" controlId="SignUpInputReEnterPassword">
                                            <Form.Label>Password*</Form.Label>
                                            <Form.Control id="SignUpInputReEnterPassword" className="input-for-log-in-and-singup-page" type="password" placeholder="************" />
                                        </Form.Group>
                                    </div>
                                    <div class="mb-3 ps-1 form-check">
                                        <Form.Group className="p-0" controlId="SignUpCheckboxIAgreeTerms">
                                            <Form.Check type="checkbox" label="I have READ and agree to terms & conditions" />
                                        </Form.Group>
                                    </div>
                                    <div class="mb-3 ps-1 form-check">

                                        <Form.Group className="p-0" controlId="SignUpCheckboxSendUpdates">
                                            <Form.Check type="checkbox" label="Please send me occasional link and updates" />
                                        </Form.Group>
                                    </div>
                                    <button type="submit" class="submit-btn">Sign Up</button>
                                </form>
                                <Row className="px-3 pb-4">
                                    <Col xs={5} className="for-or-col-2-login"></Col>
                                    <Col xs={2} className="text-center pt-3"><h1 className="for-or-text-in-col-2-login">Or</h1></Col>
                                    <Col xs={5} className="for-or-col-2-login"></Col>
                                </Row>
                                <svg class="container" width="248" height="24" viewBox="0 0 248 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                                    <path d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00" />
                                    <path d="M12 22.0003C14.583 22.0003 16.93 21.0118 18.7045 19.4043L15.6095 16.7853C14.5718 17.5745 13.3038 18.0014 12 18.0003C9.39903 18.0003 7.19053 16.3418 6.35853 14.0273L3.09753 16.5398C4.75253 19.7783 8.11353 22.0003 12 22.0003Z" fill="#4CAF50" />
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                                    <path d="M134.246 0H113.754C112.738 0 112 0.738461 112 1.75385V22.2462C112 23.1692 112.831 24 113.754 24H134.246C135.262 24 136 23.2615 136 22.2462V1.75385C136 0.738461 135.169 0 134.246 0ZM119.385 20.3077H115.692V9.23077H119.385V20.3077ZM117.538 7.75385C116.338 7.75385 115.323 6.73846 115.323 5.53846C115.323 4.33846 116.338 3.32308 117.538 3.32308C118.738 3.32308 119.754 4.33846 119.754 5.53846C119.754 6.73846 118.738 7.75385 117.538 7.75385ZM132.308 20.3077H128.615V14.7692C128.615 13.2923 128.246 11.8154 126.769 11.8154C125.292 11.8154 124.923 13.2923 124.923 14.7692V20.3077H121.231V9.23077H124.923V10.5231H125.108C125.569 9.6 126.769 8.86154 128.154 8.86154C131.569 8.86154 132.308 11.0769 132.308 13.8462V20.3077Z" fill="#FBFBFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.47 24V14.706H75.59L76.0568 11.0844H72.4688V8.772C72.4688 7.7232 72.7604 7.008 74.2652 7.008H76.1828V3.768C75.2541 3.66917 74.3207 3.6211 73.3868 3.624C70.622 3.624 68.7296 5.3124 68.7296 8.412V11.0844H65.6V14.706H68.7284V24H57.3248C56.5928 24 56 23.4072 56 22.6752V1.3248C56 0.5928 56.5928 0 57.3248 0H78.6752C79.4072 0 80 0.5928 80 1.3248V22.6752C80 23.4072 79.4072 24 78.6752 24H72.47Z" fill="white" />
                                    <path d="M191.04 0H168.96C168.429 0 168 0.429 168 0.96V23.04C168 23.571 168.429 24 168.96 24H191.04C191.571 24 192 23.571 192 23.04V0.96C192 0.429 191.571 0 191.04 0ZM186.459 8.691C186.468 8.832 186.468 8.979 186.468 9.123C186.468 13.527 183.114 18.6 176.985 18.6C175.095 18.6 173.343 18.051 171.867 17.106C172.137 17.136 172.395 17.148 172.671 17.148C174.231 17.148 175.665 16.62 176.808 15.726C175.344 15.696 174.114 14.736 173.694 13.416C174.207 13.491 174.669 13.491 175.197 13.356C174.443 13.2029 173.766 12.7934 173.279 12.1973C172.793 11.6012 172.528 10.8552 172.53 10.086V10.044C172.971 10.293 173.49 10.446 174.033 10.467C173.577 10.1628 173.202 9.75063 172.943 9.26709C172.684 8.78355 172.548 8.24356 172.548 7.695C172.548 7.074 172.71 6.507 173.001 6.015C173.838 7.04501 174.882 7.88743 176.065 8.4875C177.249 9.08757 178.546 9.43186 179.871 9.498C179.4 7.233 181.092 5.4 183.126 5.4C184.086 5.4 184.95 5.802 185.559 6.45C186.312 6.309 187.032 6.027 187.674 5.649C187.425 6.42 186.903 7.071 186.21 7.482C186.882 7.41 187.53 7.224 188.13 6.963C187.677 7.629 187.11 8.22 186.459 8.691Z" fill="white" />
                                    <path d="M245.429 0H226.571C225.152 0 224 1.15179 224 2.57143V21.4286C224 22.8482 225.152 24 226.571 24H245.429C246.848 24 248 22.8482 248 21.4286V2.57143C248 1.15179 246.848 0 245.429 0ZM238.855 20.5554C238.405 20.6357 238.239 20.3571 238.239 20.1268C238.239 19.8375 238.25 18.3589 238.25 17.1643C238.25 16.3286 237.971 15.7982 237.645 15.5196C239.627 15.3 241.716 15.0268 241.716 11.6036C241.716 10.6286 241.368 10.1411 240.8 9.51429C240.891 9.28393 241.196 8.33571 240.709 7.10357C239.964 6.87321 238.261 8.0625 238.261 8.0625C237.554 7.86429 236.788 7.7625 236.032 7.7625C235.277 7.7625 234.511 7.86429 233.804 8.0625C233.804 8.0625 232.1 6.87321 231.355 7.10357C230.868 8.33036 231.168 9.27857 231.264 9.51429C230.696 10.1411 230.429 10.6286 230.429 11.6036C230.429 15.0107 232.427 15.3 234.409 15.5196C234.152 15.75 233.921 16.1464 233.841 16.7143C233.332 16.9446 232.03 17.3411 231.254 15.9696C230.766 15.1232 229.888 15.0536 229.888 15.0536C229.02 15.0429 229.829 15.6 229.829 15.6C230.407 15.8679 230.814 16.8964 230.814 16.8964C231.334 18.4875 233.82 17.9518 233.82 17.9518C233.82 18.6964 233.83 19.9071 233.83 20.1268C233.83 20.3571 233.67 20.6357 233.214 20.5554C229.679 19.3714 227.204 16.0071 227.204 12.075C227.204 7.15714 230.964 3.42321 235.882 3.42321C240.8 3.42321 244.786 7.15714 244.786 12.075C244.791 16.0071 242.391 19.3768 238.855 20.5554ZM233.6 17.2821C233.498 17.3036 233.402 17.2607 233.391 17.1911C233.38 17.1107 233.45 17.0411 233.552 17.0196C233.654 17.0089 233.75 17.0518 233.761 17.1214C233.777 17.1911 233.707 17.2607 233.6 17.2821ZM233.091 17.2339C233.091 17.3036 233.011 17.3625 232.904 17.3625C232.786 17.3732 232.705 17.3143 232.705 17.2339C232.705 17.1643 232.786 17.1054 232.893 17.1054C232.995 17.0946 233.091 17.1536 233.091 17.2339ZM232.357 17.175C232.336 17.2446 232.229 17.2768 232.137 17.2446C232.036 17.2232 231.966 17.1429 231.988 17.0732C232.009 17.0036 232.116 16.9714 232.207 16.9929C232.314 17.025 232.384 17.1054 232.357 17.175ZM231.698 16.8857C231.65 16.9446 231.548 16.9339 231.468 16.8536C231.387 16.7839 231.366 16.6821 231.42 16.6339C231.468 16.575 231.57 16.5857 231.65 16.6661C231.72 16.7357 231.746 16.8429 231.698 16.8857ZM231.211 16.3982C231.163 16.4304 231.071 16.3982 231.012 16.3179C230.954 16.2375 230.954 16.1464 231.012 16.1089C231.071 16.0607 231.163 16.0982 231.211 16.1786C231.27 16.2589 231.27 16.3554 231.211 16.3982ZM230.863 15.8786C230.814 15.9268 230.734 15.9 230.675 15.8464C230.616 15.7768 230.605 15.6964 230.654 15.6589C230.702 15.6107 230.782 15.6375 230.841 15.6911C230.9 15.7607 230.911 15.8411 230.863 15.8786ZM230.504 15.4821C230.482 15.5304 230.412 15.5411 230.354 15.5036C230.284 15.4714 230.252 15.4125 230.273 15.3643C230.295 15.3321 230.354 15.3161 230.423 15.3429C230.493 15.3804 230.525 15.4393 230.504 15.4821Z" fill="white" />
                                </svg>
                                <Row>
                                    <Col className="text-center pt-4">
                                        <h1 className="text-before-singup">I already have an account, <span className="singup-col-2-login" onClick={() => onClose({ popup: "signup" })}> Log in</span></h1>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>


    );
};

export default SignUpPopUp;