import { connect } from 'react-redux';
import Records from './records';
import { list, setRecordType } from './Store/Actions';

//  TODO - fetch these, should come from discovery
const recordTypes = [
  {
    displayName: 'Food Delivery',
    type: 'foodDelivery',
  },
  {
    displayName: 'Refrigeration',
    type: 'refrigeration',
  },
  {
    displayName: 'Cooking',
    type: 'cooking',
  },
  {
    displayName: 'Cooling',
    type: 'cooling',
  },
  {
    displayName: 'Reheating',
    type: 'reheating',
  },
  {
    displayName: 'Hot Hold',
    type: 'hotHold',
  },
  {
    displayName: 'Pest',
    type: 'pest',
  },
  {
    displayName: 'Chemical',
    type: 'chemical',
  },
  {
    displayName: 'General',
    type: 'general',
  },
];

const mapStateToProps = state => ({
  loading: state.records.index.loading,
  items: state.records.index.items,
  recordType: state.records.index.recordType,
  recordTypes,
});

const mapDispatchToProps = dispatch => ({
  list: recordType => dispatch(list(recordType)),
  setRecordType: recordType => dispatch(setRecordType(recordType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Records);
