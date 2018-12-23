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
];

const mapStateToProps = state => ({
  loading: state.records.create.loading,
  success: state.records.create.success,
  recordTypes,
});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(create(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
