import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ProfilePic from '../../assets/images/profile-pic.png';
import Classes from '../scss/useraccountsettings/ProfileBasicInfoTabContent.module.scss'



const ProfileBasicInfoTabContent = () => {
    return (
        <Container className={Classes.profileBasicTabContent}>
            <Row className={`${Classes.bgRowProfileAccount} p-4`}>
                <Col xs={3} className="p-0">
                    <h2 className={`${Classes.forHeadingProfile} pt-1`}>Basic Details</h2>
                </Col>
                <Col xs={8} className="p-0">
                    <form className="pt-3">
                        <div className="mb-4">
                            <Form.Group controlId="profilePic" className="mb-3">
                                <Form.Label className={`${Classes.cursorPointer} d-flex justify-content-start align-items-center`}>
                                    <img src={ProfilePic} className="mb-2" />
                                    <div className="ps-3">Change Profile Picture</div>
                                </Form.Label>
                                <Form.Control type="file" style={{ display: "none" }} />
                            </Form.Group>
                        </div>
                        <div className="mb-4 position-relative">
                            <Form.Group className="mb-3" controlId="ProfileTabInputfirstname">
                                <Form.Label className={Classes.inputLabel}>Full Name</Form.Label>
                                <Form.Control className={Classes.inputField} type="text" placeholder="Enter Full Name" />
                            </Form.Group>
                            <a href="#" className={`${Classes.inputLinkInline} pt-4`}>Save</a>
                        </div>

                        <div className="mb-4 position-relative">
                            <Form.Group className="mb-3" controlId="ProfileTabInputfirstname">
                                <Form.Label className={Classes.inputLabel}>Email Address</Form.Label>
                                <Form.Control className={Classes.inputField} type="email" placeholder="Enter Email Address" />
                            </Form.Group>
                            <a href="#" className={`${Classes.inputLinkInline} pt-4`}>Edit</a>
                        </div>
                    </form>
                </Col>
            </Row>

            <Row className={`${Classes.bgRowProfileAccount} p-4`}>
                <Col xs={3} className="p-0">
                    <h1 className={`${Classes.forHeadingProfile} pt-1`}>Delete Account</h1>
                </Col>
                <Col xs={8} className="ps-5 p-0">
                    <label className={`${Classes.formLabelProfile} mt-1 pt-2 pe-5`}>Delete your account and all of your source data. This is irreversible</label>
                    <Button className={Classes.forDeleteBtn}>Delete Account</Button>
                </Col>
            </Row>

        </Container>
    );
};

export default ProfileBasicInfoTabContent;