import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, Input} from 'reactstrap';
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class TraceabilityLabels extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Traceability Labels
                   </div>
                </div>
                <Card className="card-default">
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                          <div className="form-row align-items-center">
                            <div className="col-auto">
                            Good Type
                                <select defaultValue="" className="custom-select" multiple="">
                                        <option>Open this select menu</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="col-auto">
                            Delivery/order number
                              <Input type="text" className="mb-2" id="inlineFormInput" placeholder="#"/>
                            </div>
                            <div className="col-auto">
                            Suppliers list
                                <select defaultValue="" className="custom-select" multiple="">
                                            <option>Open this select menu</option>
                                            <option defaultValue="1">One</option>
                                            <option defaultValue="2">Two</option>
                                            <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="col-auto">
                            Status
                                <select defaultValue="" className="custom-select" multiple="">
                                        <option>Open this select menu</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="col-auto">
                            Team
                                <select defaultValue="" className="custom-select" multiple="">
                                        <option>Open this select menu</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="col-auto">
                            Operator
                                <select defaultValue="" className="custom-select" multiple="">
                                            <option>Open this select menu</option>
                                            <option defaultValue="1">One</option>
                                            <option defaultValue="2">Two</option>
                                            <option defaultValue="3">Three</option>
                                </select>
                            </div>
                            <div className="col-auto">                            
                            From
                                <Datetime inputProps={{className: 'form-control'}}/>
                            </div>
                            <div className="col-auto">
                            To
                                <Datetime inputProps={{className: 'form-control'}}/>
                            </div>
                          </div>
                          <div>
                          <div className="col-auto">
                              <button type="submit" className="btn btn-primary mb-2 pull-right">Download Labels</button>
                            </div>
                              </div>
                        </form>
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

export default TraceabilityLabels;