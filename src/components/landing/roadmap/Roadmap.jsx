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
                        <RoadmapQuarterBlock label="Q4 2022" listItems={[{
                            name: "Discord server - Launched",
                            status: "completed",
                        }, {
                            name: "Community Grow to 10,000 members",
                            status: "ongoing",
                        }, {
                            name: "Token Smart  Contract",
                            status: "completed",
                        },
                        ]} />
                    </Col>
                    <Col lg={4} className="p-0">
                        <hr className={Classes.roadmapConnectingLines} />
                    </Col>
                    <Col lg={4} className="p-0">
                        <RoadmapQuarterBlock label="Q2 2022" listItems={[{
                            name: "Pre-Sale",
                            status: "ongoing",
                        }, {
                            name: "eam Expansion",
                            status: "completed",
                        }, {
                            name: "NFT Pre-Sale",
                            status: "completed",
                        },
                        ]} />
                    </Col>
                </Row>
                <Row style={{ marginTop: "200px" }} ClassName="flex-row-reverse">
                    <Col lg={4} className="position-relative p-0">
                        <div class={`${Classes.rodmapConnectingVerticalLine} vr`}></div>
                        <RoadmapQuarterBlock label="Q2 2022" listItems={[{
                            name: "User system",
                            status: "ongoing",
                        }, {
                            name: "Daily Task integration",
                            status: "ongoing",
                        }, {
                            name: "Play2Earn system launch",
                            status: "toBeCompleted",
                        },
                        ]} />
                    </Col>
                    <Col lg={4} className="p-0">
                        <hr className={Classes.roadmapConnectingLines} />
                    </Col>
                    <Col lg={4} className="p-0 position-relative">

                        <RoadmapQuarterBlock label="Q5 2022" listItems={[{
                            name: "Referral system",
                            status: "ongoing",
                        }, {
                            name: "Public Sale",
                            status: "toBeCompleted",
                        }, {
                            name: "Staking",
                            status: "toBeCompleted",
                        },
                        ]} />
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
                        <RoadmapQuarterBlock label="Q6 2022" listItems={[{
                            name: "AlphaPlay V2 Token Contract(New Futures, Governance ,Transaction Tax , Voting power )",
                            status: "toBeCompleted",
                        }, {
                            name: "Esports/Betting Smart Contract",
                            status: "toBeCompleted",
                        }, {
                            name: "Online store release",
                            status: "ongoing",
                        }, {
                            name: "AlphaPlay Open World Sandbox Crypto Game",
                            status: "toBeCompleted",
                        }
                        ]} />
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Roadmap;

