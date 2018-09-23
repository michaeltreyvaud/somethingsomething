import { connect } from 'react-redux';
import FastCooling from './fastCooling';
import { listFastCoolings } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fastCooling.index.loading,
  items: state.fastCooling.index.items,
  foodItems: state.foodItem.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFastCoolings: () => dispatch(listFastCoolings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FastCooling);
