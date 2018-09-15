import React from 'react';
import PropTypes from 'prop-types';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert';
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Button from '../../../Components/CustomButtons';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';

import Create from './Create/create.container';

moment.locale('ko', {
  week: {
    dow: 1,
    doy: 1,
  },
});

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

const stateEvents = [
  {
    title: 'All Day Event',
    allDay: true,
    start: new Date(y, m, 1),
    end: new Date(y, m, 1),
    color: 'default',
  },
  {
    title: 'Meeting',
    start: new Date(y, m, d - 1, 10, 30),
    end: new Date(y, m, d - 1, 11, 30),
    allDay: false,
    color: 'green',
  },
  {
    title: 'Meeting',
    start: new Date(y, m, d - 1, 9, 30),
    end: new Date(y, m, d - 1, 12, 30),
    allDay: false,
    color: 'green',
  },
  {
    title: 'Lunch',
    start: new Date(y, m, d + 7, 12, 0),
    end: new Date(y, m, d + 7, 14, 0),
    allDay: false,
    color: 'red',
  },
  {
    title: 'Nud-pro Launch',
    start: new Date(y, m, d - 2),
    end: new Date(y, m, d - 2),
    allDay: true,
    color: 'azure',
  },
  {
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false,
    color: 'azure',
  },
  {
    title: 'Click for Creative Tim',
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: 'orange',
  },
  {
    title: 'Click for Google',
    start: new Date(y, m, 21),
    end: new Date(y, m, 22),
    color: 'rose',
  },
];

class FridgeTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: stateEvents,
      showAlert: false,
      displayCreateModal: false,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  showCreateModal() {
    this.setState({
      displayCreateModal: true,
    });
  }

  hideCreateModal() {
    this.setState({
      displayCreateModal: false,
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

  eventColors(event, start, end, isSelected) {
    let backgroundColor = 'event-';
    event.color
      ? (backgroundColor += event.color)
      : (backgroundColor += 'default');
    return {
      className: backgroundColor,
    };
  }

  render() {
    const { classes } = this.props;
    const { button, success } = classes;
    const {
      showAlert, selectedEvent,
      events, displayCreateModal,
    } = this.state;
    return (
      <div>
        <Create
          visible={displayCreateModal}
          classes={classes}
          close={() => this.hideCreateModal()}
        />
        {showAlert && (
          <SweetAlert
            style={{ display: 'block', marginTop: '-100px' }}
            title={selectedEvent.title}
            onConfirm={() => this.hideAlert()}
            onCancel={() => this.hideAlert()}
            confirmBtnCssClass={`${button} ${success}`}
          />
        )}
        <Button
          color="info"
          className={classes.marginRight}
          onClick={() => this.showCreateModal()}
        >
          New
        </Button>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody calendar>
                <BigCalendar
                  formats={{ dayFormat: 'dd' }}
                  selectable
                  events={events}
                  defaultView="week"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={event => this.selectedEvent(event)}
                  eventPropGetter={this.eventColors}
                  components={{
                    toolbar: () => <h1>TODO: Weekly Fridge Tasks</h1>,
                    day: {
                      header: () => <h1>TODO: Weekly Fridge Tasks</h1>,
                      event: () => <h1>TODO: Weekly Fridge Tasks</h1>,
                    },
                  }}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

FridgeTask.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(FridgeTask);
