import React from 'react';
// react component for creating dynamic tables
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SweetAlert from 'react-bootstrap-sweetalert';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import CustomInput from '../../../Components/CustomInput';

// core components
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Button from '../../../Components/CustomButtons';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';

moment.locale('ko', {
  week: {
      dow: 1,
      doy: 1,
  },
});

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
// ##############################
// // // data for populating the calendar in Calendar view
// #############################

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

let formats = {



}

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
      events: events,
      alert: null,
      show: false
    };
    this.hideAlert = this.hideAlert.bind(this);
  }

  handleClickOpen(modal) {
    const x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    const x = [];
    x[modal] = false;
    this.setState(x);
  }

  selectedEvent(event) {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title={event.title}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        />
      )
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
        <Button color="info" className={classes.marginRight} onClick={() => this.handleClickOpen('noticeModal')}>
      New
        </Button>
        <Dialog
          classes={{
            root: `${classes.center} ${classes.modalRoot}`,
            paper: classes.modal,
          }}
          open={this.state.noticeModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose('noticeModal')}
          aria-labelledby="notice-modal-slide-title"
          aria-describedby="notice-modal-slide-description"
        >
          <DialogTitle
            id="notice-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              justIcon
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={() => this.handleClose('noticeModal')}
            >
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Fridge Task</h4>
          </DialogTitle>
          <DialogContent
            id="notice-modal-slide-description"
            className={classes.modalBody}
          >
            <FormControl
              fullWidth
              className={classes.selectFormControl}
            >
              <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
            Location
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={this.state.simpleSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: 'simpleSelect',
                  id: 'simple-select',
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                >
              Location 1
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
              Location 2
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
              Location 3
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              className={classes.selectFormControl}
            >
              <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
            Teams
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={this.state.simpleSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: 'simpleSelect',
                  id: 'simple-select',
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                >
              Teams 1
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
              Teams 2
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
              Teams 3
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              className={classes.selectFormControl}
            >
              <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
            Operator
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={this.state.simpleSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: 'simpleSelect',
                  id: 'simple-select',
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                >
              Operator 1
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
              Operator 2
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
              Operator 3
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              className={classes.selectFormControl}
            >
              <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
            Day
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={this.state.simpleSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: 'simpleSelect',
                  id: 'simple-select',
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                >
              Monday
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
              Tuesday
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
              Wednesday
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                Thursday
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                Friday
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                Saturday
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                Sunday
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              className={classes.selectFormControl}
            >
              <InputLabel
                htmlFor="simple-select"
                className={classes.selectLabel}
              >
            Time
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={this.state.simpleSelect}
                onChange={this.handleSimple}
                inputProps={{
                  name: 'simpleSelect',
                  id: 'simple-select',
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                >
              Morning
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
              Afternoon
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
              Evening
                </MenuItem>
              </Select>
            </FormControl>
            <CustomInput
              labelText="Description"
              id="description"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                multiline: true,
                rows: 3,
              }}
            />
          </DialogContent>
          <DialogActions
            className={
        `${classes.modalFooter
        } ${
          classes.modalFooterCenter}`
      }
          >
            <Button
              onClick={() => this.handleClose('noticeModal')}
              color="info"
              round
            >
        Save
            </Button>
          </DialogActions>
        </Dialog>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody calendar>
                <BigCalendar
                  formats={formats}
                  selectable
                  events={this.state.events}
                  defaultView="week"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={event => this.selectedEvent(event)}
                  eventPropGetter={this.eventColors}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(FridgeTask);
