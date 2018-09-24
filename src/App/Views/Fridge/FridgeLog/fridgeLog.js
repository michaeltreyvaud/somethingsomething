import React from 'react';
// @material-ui/core components
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';
// core components
import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';
import CustomDropdown from '../../../Components/CustomDropdown';
import LoadingTable from '../../../Components/Loading/LoadingTable';

import FridgeLogDelete from './Delete/delete.container';

import extendedTablesStyle from '../../../Assets/Jss/extendedFormsStyle';

class FridgeLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDeleteModal: false,
      selectedDeleteItem: {},      
    };
  }

  componentDidMount() {
    const { listFridgeLogs } = this.props;
    listFridgeLogs();
  }

  showDeleteModal(createdAt, index) {
    this.setState({
      displayDeleteModal: true,
      selectedDeleteItem: {
        createdAt,
        index,
      },
    });
  }

  hideDeleteModal() {
    this.setState({
      displayDeleteModal: false,
      selectedDeleteItem: {},
    });
  }  

  render() {
    const {
      classes, items, loading, history,
    } = this.props;
    const {
      displayDeleteModal, selectedDeleteItem,
    } = this.state;
    const simpleButtons = (item, index) => [
      { color: 'warning', icon: Print, tooltip: 'Print' },
      { color: 'success', icon: Open, tooltip: 'Edit' },
      { color: 'danger', icon: Delete, tooltip: 'Delete' },
    ].map((prop, key) => {
      let onClick;
      switch (key) {
        case 1: {
          onClick = () => history.push(`/dashboard/fridge/log/${item.createdAt}`);
          break;
        }
        case 2: {
          onClick = () => this.showDeleteModal(item.createdAt, index);
          break;
        }
        default: {
          onClick = () => {};
        }
      }
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
            onClick={onClick}
          >
            <prop.icon className={classes.icon} />
          </Button>
        </Tooltip>
      );
    });
    const tableData = items.map((_item, index) => {
      const item = [ _item.freezerItem, _item.user, _item.temperature, moment(_item.createdAt).format('MMMM Do YYYY, h:mm:ss a'), _item.image, _item.comments, simpleButtons(_item, index)];
      return item;
    });
    return (
      <div>
        <FridgeLogDelete
          item={selectedDeleteItem}
          visible={displayDeleteModal}
          classes={classes}
          close={() => this.hideDeleteModal()}
        />        
        <Button color="info" className={classes.marginRight} onClick={() => this.props.history.push('/dashboard/fridge/log/create')}>
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
              {!loading && items && items.length > 0 && (
                <Table
                  tableHead={[
                    'Fridge',
                    'Operator',
                    'Temperature',
                    'Date/Time',
                    'Captured Image',
                    'Comments',
                    'Actions',
                  ]}
                  tableData={tableData}
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
                )}
                {!loading && items && items.length === 0 && (
                  <div style={{
                    display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center',
                  }}
                  >
                    <h2><small>No Items to display</small></h2>
                  </div>
                )}
                <LoadingTable visible={loading} color="red" />                
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

FridgeLog.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,

  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

  listFridgeLogs: PropTypes.func.isRequired,
};

export default withStyles(extendedTablesStyle)(FridgeLog);
