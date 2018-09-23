import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Assignment from "@material-ui/icons/Assignment";

import GridContainer from '../../../Components/Grid/GridContainer';
import Card from '../../../Components/Card/Card';
import GridItem from '../../../Components/Grid/GridItem';
import CardBody from '../../../Components/Card/CardBody';
import Button from '../../../Components/CustomButtons';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Table from '../../../Components/Table';

import style from '../../../Assets/Jss/extendedTablesStyle';

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes, } = this.props;
    const simpleButtons = [
        { color: 'success', icon: Open, tooltip: 'Edit' },
        { color: 'danger', icon: Delete, tooltip: 'Delete' },
      ].map((prop, key) => {
        return (
          <Tooltip
            id="tooltip-top"
            title={prop.tooltip}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color={prop.color}
              className={classes.actionButton}
              key={key}
            >
              <prop.icon className={classes.icon} />
            </Button>
          </Tooltip>
        );
      });
    return (
    <GridContainer>
        <Card>
        <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
          </CardHeader>          
            <GridItem xs={12} sm={12} md={12}>            
                <Button
                        color="info"
                        className={classes.marginRight}
                    >
                    New
                </Button>
            </GridItem>
            <CardBody>
                <Table
                    hover
                    tableHead={[
                        'Training Name',
                        'From Date',
                        'To Date',                                        
                        'Certification',
                        'Detail',
                        'Actions',
                    ]}
                    tableData={[
                        ["dwa", "08/01/2018", "08/01/2018", "Link to Cert", "sick", simpleButtons],
                    ]}
                    customCellClasses={[
                        classes.left,
                        classes.left,
                        classes.right,
                    ]}
                    customClassesForCells={[0, 1, 2]}
                    customHeadCellClasses={[
                        classes.left,
                        classes.left,
                        classes.right,
                    ]}
                    customHeadClassesForCells={[0, 1, 2]}
                />
            </CardBody>
        </Card>
    </GridContainer>
    );
  }
}

export default withStyles(style)(Training);