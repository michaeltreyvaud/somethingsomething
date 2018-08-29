import React from 'react';
import Datetime from 'react-datetime';
import ReactTable from 'react-table';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Assignment from "@material-ui/icons/Assignment";

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from "../../../Components/CustomButtons";
import Dvr from '@material-ui/icons/Dvr';
import Close from '@material-ui/icons/Close';
import CustomDropdown from '../../../Components/CustomDropdown';

import extendedFormsStyle from './style';

const dataTable = {
  headerRow: ['Name', 'Description', 'Status', 'Actions'],
  footerRow: ['Name', 'Description', 'Status', 'Actions'],
  dataRows: [
    ['Name', 'Description', 'Status'],
    ['Name 2', 'Description 2', 'Status 2'],
    ['Name 3', 'Description 3', 'Status 3'],
    ['Name 4', 'Description 4', 'Status 4'],
    ['Name 5', 'Description 5', 'Status 5'],
    ['Name 6', 'Description 6', 'Status 6'],
    ['Name 7', 'Description 7', 'Status 7'],
    ['Name 8', 'Description 8', 'Status 8'],
  ],
};

class SafetyLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      data: dataTable.dataRows.map((prop, key) => ({
        id: key,
        name: prop[0],
        description: prop[1],
        status: prop[2],
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
        <CustomDropdown
          hoverColor="black"
          buttonText="Export"
          buttonProps={{
            fullWidth: true,
            style: { marginBottom: '0' },
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
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={2}>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Choose Category
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
                            Category 1
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            Category 2
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="3"
                          >
                            Category 3
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={2}>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Choose Team
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
                            Team 1
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            Team 2
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="3"
                          >
                            Team 3
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={2}>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel
                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Choose Operator
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
                            Bob
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            Tim
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={2}>
                          <FormControl fullWidth
                          className={classes.selectFormControl}>
                            <Datetime
                              timeFormat={false}
                              inputProps={{ placeholder: "From" }}
                            />
                          </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={2}>
                          <FormControl fullWidth
                          className={classes.selectFormControl}>
                            <Datetime
                              timeFormat={false}
                              inputProps={{ placeholder: "To" }}
                            />
                          </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={2}>
                      <Button color="rose" className={classes.marginRight}>
                        Search
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
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
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Description",
                    accessor: "description"
                  },
                  {
                    Header: "Status",
                    accessor: "status"
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
};

export default withStyles(extendedFormsStyle)(SafetyLog);
