import React from 'react';
import Datetime from 'react-datetime';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Assignment from '@material-ui/icons/Assignment';

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

class FridgeLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <Button color="info" className={classes.marginRight}>
        New
          </Button>
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
        </GridContainer>
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
                          Choose Location
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
                            Location 1
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected,
                              }}
                              value="2"
                            >
                            Location 2
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected,
                              }}
                              value="3"
                            >
                            Location 3
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
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: 'From' }}
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={2}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: 'To' }}
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
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    'ID',
                    'Image',
                    'Location',
                    'Operator',
                    'Temperature',
                    'Date/Time',
                    'Captured Image',
                    'Comments',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      '1',
                      'PICTURE',
                      'Cold Fridge 1',
                      'Daniel Treyvaud',
                      '17 Degrees',
                      '07/22/2018 18:38:34',
                      'IMAGE',
                      'Test Comments',
                      <GridItem xs={12} sm={6} md={5} lg={12}>
                        <CustomDropdown
                          hoverColor="black"
                          buttonText="Actions"
                          buttonProps={{
                            round: true,
                            fullWidth: true,
                            style: { marginBottom: '0' },
                            color: 'info',
                          }}
                          dropdownHeader="Actions"
                          dropdownList={[
                            'View',
                            'Clone',
                            { divider: true },
                            'Delete',
                          ]}
                        />
                      </GridItem>,
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

export default withStyles(extendedTablesStyle, style)(FridgeLog);
