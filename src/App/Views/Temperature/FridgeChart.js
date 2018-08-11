import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody} from 'reactstrap';
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import FlotChart from '../Charts/Flot';

class FridgeChart extends React.Component {

    state = {
        splineData: [{
            "label": "Temperature",
            "color": "#23b7e5",
            "data": [
                ["Jan", 12],
                ["Feb", 20],
                ["Mar", 16],
                ["Apr", 3],
                ["May", 6],
                ["Jun", 12],
                ["Jul", 10],
                ["Aug", 8],
                ["Sep", 8],
                ["Oct", 12],
                ["Nov", 12],
                ["Dec", 18]
            ]
        }],
        splineOptions: {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: (label, x, y) => x + ' : ' + y
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: -50,
                max: 50, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: v => v
            },
            shadowSize: 0
        },
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Fridge Chart
                   </div>
                </div>
                <Card className="card-default">
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                          <div className="form-row align-items-center">
                            <div className="col-auto">
                            Location
                                <select defaultValue="" className="custom-select" multiple="">
                                        <option>Open this select menu</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="col-auto">
                            From Date
                                <Datetime inputProps={{className: 'form-control'}}/>
                            </div>
                            <div className="col-auto">
                            To Date
                                <Datetime inputProps={{className: 'form-control'}}/>
                            </div>
                            <div className="col-auto">
                              <button type="submit" className="btn btn-primary mb-2 pull-right">Search</button>
                            </div>
                          </div>
                        </form>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                    <div className="card-body">
                            <FlotChart data={this.state.splineData} options={this.state.splineOptions} height="250px" />
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <p>Number</p>
                                    <div className="h1">25</div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

export default FridgeChart;