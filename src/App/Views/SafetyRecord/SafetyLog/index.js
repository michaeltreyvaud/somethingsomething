import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from "@material-ui/icons/Assignment";

import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from "../../../Components/CustomButtons";
import CustomDropdown from '../../../Components/CustomDropdown';
import Table from '../../../Components/Table';

import extendedTablesStyle from '../../../Assets/Jss/extendedTablesStyle';

class SafetyLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",      
    };
    this.handleTags = this.handleTags.bind(this);
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
  const simpleButtons = [
    { color: 'warning', icon: Print },
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
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Records</h4>
            </CardHeader>
            <CardBody>
            <Table
                  tableHead={[
                    'ID',
                    'Location',
                    'Operator',
                    'Category',
                    'Date/Time',
                    'Captured Image',
                    'Comments',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      '1',
                      'Location 1',
                      'Operator 1',
                      'Category 1',
                      'Date/Time 1',
                      'Captured Image 1',
                      'Comments 1',
                      simpleButtons,
                    ],
                    [
                      '2',
                      'Location 2',
                      'Operator 2',
                      'Category 2',
                      'Date/Time 2',
                      'Captured Image 2',
                      'Comments 2',
                      simpleButtons,
                    ],
                    [
                      '3',
                      'Location 3',
                      'Operator 3',
                      'Category 3',
                      'Date/Time 3',
                      'Captured Image 3',
                      'Comments 3',
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
};

export default withStyles(extendedTablesStyle)(SafetyLog);
