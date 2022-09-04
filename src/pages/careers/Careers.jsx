import Header from '../../layout/Header/Header';
import BreadCrumb from '../../components/common/BreadCrumb';
import Footer from '../../layout/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import JobCards from '../../components/careers/JobCards';

const CareersPage = () => {
    return (
        <>
            <Header />
            <main style={{ marginTop: "120px" }}>
                <BreadCrumb />

                <Container>
                    <Row>
                        <Col className="text-center pt-5">
                            <h1 className="fw-bold text-white">We're hiring!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <JobCards />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default CareersPage;