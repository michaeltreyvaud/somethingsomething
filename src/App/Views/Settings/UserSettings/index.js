import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Schedule from '@material-ui/icons/Schedule';
import Info from '@material-ui/icons/Info';
import LocationOn from '@material-ui/icons/LocationOn';
import Gavel from '@material-ui/icons/Gavel';
import HelpOutline from '@material-ui/icons/HelpOutline';
import FormLabel from '@material-ui/core/FormLabel';

// core components
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import NavPills from '../../../Components/NavPills';
import Card from '../../../Components/Card/Card';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import avatar from '../../../Assets/Images/02.jpg';
import CardAvatar from '../../../Components/Card/CardAvatar';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';

import { cardTitle } from '../../../Assets/Jss/material-dashboard-pro-react.js';

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: '#3C4858',
    textDecoration: 'none',
    textAlign: 'center',
  },
  cardCategory: {
    margin: '0',
    color: '#999999',
  },
};

const UserSettings = (props) => {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader>
            <h4 className={classes.cardTitle}>
            Personal Settings
            </h4>
          </CardHeader>
          <CardBody>
            <NavPills
              color="rose"
              horizontal={{
                tabsGrid: { xs: 12, sm: 12, md: 2 },
                contentGrid: { xs: 12, sm: 12, md: 8 },
              }}
              tabs={[
                {
                  tabButton: 'Profile',
                  tabContent: (
                    <GridItem xs={12} sm={12} md={3}>
                      <FormLabel className={classes.labelHorizontal}>
                        Email
                      </FormLabel>
                    </GridItem>
                  ),
                },
                {
                  tabButton: 'Account',
                  tabContent: (
                    <span>
                      <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely
                      deliverables for real-time schemas.
                      </p>
                      <br />
                      <p>
                      Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Signature',
                  tabContent: (
                    <span>
                      <p>
                      Completely synergize resource taxing relationships
                      via premier niche markets. Professionally cultivate
                      one-to-one customer service with robust ideas.{' '}
                      </p>
                      <br />
                      <p>
                      Dynamically innovate resource-leveling customer
                      service for state of the art customer service.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Medical Questionaire',
                  tabContent: (
                    <span>
                      <p>
                      Completely synergize resource taxing relationships
                      via premier niche markets. Professionally cultivate
                      one-to-one customer service with robust ideas.{' '}
                      </p>
                      <br />
                      <p>
                      Dynamically innovate resource-leveling customer
                      service for state of the art customer service.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Medical Log',
                  tabContent: (
                    <span>
                      <p>
                      Completely synergize resource taxing relationships
                      via premier niche markets. Professionally cultivate
                      one-to-one customer service with robust ideas.{' '}
                      </p>
                      <br />
                      <p>
                      Dynamically innovate resource-leveling customer
                      service for state of the art customer service.
                      </p>
                    </span>
                  ),
                },
                {
                  tabButton: 'Training Log',
                  tabContent: (
                    <span>
                      <p>
                      Completely synergize resource taxing relationships
                      via premier niche markets. Professionally cultivate
                      one-to-one customer service with robust ideas.{' '}
                      </p>
                      <br />
                      <p>
                      Dynamically innovate resource-leveling customer
                      service for state of the art customer service.
                      </p>
                    </span>
                  ),
                },
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(styles)(UserSettings);
