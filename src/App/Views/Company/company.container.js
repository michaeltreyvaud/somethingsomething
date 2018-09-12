import { connect } from 'react-redux';
import Company from './company';
import { getCompanyInfo, updateCompanyInfo } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.company.loading,
  name: state.company.name,
  email: state.company.email,
  firstName: state.company.firstName,
  lastName: state.company.lastName,
  phone: state.company.phone,
  mobile: state.company.mobile,
  country: state.company.country,
  city: state.company.city,
  address1: state.company.address1,
  address2: state.company.address2,
  address3: state.company.address3,
  logo: state.company.logo,
});

const mapDispatchToProps = dispatch => ({
  getCompanyInfo: () => dispatch(getCompanyInfo()),
  updateCompanyInfo: info => dispatch(updateCompanyInfo(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Company);
