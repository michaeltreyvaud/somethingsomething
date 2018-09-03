import React from 'react';
// react component for creating dynamic tables
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
// core components
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Button from '../../Components/CustomButtons';
import Card from '../../Components/Card/Card';
import CardBody from '../../Components/Card/CardBody';
import NavPills from '../../Components/NavPills';
import Table from '../../Components/Table';

import style from '../../Assets/Jss/style';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
// ##############################
// // // data for populating the calendar in Calendar view
// #############################

const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

const events = [
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

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events,
      alert: null,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  selectedEvent(event) {
    alert(event.title);
  }

  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: 'block', marginTop: '-100px' }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
              `${this.props.classes.button} ${this.props.classes.success}`
            }
          cancelBtnCssClass={
              `${this.props.classes.button} ${this.props.classes.danger}`
            }
        />
      ),
    });
  }

  addNewEvent(e, slotInfo) {
    const newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
    });
    this.setState({
      alert: null,
      events: newEvents,
    });
  }

  hideAlert() {
    this.setState({
      alert: null,
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
    const { simpleSelect } = this.state;
    const simpleButtons = [
      { color: 'warning', icon: Print },
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
    ].map((prop, key) => (
      <Button
        color={prop.color}        
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    ));
    return (
      <div>
        <Button color="info" className={classes.marginRight} onClick={() => this.props.history.push('/dashboard/checklist/create')}>
        New
        </Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <NavPills
                  color="warning"
                  tabs={[
                    {
                      tabButton: 'Check List',
                      tabContent: (
                        <Table
                          tableHead={[
                            'ID',
                            'Location',
                            'Description',
                            'Owner',
                            'Status',
                            'Actions',
                          ]}
                          tableData={[
                            [
                              '1',
                              'Location 1',
                              'Description 1',
                              'Owner',
                              'Status',
                              simpleButtons,
                            ],
                          ]}
                          customCellClasses={[
                            classes.center,
                            classes.right,
                            classes.right,
                          ]}
                          customClassesForCells={[0, 4, 5]}
                          customHeadCellClasses={[
                            classes.center,
                            classes.right,
                            classes.right,
                          ]}
                          customHeadClassesForCells={[0, 4, 5]}
                        />
                      ),
                    },
                    {
                      tabButton: 'Task',
                      tabContent: (
                        <BigCalendar
                          selectable
                          events={this.state.events}
                          defaultView="month"
                          scrollToTime={new Date(1970, 1, 1, 6)}
                          defaultDate={new Date()}
                          onSelectEvent={event => this.selectedEvent(event)}
                          onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                          eventPropGetter={this.eventColors}
                        />
                      ),
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(CheckList);
