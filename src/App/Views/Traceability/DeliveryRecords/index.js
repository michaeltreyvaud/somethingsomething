import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';

import Open from '@material-ui/icons/OpenInNew';
import Close from '@material-ui/icons/Close';
import FileCopy from '@material-ui/icons/FileCopy';
import NoteAdd from '@material-ui/icons/NoteAdd';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';
import CustomDropdown from '../../../Components/CustomDropdown';

import style from '../../../Assets/Jss/style';
import extendedTablesStyle from '../../../Assets/Jss/extendedTablesStyle';

class DeliveryRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    const simpleButtons = [
      { color: 'success', icon: Open, tooltip: 'Edit' },
      { color: 'warning', icon: FileCopy, tooltip: 'Copy' },
      { color: 'primary', icon: NoteAdd, tooltip: 'Add Label' },
      { color: 'danger', icon: Close, tooltip: 'Delete' },
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
        <Button color="info" className={classes.marginRight} onClick={() => this.props.history.push('/dashboard/delivery/create')}>
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
                    'Good Type',
                    'Delivery/Order #',
                    'Suppliers List',
                    'Status',
                    'Operator',
                    'Accept Time',
                    'Log Time',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      'Fresh Goods, Frozen Goods',
                      '1337',
                      'Supplier',
                      'Accept',
                      'Bob Boson',
                      '07/22/2018 19:14:00',
                      '07/22/2018 19:14:00',
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

export default withStyles(extendedTablesStyle, style)(DeliveryRecords);
