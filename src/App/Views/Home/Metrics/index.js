import React from 'react';
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import CardFooter from '../../../Components/Card/CardFooter';

import style from "../../../Assets/Jss/chartsStyle";

// ##############################
// // // Pie Chart
// #############################

const pieChartOne = {
data: {
    labels: ["100%", "0%"],
    series: [100, 0]
},
options: {
    height: "230px"
}
};

const pieChartTwo = {
data: {
    labels: ["50%", "50%"],
    series: [50, 50]
},
options: {
    height: "230px"
}
};

const pieChartThree = {
data: {
    labels: ["25%", "75%"],
    series: [25, 75]
},
options: {
    height: "230px"
}
};  

class Metrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
            <Card>
                <CardHeader color="danger" icon>
                <CardIcon color="danger">
                    <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Fridge temperature tasks</h4>
                </CardHeader>
                <CardBody>
                <ChartistGraph
                    data={pieChartOne.data}
                    type="Pie"
                    options={pieChartOne.options}
                />
                </CardBody>
                <CardFooter stats className={classes.cardFooter}>
                <h6 className={classes.legendTitle}>Legend</h6>
                <i className={"fas fa-circle " + classes.info} /> Complete{` `}
                <i
                    className={"fas fa-circle " + classes.warning}
                /> Not Complete{` `}
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
            <Card>
                <CardHeader color="danger" icon>
                <CardIcon color="danger">
                    <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Freezer temperature tasks</h4>
                </CardHeader>
                <CardBody>
                <ChartistGraph
                    data={pieChartTwo.data}
                    type="Pie"
                    options={pieChartTwo.options}
                />
                </CardBody>
                <CardFooter stats className={classes.cardFooter}>
                <h6 className={classes.legendTitle}>Legend</h6>
                <i className={"fas fa-circle " + classes.info} /> Complete{` `}
                <i
                    className={"fas fa-circle " + classes.warning}
                /> Not Complete{` `}
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
            <Card>
                <CardHeader color="danger" icon>
                <CardIcon color="danger">
                    <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Cleaning tasks</h4>
                </CardHeader>
                <CardBody>
                <ChartistGraph
                    data={pieChartThree.data}
                    type="Pie"
                    options={pieChartThree.options}
                />
                </CardBody>
                <CardFooter stats className={classes.cardFooter}>
                <h6 className={classes.legendTitle}>Legend</h6>
                <i className={"fas fa-circle " + classes.info} /> Complete{` `}
                <i
                    className={"fas fa-circle " + classes.warning}
                /> Not Complete{` `}
                </CardFooter>
            </Card>
        </GridItem>                
      </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Metrics);