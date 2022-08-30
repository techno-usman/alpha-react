import PresalePhaseDetail from './PresalePhaseDetail';
import { Container, Col, Row } from 'react-bootstrap';

const PresalePhasesDetail = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PresalePhaseDetail progress="100" title="Phase 1" tokens="250000" />
                    <PresalePhaseDetail progress="30" title="Phase 2" tokens="150000" />
                    <PresalePhaseDetail progress="0" title="Phase 3" tokens="150000" />
                </Col>
            </Row>
        </Container>
    );
};

export default PresalePhasesDetail;