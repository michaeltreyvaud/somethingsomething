import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';

import Open from '@material-ui/icons/OpenInNew';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';

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
      { color: 'success', icon: Open },
      { color: 'success', icon: Edit },
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
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
        <Button color="info" className={classes.marginRight}>
        New
        </Button>
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
                    'ID',
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
                      '1',
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
