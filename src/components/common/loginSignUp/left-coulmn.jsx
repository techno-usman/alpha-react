import { Container, Row, Col } from 'react-bootstrap';
import LogoImg from '../../../assets/images/logo.png';
import { ReactComponent as DottedSquareImg } from '../../../assets/svg/dotted-login-page.svg';
import './left-coulmn.css';


const loginSignUpLeftCol = () => {


    return (
        <div className="bg-for-col-1-login">
            <img src={LogoImg} height="128px" width="135px" alt="" />
            <Row>
                <Col className="mt-4 text-end">
                    <DottedSquareImg />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="double-comas-col-1-login">“</h4>
                    <p className="for-text-col-1-login">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At neque tincidunt ac, a odio id arcu scelerisque. Nunc, ullamcorper enim amet donec euismod morbi malesuada quam. Augue massa </p>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <h4 className="for-author-name-col-1-login">Irfan saeed</h4>
                </Col>
                <Col className="text-start">
                    <svg className="for-checkmark-col-1-login" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.94991 3.28324 0.666668 7.33333 0.666668C11.3834 0.666668 14.6667 3.94991 14.6667 8C14.6667 12.0501 11.3834 15.3333 7.33333 15.3333C3.28324 15.3333 0 12.0501 0 8Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8738 5.36198C11.1341 5.62233 11.1341 6.04444 10.8738 6.30479L6.73573 10.6381C6.47538 10.8985 6.05327 10.8985 5.79292 10.6381L3.79292 8.63812C3.53257 8.37777 3.53257 7.95566 3.79292 7.69531C4.05327 7.43497 4.47538 7.43497 4.73573 7.69531L6.26432 9.22391L9.93099 5.36198C10.1913 5.10163 10.6134 5.10163 10.8738 5.36198Z" fill="#FC00FF" />
                    </svg>
                </Col>
            </Row>
            <Row className="pt-4">
                <Col className="text-end">
                    <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
                    </svg>
                </Col>
            </Row>
        </div>
    );
};

export default loginSignUpLeftCol;