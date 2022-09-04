import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import ProfileBasicInfoTabContent from '../../components/useraccountsettings/ProfileBasicInfoTabContent';
import PersonalDetailsTabContent from '../../components/useraccountsettings/PersonalDetailsTabContent';
import ChangePasswordTabContent from '../../components/useraccountsettings/ChangePasswordTabContent';
import SettingsTabContent from '../../components/useraccountsettings/SettingTabContent';
import './UserAccountSettings.css';

const UserAccountSettings = () => {
    return (

        <Container fluid className="UserAccountSettingsContainer">
            <Row className="justify-content-center">
                <Col xs="7" className="col-7 for-row-account text-start">
                    <h1 className="for-heading-in-account">Account</h1>
                    <Tabs defaultActiveKey="profile" className="mb-3">
                        <Tab eventKey="profile" title="Profile">
                            <ProfileBasicInfoTabContent />
                        </Tab>
                        <Tab eventKey="personal-details" title="Personal Details">
                            <PersonalDetailsTabContent />
                        </Tab>
                        <Tab eventKey="change-password" title="Change Password">
                            <ChangePasswordTabContent />
                        </Tab>
                        <Tab eventKey="settings" title="Settings">
                            <SettingsTabContent />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
};

export default UserAccountSettings;