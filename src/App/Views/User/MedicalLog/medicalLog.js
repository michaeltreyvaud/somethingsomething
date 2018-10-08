import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Assignment from '@material-ui/icons/Assignment';
import moment from 'moment';

import GridContainer from '../../../Components/Grid/GridContainer';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import Button from '../../../Components/CustomButtons';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Table from '../../../Components/Table';
import LoadingTable from '../../../Components/Loading/LoadingTable';
import MedicalLogDelete from './Delete/delete.container';

import style from '../../../Assets/Jss/extendedTablesStyle';

class Medical extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDeleteModal: false,
      selectedDeleteItem: {},
    };
  }

  componentDidMount() {
    const { listMedicalLogs } = this.props;
    listMedicalLogs();
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
      { color: 'success', icon: Open, tooltip: 'Edit' },
      { color: 'danger', icon: Delete, tooltip: 'Delete' },
    ].map((prop, key) => {
      let onClick;
      switch (key) {
        case 0: {
          // onClick = () => history.push(`/dashboard/fridge/log/${item.createdAt}`);
          break;
        }
        case 1: {
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
      const item = [_item.illnessType, moment(_item.fromDate).format('DD/MM/YYYY'),
        moment(_item.toDate).format('DD/MM/YYYY'), _item.certification,
        _item.details, simpleButtons(_item, index)];
      return item;
    });
    return (
      <div>
        <MedicalLogDelete
          item={selectedDeleteItem}
          visible={displayDeleteModal}
          classes={classes}
          close={() => this.hideDeleteModal()}
        />
        <GridContainer>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <Button
                color="info"
                className={classes.marginRight}
                onClick={() => history.push('/dashboard/user/medical/create')}
              >
                Create
              </Button>
            </CardHeader>
            <CardBody>
              {!loading && items && items.length > 0 && (
                <Table
                  hover
                  tableHead={[
                    'Illness Type',
                    'From Date',
                    'To Date',
                    'Certification',
                    'Detail',
                    'Actions',
                  ]}
                  tableData={tableData}
                  customCellClasses={[
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customClassesForCells={[0, 1, 2, 3, 4, 5]}
                  customHeadCellClasses={[
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customHeadClassesForCells={[0, 1, 2, 3, 4, 5]}
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
        </GridContainer>
      </div>
    );
  }
}

Medical.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  listMedicalLogs: PropTypes.func.isRequired,
};

export default withStyles(style)(Medical);
