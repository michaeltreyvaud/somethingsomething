import React from 'react';
import ChartistGraph from 'react-chartist';
// @material-ui/icons
import Timeline from '@material-ui/icons/Timeline';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';

import chartsStyle from '../../../Assets/Jss/chartsStyle';

const Chartist = require('chartist');

const delays = 80;
const durations = 500;

const colouredLineChart = {
  data: {
    labels: [
      "'06",
      "'07",
      "'08",
      "'09",
      "'10",
      "'11",
      "'12",
      "'13",
      "'14",
      "'15",
    ],
    series: [[287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]],
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 10,
    }),
    axisY: {
      showGrid: true,
      offset: 40,
    },
    axisX: {
      showGrid: false,
    },
    low: 0,
    high: 1000,
    showPoint: true,
    height: '300px',
  },
  animation: {
    draw(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    },
  },
};

class FridgeChart extends React.Component {
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
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info" icon>
                <CardIcon color="info">
                  <Timeline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                        Coloured Line Chart <small>- Rounded</small>
                </h4>
              </CardHeader>
              <CardBody>
                <ChartistGraph
                  data={colouredLineChart.data}
                  type="Line"
                  options={colouredLineChart.options}
                  listener={colouredLineChart.animation}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(chartsStyle)(FridgeChart);
