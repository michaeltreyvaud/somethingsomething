import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';
// core components
import { cardTitle } from '../../../Assets/Jss/material-dashboard-pro-react';
import CardHeader from '../../../Components/Card/CardHeader';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Button from '../../../Components/CustomButtons';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';
import NavPills from '../../../Components/NavPills';
import buttonStyle from './style';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
};

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

const dataTable = {
  headerRow: ['Location', 'Description', 'Owner', 'Status', 'Actions'],
  footerRow: ['Location', 'Description', 'Owner', 'Status', 'Actions'],
  dataRows: [
    ['Location', 'Description', 'Owner', 'Status'],
    ['Location 2', 'Description 2', 'Owner 2', 'Status 2'],
    ['Location 3', 'Description 3', 'Owner 3', 'Status 3'],
    ['Location 4', 'Description 4', 'Owner 4', 'Status 4'],
    ['Location 5', 'Description 5', 'Owner 5', 'Status 5'],
    ['Location 6', 'Description 6', 'Owner 6', 'Status 6'],
    ['Location 7', 'Description 7', 'Owner 7', 'Status 7'],
    ['Location 8', 'Description 8', 'Owner 8', 'Status 8'],
  ],
};

class SafetyTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events,
      alert: null,
      data: dataTable.dataRows.map((prop, key) => ({
        id: key,
        location: prop[0],
        description: prop[1],
        owner: prop[2],
        status: prop[3],
        actions: (
        // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                const obj = this.state.data.find(o => o.id === key);
                alert(
                  `You've clicked EDIT button on \n{ \nName: ${
                    obj.name
                  }, \nposition: ${
                    obj.position
                  }, \noffice: ${
                    obj.office
                  }, \nage: ${
                    obj.age
                  }\n}.`,
                );
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{' '}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                const data = this.state.data;
                data.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    data.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                this.setState({ data });
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{' '}
          </div>
        ),
      })),
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
    return (
      <div>
        <Button color="info" className={classes.marginRight}>
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
                      tabButton: 'Safety Records',
                      tabContent: (
                        <ReactTable
                          data={this.state.data}
                          filterable
                          columns={[
                            {
                              Header: 'ID',
                              accessor: 'id',
                            },
                            {
                              Header: 'Location',
                              accessor: 'location',
                            },
                            {
                              Header: 'Description',
                              accessor: 'description',
                            },
                            {
                              Header: 'Owner',
                              accessor: 'owner',
                            },
                            {
                              Header: 'Status',
                              accessor: 'status',
                            },
                            {
                              Header: 'Actions',
                              accessor: 'actions',
                              sortable: false,
                              filterable: false,
                            },
                          ]}
                          defaultPageSize={10}
                          showPaginationTop
                          showPaginationBottom={false}
                          className="-striped -highlight"
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

export default withStyles(styles)(SafetyTask);
