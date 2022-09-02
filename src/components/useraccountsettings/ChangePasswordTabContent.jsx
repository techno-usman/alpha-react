import Classes from '../scss/useraccountsettings/ChangePasswordTabContent.module.scss';
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const ChangePasswordTabContent = () => {
    return (
        <Container className={`${Classes.changePasswordContent}`}>
            <Row className={`${Classes.bgRowProfileAccount} p-4`}>
                <Col xs={4} className="p-0">
                    <h1 className={`${Classes.forHeadingProfile} pt-1`}>Change Password</h1>
                </Col>
                <Col xs={8} className="p-0">
                    <form className="pt-3">
                        <div class="mb-4">
                            <Form.Group className="mb-3" controlId="ChangePasswordTabOldPassword">
                                <Form.Label className={Classes.inputLabel}>Current Password</Form.Label>
                                <Form.Control className={Classes.inputField} type="text" placeholder="************" />
                            </Form.Group>
                        </div>
                        <div class="mb-4">
                            <Form.Group className="mb-3" controlId="ChangePasswordTabNewPassword">
                                <Form.Label className={Classes.inputLabel}>New Password</Form.Label>
                                <Form.Control className={Classes.inputField} type="text" placeholder="************" />
                            </Form.Group>
                        </div>
                        <div class="mb-4">
                            <Form.Group className="mb-3" controlId="ChangePasswordTabConfirmPassword">
                                <Form.Label className={Classes.inputLabel}>Confirm Password</Form.Label>
                                <Form.Control className={Classes.inputField} type="text" placeholder="************" />
                            </Form.Group>
                        </div>
                        <div class="mb-4">
                            <Button className={Classes.btnForEdit}>Edit</Button>
                            <Button className={Classes.btnForSubmit}>Change password</Button>
                        </div>

                    </form>
                </Col>
            </Row>
        </Container >
    );
};

export default ChangePasswordTabContent;