import { connect } from 'react-redux';
import Records from './records';
import { list, setRecordType } from './Store/Actions';

//  TODO - fetch these, should come from discovery
const recordTypes = {
  general: {
    displayName: 'General',
    type: 'general',
    tableConfig: {
      headers: ['Id', 'Name', 'Comments', 'Date'],
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
    tableConfig: {
      headers: ['Id', 'Chemical', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        chemical: {
          type: 'object',
          value: 'chemical',
          property: 'displayName',
        },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  pest: {
    displayName: 'Pest',
    type: 'pest',
    tableConfig: {
      headers: ['Id', 'Location', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        location: {
          type: 'object',
          value: 'location',
          property: 'displayName',
        },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  hotHold: {
    displayName: 'Hot Hold',
    type: 'hotHold',
    tableConfig: {
      headers: ['Id', 'Food Item', 'Temperature', 'Hold Entry Time', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        foodItem: {
          type: 'object',
          value: 'foodItem',
          property: 'displayName',
        },
        temperature: { type: 'number', value: 'temperature' },
        timeIntoHold: {
          type: 'date',
          format: 'DD/MM/YYYY HH:mm',
          value: 'timeIntoHold',
        },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  reheating: {
    displayName: 'Reheating',
    type: 'reheating',
    tableConfig: {
      headers: ['Id', 'Food Item', 'Temperature', 'Hold Entry Time', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        foodItem: {
          type: 'object',
          value: 'foodItem',
          property: 'displayName',
        },
        temperature: { type: 'number', value: 'temperature' },
        refrigerationStartTime: {
          type: 'date',
          format: 'DD/MM/YYYY HH:mm',
          value: 'timeIntoHold',
        },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  cooling: {
    displayName: 'Cooling',
    type: 'cooling',
    tableConfig: {
      headers: ['Id', 'Food Item', 'Refrigeration Entry Time', 'Temperature', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        foodItem: {
          type: 'object',
          value: 'foodItem',
          property: 'displayName',
        },
        refrigerationStartTime: {
          type: 'date',
          format: 'DD/MM/YYYY HH:mm',
          value: 'refrigerationStartTime',
        },
        temperature: { type: 'number', value: 'temperature' },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  cooking: {
    displayName: 'Cooking',
    type: 'cooking',
    tableConfig: {
      headers: ['Id', 'Food Item', 'Cooking Start Time', 'Cooking Finish Time', 'Temperature', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        foodItem: {
          type: 'object',
          value: 'foodItem',
          property: 'displayName',
        },
        cookStartTime: {
          type: 'date',
          format: 'DD/MM/YYYY HH:mm',
          value: 'cookStartTime',
        },
        cookFinishTime: {
          type: 'date',
          format: 'DD/MM/YYYY HH:mm',
          value: 'cookFinishTime',
        },
        temperature: { type: 'number', value: 'temperature' },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  refrigeration: {
    displayName: 'Refrigeration',
    type: 'refrigeration',
    tableConfig: {
      headers: ['Id', 'Type', 'Unit', 'Temperature', 'Comments', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        refrigerationType: {
          type: 'string',
          value: 'refrigerationType',
        },
        refrigerationUnit: {
          type: 'object',
          value: 'refrigerationUnit',
          property: 'displayName',
        },
        temperature: { type: 'number', value: 'temperature' },
        comments: { type: 'string', value: 'comments' },
        created: {
          type: 'date',
          format: 'DD/MM/YYYY',
          value: 'createdAt',
        },
      },
    },
  },
  foodDelivery: {
    displayName: 'Food Delivery',
    type: 'foodDelivery',
    tableConfig: {
      headers: ['Id', 'Food Item', 'Supplier', 'Temperature', 'Comments', 'Accepted', 'Date'],
      itemFormat: {
        id: { type: 'string', value: 'id' },
        foodItem: {
          type: 'object',
          value: 'foodItem',
          property: 'displayName',
        },
        supplier: {
          type: 'object',
          value: 'supplier',
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
