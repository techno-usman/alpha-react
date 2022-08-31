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
                <Row style={{ marginTop: "7rem" }}>
                    <Col lg={4} className="p-0">
                        <RoadmapQuarterBlock />
                    </Col>
                    <Col lg={4} className="p-0">
                        <hr className={Classes.roadmapConnectingLines} />
                    </Col>
                    <Col lg={4} className="p-0">
                        <RoadmapQuarterBlock />
                    </Col>
                </Row>
                <Row style={{ marginTop: "200px" }}>
                    <Col lg={4} className="p-0">
                        <RoadmapQuarterBlock />
                    </Col>
                    <Col lg={4} className="p-0">
                        <hr className={Classes.roadmapConnectingLines} />
                    </Col>
                    <Col lg={4} className="p-0 position-relative">
                        <div class={`${Classes.rodmapConnectingVerticalLine} vr`}></div>
                        <RoadmapQuarterBlock />
                    </Col>
                </Row>
                <Row style={{ marginTop: "200px" }} className={Classes.roadmapZigZagConnector}>
                    <Col lg={4} className="position-relative p-0">
                        <div class={`${Classes.rodmapConnectingVerticalLine + ' ' + Classes.upperVerticalLine} vr`}></div>
                    </Col>
                    <Col lg={4} className="position-relative p-0">
                        <hr className={Classes.roadmapConnectingLines} />
                    </Col>
                    <Col lg={4} className="position-relative p-0">
                        <div class={`${Classes.rodmapConnectingVerticalLine + ' ' + Classes.lowerVerticalLine} vr`}></div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <RoadmapQuarterBlock />
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Roadmap;

