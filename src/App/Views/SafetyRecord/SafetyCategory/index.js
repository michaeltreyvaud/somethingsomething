import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from "../../../Components/CustomButtons";
import { cardTitle } from '../../../Assets/Jss/material-dashboard-pro-react.js';

const dataTable = {
  headerRow: ['Category', 'Actions'],
  footerRow: ['Category', 'Actions'],
  dataRows: [
    ['Category', 'Status'],
    ['Category 2', 'Status 2'],
    ['Category 3', 'Status 3'],
    ['Category 4', 'Status 4'],
    ['Category 5', 'Status 5'],
    ['Category 6', 'Status 6'],
    ['Category 7', 'Status 7'],
    ['Category 8', 'Status 8'],
  ],
};

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class SafetyCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.dataRows.map((prop, key) => ({
        id: key,
        category: prop[0],
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
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>React Table</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: 'ID',
                    accessor: 'id',
                  },
                  {
                    Header: 'Category',
                    accessor: 'category',
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
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(SafetyCategory);
