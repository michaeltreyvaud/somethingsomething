import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert';

import withStyles from '@material-ui/core/styles/withStyles';
import Today from '@material-ui/icons/Today';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Button from '../../../Components/CustomButtons';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';
import LoadingTable from '../../../Components/Loading/LoadingTable';

//  Hard code dates to lock the days that show up in the calendar
const year = 2018;
const month = 9;
const weekStart = 7;
const days = {
  SUNDAY: 7,
  MONDAY: 8,
  TUESDAY: 9,
  WEDNESDAY: 10,
  THURSDAY: 11,
  FRIDAY: 12,
  SATURDAY: 13,
};

const parseStartEnd = (task) => {
  let start;
  let end;
  switch (task.time) {
    case 'MORNING': {
      start = new Date(year, month, days[task.day], 6, 0);
      end = new Date(year, month, days[task.day], 11, 50);
      break;
    }
    case 'AFTERNOON': {
      start = new Date(year, month, days[task.day], 12, 0);
      end = new Date(year, month, days[task.day], 17, 50);
      break;
    }
    case 'EVENING': {
      start = new Date(year, month, days[task.day], 18, 0);
      end = new Date(year, month, days[task.day], 23, 50);
      break;
    }
    case 'NIGHT': {
      start = new Date(year, month, days[task.day], 0, 0);
      end = new Date(year, month, days[task.day], 5, 50);
      break;
    }
    default: {
      break;
    }
  }
  return {
    start,
    end,
  };
};

class FridgeTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      showAlert: false,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  componentDidMount() {
    const { listFridgeTasks } = this.props;
    listFridgeTasks();
  }

  componentWillReceiveProps(nextProps) {
    const { items } = nextProps;
    const events = items.map((task) => {
      const times = parseStartEnd(task);
      const event = {
        title: task.description,
        start: times.start,
        end: times.end,
        //  TODO - add this somewhere
        color: 'azure',
      };
      return event;
    });
    this.setState({
      events,
    });
  }

  selectedEvent(event) {
    this.setState({
      showAlert: true,
      selectedEvent: event,
    });
  }

  hideAlert() {
    this.setState({
      showAlert: false,
    });
  }

  render() {
    const {
      classes, items, loading, history,
    } = this.props;
    const { button, success } = classes;
    const {
      showAlert, selectedEvent, events,
    } = this.state;
    return (
      <div>
        {showAlert && (
          <SweetAlert
            style={{ display: 'block', marginTop: '-100px' }}
            title={selectedEvent.title}
            onConfirm={() => this.hideAlert()}
            onCancel={() => this.hideAlert()}
            confirmBtnCssClass={`${button} ${success}`}
          />
        )}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
                <Button color="info" className={classes.marginRight} onClick={() => history.push('/dashboard/fridge/task/create')}>
                  Create
                </Button>
              </CardHeader>
              <CardBody calendar>
                {!loading && (
                <BigCalendar
                  formats={{ dayFormat: 'dddd' }}
                  events={events}
                  selectable
                  localizer={BigCalendar.momentLocalizer(moment)}
                  defaultView={BigCalendar.Views.WEEK}
                  scrollToTime={new Date(year, month, weekStart)}
                  defaultDate={new Date(year, month, weekStart)}
                  onSelectEvent={event => this.selectedEvent(event)}
                  eventPropGetter={(event, start, end, isSelected) => {
                    let backgroundColor = 'event-';
                    event.color ? (backgroundColor += event.color) : (backgroundColor += 'default');
                    return { className: backgroundColor };
                  }}
                  components={{
                    toolbar: () => null,
                    timeGutter: () => null,
                  }}
                />
                )}
                <LoadingTable visible={loading} color="red" />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

FridgeTask.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  listFridgeTasks: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(FridgeTask);
