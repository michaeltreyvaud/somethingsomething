import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Today from '@material-ui/icons/Today';

import Button from '../../../../Components/CustomButtons';
import CustomInput from '../../../../Components/CustomInput';
import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';
import NotFound from '../../../../Components/NotFound';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

import LoadingTable from '../../../../Components/Loading/LoadingTable';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        name, description, id,
      } = item;
      this.state = {
        name,
        description,
        id,
      };
    } else {
      this.state = {
        name: '',
        description: '',
        id: '',
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating } = nextProps;
    if (item && !updating) {
      const {
        name, description, id,
      } = item;
      this.setState({
        name,
        description,
        id,
      });
    }
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  updateFridge() {
    const { loading, updating, updateFridge } = this.props;
    if (loading || updating) return false;
    return updateFridge(this.state);
  }

  render() {
    const {
      classes, loading, updating, item,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Fridge Item Not Found" />);
    const { name, description } = this.state;
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
                {!loading && (
                  <div>
                    <CustomInput
                      labelText="Name"
                      id="name"
                      value={name}
                      formControlProps={{ fullWidth: true }}
                      inputProps={{ type: 'text' }}
                      onChange={e => this.updateValue(e)}
                    />
                    <CustomInput
                      labelText="Description"
                      id="description"
                      value={description}
                      formControlProps={{ fullWidth: true }}
                      inputProps={{ multiline: true, rows: 3 }}
                      onChange={e => this.updateValue(e)}
                    />
                    <Button loading={updating} onClick={() => this.updateFridge()} color="rose" className={classes.updateProfileButton}>
                        Save
                    </Button>
                  </div>
                )}
                <LoadingTable visible={loading} color="red" />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Update.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  updating: PropTypes.bool.isRequired,
  updateFridge: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
