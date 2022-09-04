import { Row, Col, Button } from 'react-bootstrap';
import Classes from '../scss/careers/JobCard.module.scss';
const JobCard = (props) => {

    const { title, type, date } = props;

    return (

        <div className={`${Classes.jobCardWrapper} card`}>
            <Row>
                <Col xs={7}>
                    <h5 className={`${Classes.cardHeader} card-header text-white fw-bold`}>{title}</h5>
                    <div className="card-body pt-0">
                        <h5 className="card-title text-white fw-normal">{type}</h5>
                        <p className="card-text text-white">{date}</p>
                    </div>
                </Col>
                <Col className={Classes.applyBtnWrapper}>
                    <Button href="#" className={`${Classes.applyBtn} btn-secondary mt-5 fw-bold`}>Apply Now</Button>

                </Col>
            </Row>
        </div>
    );
};

export default JobCard;
