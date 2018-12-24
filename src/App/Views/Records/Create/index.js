import { connect } from 'react-redux';
import Create from './create';
import { create } from '../Store/Actions/create';

//  TODO - fetch these
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
    displayName: 'Cooking Cooling Reheating',
    type: 'cookingCoolingReheating',
  },
  {
    displayName: 'Hot Hold',
    type: 'hotHold',
  },
  {
    displayName: 'General',
    type: 'general',
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

const mapStateToProps = state => ({
  loading: state.records.create.loading,
  success: state.records.create.success,
  recordTypes,
  foodItems,
  suppliers,
});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(create(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
