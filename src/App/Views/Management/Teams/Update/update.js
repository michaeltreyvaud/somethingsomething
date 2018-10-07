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
import Users from './Users/users.container';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        name, description,
      } = item;
      this.state = {
        name,
        description,
      };
    } else {
      this.state = {
        name: '',
        description: '',
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating } = nextProps;
    if (item && !updating) {
      const {
        name, description,
      } = item;
      this.setState({
        name,
        description,
      });
    }
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  updateTeam() {
    const { loading, updating, updateTeam } = this.props;
    if (loading || updating) return false;
    return updateTeam(this.state);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/management/teams');
  }

  render() {
    const {
      classes, loading, updating, item,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Team Not Found" />);
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
                      inputProps={{ type: 'text', disabled: true }}
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
                    <Button loading={updating} onClick={() => this.updateTeam()} color="rose" className={classes.updateProfileButton}>
                      Save
                    </Button>
                    <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                      Back
                    </Button>
                  </div>
                )}
                <LoadingTable visible={loading} color="red" />
              </CardBody>
            </Card>
          </GridItem>
          {!loading && <Users classes={classes} groupName={name} />}
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
  updateTeam: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
