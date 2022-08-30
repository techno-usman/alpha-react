import Classes from '../../scss/Roadmap.module.scss';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { ReactComponent as TickInsideCircle } from '../../../assets/svg/tick-inside-circle-icon.svg';
import RoadmapQuarterBlock from './RoadmapQuarterBlock';

const Roadmap = () => {
    return (
        <div className={Classes.roadMapWrapper}>
            <Container>
                <Row>
                    <Col>
                        <div className={Classes.roadMapHeadingContainer}>
                            <h2 className={Classes.roadMapTitle}>Road Map</h2>
                            <ListGroup className={`${Classes.roadMapStatusesList}`} >
                                <ListGroup.Item><TickInsideCircle stroke="#4EC040" className="me-3" /> Completed</ListGroup.Item>
                                <ListGroup.Item><TickInsideCircle stroke="#4763F4" className="me-3" />Ongoing</ListGroup.Item>
                                <ListGroup.Item><TickInsideCircle stroke="#D4D4D4" className="me-3" />To Be Completed</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <RoadmapQuarterBlock />
                </Row>
            </Container>
        </div>
    );
};

export default Roadmap;

