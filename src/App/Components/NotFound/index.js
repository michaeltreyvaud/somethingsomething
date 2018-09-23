import React from 'react';
import PropTypes from 'prop-types';

import Today from '@material-ui/icons/Today';

import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import CardIcon from '../Card/CardIcon';

const NotFound = (props) => {
  const { text } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Today />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <div style={{
                display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center',
              }}
              >
                <h2><small>{text}</small></h2>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

NotFound.propTypes = {
  text: PropTypes.string,
};

NotFound.defaultProps = {
  text: 'Item Not Found',
};

export default NotFound;
