import { connect } from 'react-redux';
import Create from './create';
import { create, setRecordValue, resetRecord } from '../Store/Actions/create';

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

//  TODO - should come from discovery
const refrigerationTypes = [
  {
    displayName: 'Fridge',
    refrigerationType: 'fridge',
  },
  {
    displayName: 'Freezer',
    refrigerationType: 'freezer',
  },
  {
    displayName: 'Chill Display',
    refrigerationType: 'chillDisplay',
  },
];

//  TODO - fix this
const foodItems = [
  {
    name: 'Food Item 1',
    id: 'someid1',
  },
  {
    name: 'Food Item 2',
    id: 'someid2',
  },
  {
    name: 'Food Item 3',
    id: 'someid3',
  },
];

//  TODO - fix this
const suppliers = [
  {
    name: 'Supplier 1',
    id: 'someid1',
  },
  {
    name: 'Supplier 2',
    id: 'someid2',
  },
  {
    name: 'Supplier 3',
    id: 'someid3',
  },
];

//  TODO: fix this
const fridgeItems = [
  {
    id: 'some-id-1',
    name: 'fridge-name-1',
  },
  {
    id: 'some-id-2',
    name: 'fridge-name-2',
  },
  {
    id: 'some-id-3',
    name: 'fridge-name-3',
  },
];

//  TODO: fix this
const freezerItems = [
  {
    id: 'some-id-1',
    name: 'freezer-name-1',
  },
  {
    id: 'some-id-2',
    name: 'freezer-name-2',
  },
  {
    id: 'some-id-3',
    name: 'freezer-name-3',
  },
];

//  TODO: fix this
const chillDisplayItems = [
  {
    id: 'some-id-1',
    name: 'chilldisplay-name-1',
  },
  {
    id: 'some-id-2',
    name: 'chilldisplay-name-2',
  },
  {
    id: 'some-id-3',
    name: 'chilldisplay-name-3',
  },
];

//  TODO: fix this
const locations = [
  {
    id: 'some-id-1',
    name: 'Location 1',
  },
  {
    id: 'some-id-2',
    name: 'Location 2',
  },
  {
    id: 'some-id-3',
    name: 'Location 3',
  },
];

//  TODO: fix this
const chemicalList = [
  {
    id: 'some-id-1',
    name: 'Chemical 1',
  },
  {
    id: 'some-id-2',
    name: 'Chemical 2',
  },
  {
    id: 'some-id-3',
    name: 'Chemical 3',
  },
];

const mapStateToProps = state => ({
  loading: state.records.create.loading,
  success: state.records.create.success,
  record: state.records.create.record,
  recordTypes,
  refrigerationTypes,
  foodItems,
  suppliers,
  fridgeItems,
  freezerItems,
  chillDisplayItems,
  locations,
  chemicalList,
});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(create(item)),
  setRecordValue: (key, value) => dispatch(setRecordValue(key, value)),
  resetRecord: () => dispatch(resetRecord()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
