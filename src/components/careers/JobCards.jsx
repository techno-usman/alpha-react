import { Container, Row, Col } from 'react-bootstrap';
import JobCard from './JobCard';

const JobCards = () => {

    const jobs = [{
        title: "Social Media Manager",
        type: "Remote",
        date: "May 7, 2022"
    }, {
        title: "Senior Web Developer",
        type: "Remote",
        date: "May 7, 2022"
    }, {
        title: "Graphic Designer",
        type: "Remote",
        date: "May 6, 2022"
    }, {
        title: "Server Engineer",
        type: "Remote",
        date: "May 5, 2022"
    }, {
        title: "Solidity Engineer",
        type: "Remote",
        date: "May 5, 2022"
    }, {
        title: "Web Developer",
        type: "Remote",
        date: "May 3, 2022"
    }];

    const jobsList = jobs.map((job) => (
        <Col md={6} className="text-start pt-5">
            <JobCard title={job.title} type={job.type} date={job.date} />
        </Col>
    ));

    return (

        <Row>
            {jobsList}
        </Row>
    );
};

export default JobCards;
