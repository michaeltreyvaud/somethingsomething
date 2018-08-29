import React from 'react';
import ReactTable from 'react-table';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from "@material-ui/icons/Assignment";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from "../../../Components/CustomButtons";
import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';
import Open from '@material-ui/icons/OpenInNew';
import CustomInput from '../../../Components/CustomInput';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';

import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const dataTable = {
  headerRow: ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
  footerRow: ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
  dataRows: [
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
    ['Full Name', 'Email', 'Digit Code', 'Phone', 'Position', 'Team', 'Authorisation', 'Last Login', 'Status'],
  ],
};

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      data: dataTable.dataRows.map((prop, key) => ({
        id: key,
        fullname: prop[0],
        email: prop[1],
        digitcode: prop[2],
        phone: prop[3],
        position: prop[4],
        team: prop[5],
        authorisation: prop[6],
        lastlogin: prop[7],
        status: prop[8],
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
              color="success"
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
    this.handleTags = this.handleTags.bind(this);
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

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleTags(regularTags) {
    this.setState({ tags: regularTags });
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
          <h4 className={classes.modalTitle}>Create New User</h4>
        </DialogTitle>
        <DialogContent
          id="notice-modal-slide-description"
          className={classes.modalBody}
        >
          <ImageUpload
            avatar
            addButtonProps={{
              color: 'rose',
              round: true,
            }}
            changeButtonProps={{
              color: 'rose',
              round: true,
            }}
            removeButtonProps={{
              color: 'danger',
              round: true,
            }}
          />
          <CustomInput
            labelText="First Name"
            id="firstName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
            }}
          />
          <CustomInput
            labelText="Last Name"
            id="lastName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
            }}
          />
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'email',
            }}
          />
          <CustomInput
            labelText="Code"
            id="code"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'number',
            }}
          />
          <CustomInput
            labelText="Phone Number"
            id="phoneNo"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'phone',
            }}
          />
          <CustomInput
            labelText="Position"
            id="position"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
            }}
          />
          <CustomInput
            labelText="Team"
            id="team"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'drop down menu',
            }}
          />
          <CustomInput
            labelText="Authorisation"
            id="authorisation"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'drop down menu',
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
      <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="primary" icon>
                <CardIcon color="primary">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Records</h4>
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={this.state.data}
                  filterable
                  columns={[
                    {
                      Header: "ID",
                      accessor: "id"
                    },
                    {
                      Header: "Full Name",
                      accessor: "fullname"
                    },
                    {
                      Header: "Email",
                      accessor: "email"
                    },
                    {
                      Header: "Digit Code",
                      accessor: "digitcode",
                    },
                    {
                      Header: "Phone",
                      accessor: "phone",
                    },
                    {
                      Header: "Position",
                      accessor: "position",
                    },
                    {
                      Header: "Team",
                      accessor: "team",
                    },
                    {
                      Header: "Authorisation",
                      accessor: "authorisation",
                    },
                    {
                      Header: "Last Login",
                      accessor: "lastlogin",
                    },
                    {
                      Header: "Status",
                      accessor: "status",
                    },
                    {
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false
                    }
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(Users);
