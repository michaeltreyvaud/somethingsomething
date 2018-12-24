import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomInput from '../../../../Components/CustomInput';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

const General = (props) => {
  const { updateValue, name, comment } = props;
  return (
    <div>
      <CustomInput
        labelText="Name"
        id="name"
        value={name}
        formControlProps={{ fullWidth: true }}
        inputProps={{ type: 'text' }}
        onChange={e => updateValue(e)}
      />
      <CustomInput
        value={comment}
        labelText="Comment"
        id="comment"
        formControlProps={{ fullWidth: true }}
        inputProps={{ multiline: true, rows: 3 }}
        onChange={e => updateValue(e)}
      />
    </div>
  );
};

General.propTypes = {
  updateValue: PropTypes.func.isRequired,
  name: PropTypes.string,
  comment: PropTypes.string,
};

General.defaultProps = {
  name: '',
  comment: '',
};

export default withStyles(extendedFormsStyle)(General);
