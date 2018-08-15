import React from 'react';

// @material-ui/icons
import PermIdentity from '@material-ui/icons/PermIdentity';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

// core components
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';
import CustomInput from '../../../Components/CustomInput';

import extendedFormsStyle from '../../../Assets/Jss/extendedTablesStyle';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

  render() {
    const { classes } = this.props;
    const simpleButtons = [
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
    ].map((prop, key) => (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    ));
    return (
      <div>
        <Button
          color="info"
          className={classes.marginRight}
          onClick={() => this.handleClickOpen('noticeModal')}
        >
          Add
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
            <h4 className={classes.modalTitle}>Medical Log</h4>
          </DialogTitle>
          <DialogContent
            id="notice-modal-slide-description"
            className={classes.modalBody}
          >
            <CustomInput
              labelText="Team Name"
              id="teamName"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
              }}
            />
            <CustomInput
              labelText="Team Color"
              id="teamColor"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
              }}
            />
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <PermIdentity />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    'ID',
                    'Name',
                    'Description',
                    'Team Color',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      '1',
                      'Kitchen',
                      'Kitchen Staff',
                      'Red',
                      simpleButtons,
                    ],
                    [
                      '2',
                      'Bar',
                      'Bar Staff',
                      'Blue',
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
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(Teams);
