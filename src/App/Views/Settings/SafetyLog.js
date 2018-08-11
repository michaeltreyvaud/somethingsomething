import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody} from 'reactstrap';
import Datatable from '../Tables/Datatable';
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class SafetyLog extends React.Component {

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

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Safety Log
                   </div>
                </div>
                <Card className="card-default">
                    <CardBody>
                        <form onSubmit={this.onSubmit}>
                          <div className="form-row align-items-center">
                            <div className="col-auto">
                            Category
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
                                                    <strong>Name</strong>
                                                </th>
                                                <th>
                                                    <strong>Description</strong>
                                                </th>
                                                <th className="text-center">
                                                    <strong>STATUS</strong>
                                                </th>
                                                <th className="text-center">
                                                    <strong>VIEW</strong>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin</td>
                                                <td>Full Access Permissions</td>
                                                <td className="text-center">
                                                    <span className="badge badge-success">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-sm btn-secondary">
                                                        <em className="fa fa-search"></em>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Test User</td>
                                                <td>Kitche Staff</td>
                                                <td className="text-center">
                                                    <span className="badge badge-success">Active</span>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-sm btn-secondary">
                                                        <em className="fa fa-search"></em>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Test User Two</td>
                                                <td>Bar Staff</td>
                                                <td className="text-center">
                                                    <span className="badge badge-danger">Disabled</span>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-sm btn-secondary">
                                                        <em className="fa fa-search"></em>
                                                    </button>
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

export default SafetyLog;