import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
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
import extendedTablesStyle from '../../Assets/Jss/extendedTablesStyle';

class ColdHotTransportLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
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
        <Button color="info" className={classes.marginRight}>
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
                    'ID',
                    'Item',
                    'Number',
                    'Departure Area',
                    'Departure Operator',
                    'Departure Time',
                    'Departure Temperature',
                    'Status',
                    'Arrival Area',
                    'Arrival Operator',
                    'Arrival Time',
                    'Arrival Temperature',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      '1',
                      'Chicken',
                      '123',
                      'Trans Test',
                      'Bob Boson',
                      '07/22/2018 19:14:00',
                      '3',
                      'Accept',
                      'Trans Test',
                      'Bob Boson',
                      '07/22/2018 19:16:00',
                      '3',
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

export default withStyles(extendedTablesStyle, style)(ColdHotTransportLog);
