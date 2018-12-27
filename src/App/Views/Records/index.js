import { connect } from 'react-redux';
import Records from './records';
import { list, setRecordType } from './Store/Actions';

//  TODO - fetch these, should come from discovery
const recordTypes = {
  general: {
    displayName: 'General',
    type: 'general',
    tableConfig: {
      headers: ['Id', 'Name', 'Comments', 'Created'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        name: { type: 'string', value: 'name' },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  chemical: {
    displayName: 'Chemical',
    type: 'chemical',
  },
  pest: {
    displayName: 'Pest',
    type: 'pest',
  },
  hotHold: {
    displayName: 'Hot Hold',
    type: 'hotHold',
  },
  reheating: {
    displayName: 'Reheating',
    type: 'reheating',
  },
  cooling: {
    displayName: 'Cooling',
    type: 'cooling',
  },
  cooking: {
    displayName: 'Cooking',
    type: 'cooking',
  },
  refrigeration: {
    displayName: 'Refrigeration',
    type: 'refrigeration',
  },
  foodDelivery: {
    displayName: 'Food Delivery',
    type: 'foodDelivery',
    tableConfig: {
      headers: ['Id', 'Supplier', 'Food Item', 'Temperature', 'Comments', 'Accepted', 'Created'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        supplier: {
          type: 'object',
          value: 'supplier',
          property: 'displayName',
        },
        foodItem: {
          type: 'object',
          value: 'foodItem',
          property: 'displayName',
        },
        temperature: { type: 'number', value: 'temperature' },
        comments: { type: 'string', value: 'comments' },
        accepted: { type: 'boolean', value: 'accepted' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
};

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
