import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import SweetAlert from 'react-bootstrap-sweetalert';
import Assignment from '@material-ui/icons/Assignment';

// core components
import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Card from '../../Components/Card/Card';
import CardBody from '../../Components/Card/CardBody';
import CardHeader from '../../Components/Card/CardHeader';
import CardIcon from '../../Components/Card/CardIcon';
import Button from '../../Components/CustomButtons';
import Table from '../../Components/Table';
import CustomDropdown from '../../Components/CustomDropdown';

import style from '../../Assets/Jss/style';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.successDelete = this.successDelete.bind(this);
    this.cancelDetele = this.cancelDetele.bind(this);
    this.warningWithConfirmMessage = this.warningWithConfirmMessage.bind(this);
  }
  warningWithConfirmMessage() {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
        </SweetAlert>
      )
    });
  }

  successDelete() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Your imaginary file has been deleted.
        </SweetAlert>
      )
    });
  }

  cancelDetele() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Your imaginary file is safe :)
        </SweetAlert>
      )
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    const { classes } = this.props;
    const simpleButtons = [
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
    ].map((prop, key) => (
      <Button
        color={prop.color}        
        className={classes.actionButton}
        key={key}
        onClick={this.warningWithConfirmMessage}
      >
        <prop.icon className={classes.icon} />
      </Button>
    ));
    return (
      <div>
        <Button color="info" className={classes.marginRight} onClick={() => this.props.history.push('/dashboard/pest/create')}>
        New
        </Button>
        <CustomDropdown
          hoverColor="black"
          buttonText="Export"
          buttonProps={{
            minHeight: 'auto',
            minWidth: 'auto',            
            style: { marginBottom: '0', float: 'right', },
            color: 'warning',
          }}
          dropdownHeader="Actions"
          dropdownList={[
            'Export CSV',
            'Export PDF',
            'Email',
          ]}
        />        
        {this.state.alert}
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    'Operator',
                    'Date/Time',
                    'Title',
                    'File',
                    'Update Time',
                  ]}
                  tableData={[
                    [
                      'Bob Boson',
                      '07/22/2018 19:09:06',
                      'Title Goes Here',
                      'LINK TO FILE',
                      '07/22/2018 19:09:06',
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

export default withStyles(style)(Service);
