import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody, DropdownToggle, InputGroupButtonDropdown, DropdownItem, DropdownMenu, Input} from 'reactstrap';
import Datatable from '../Tables/Datatable';
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class DeliveryLog extends React.Component {

    state = {
        dtOptions: {
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            responsive: true,
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: '<em class="fa fa-search"></em>',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="fa fa-caret-right"></em>',
                    sPrevious: '<em class="fa fa-caret-left"></em>'
                }
            }
        }
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
    }        

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }    

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>
                   Delivery Log
                   </div>
                   <button className="ml-auto btn btn-success">New</button>
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
                            <div className="col-auto">
                              <button type="submit" className="btn btn-primary mb-2 pull-right">Search</button>
                            </div>
                          </div>
                        </form>
                    </CardBody>
                </Card>
                {/* START row */}
                <div className="row">
                    <div className="col-md-12">
                        {/* START card */}
                        <Card className="card-default">
                            <CardBody>            
                                <Datatable options={this.state.dtOptions}>
                                    <table className="table table-striped table-hover b0">
                                        <thead>
                                            <tr>
                                                <th style={{width: '80px'}}>
                                                    <strong>ID</strong>
                                                </th>
                                                <th>
                                                    <strong>Good Type</strong>
                                                </th>
                                                <th>
                                                    <strong>Delivery/order number</strong>
                                                </th>
                                                <th>
                                                    <strong>Suppliers list</strong>
                                                </th>
                                                <th>
                                                    <strong>Status</strong>
                                                </th>
                                                <th>
                                                    <strong>Operator</strong>
                                                </th>
                                                <th>
                                                    <strong>Accept Time</strong>
                                                </th>
                                                <th>
                                                    <strong>Log Time</strong>
                                                </th>
                                                <th className="text-center">
                                                    <strong>Actions</strong>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Fresh Goods, Frozen Goods</td>
                                                <td>1337</td>
                                                <td>Supplier</td>
                                                <td>Accept</td>
                                                <td>Bob Boson</td>                                                
                                                <td>07/22/2018 19:14:00</td>
                                                <td>07/22/2018 19:14:00</td>                                            
                                                <td className="text-center">
                                                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                                    <DropdownToggle caret color='info'>
                                                        Actions
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>View</DropdownItem>
                                                        <DropdownItem>Clone</DropdownItem>
                                                        <DropdownItem>Add Label</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Delete</DropdownItem>
                                                    </DropdownMenu>
                                                    </InputGroupButtonDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Datatable>
                            </CardBody>
                        </Card>
                        {/* END card */}
                    </div>
                </div>                
            </ContentWrapper>
        );
    }
}

export default DeliveryLog;