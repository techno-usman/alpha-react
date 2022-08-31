import { ListGroup } from 'react-bootstrap';
import Classes from '../../scss/RoadmapQuarterBlock.module.scss';
import { ReactComponent as TickInsideCircle } from '../../../assets/svg/tick-inside-circle-icon.svg';

const RoadmapQuarterBlock = (props) => {

    const { label = '', listItems = [] } = props;

    const statusList =
    {
        completed: "#4EC040",
        ongoing: "#4763F4",
        toBeCompleted: "#D4D4D4",
    };

    return (
        <div className={Classes.RoadmapQuarterBlockWrapper + ' ' + Classes.gradientBox}>
            <ListGroup className={`${Classes.roadmapQuarterBlockList}`} >
                {
                    listItems.map((item, index) =>
                        <ListGroup.Item><TickInsideCircle stroke={statusList[item.status]} className="me-3" /> {item.name}</ListGroup.Item>
                    )
                }

            </ListGroup>
            <div className={Classes.quarterBoxHeading}>
                {label}
            </div>
        </div>
    );
};

export default RoadmapQuarterBlock;