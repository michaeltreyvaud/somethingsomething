import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Card, CardBody } from 'reactstrap';
import Datatable from '../Tables/Datatable';

class SupplierList extends React.Component {

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

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Safety Category
                   </div>
                   <button className="ml-auto btn btn-success">New</button>
                </div>
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
                                            <strong>Address</strong>
                                        </th>
                                        <th>
                                            <strong>Email</strong>
                                        </th>
                                        <th>
                                            <strong>Phone</strong>
                                        </th>
                                        <th className="text-center">
                                            <strong>ACTION</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Supplier</td>
                                        <td>kadwd</td>
                                        <td>test@test.test</td>
                                        <td>dwad</td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Supplier</td>
                                        <td>kadwd</td>
                                        <td>test@test.test</td>
                                        <td>dwad</td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Supplier</td>
                                        <td>kadwd</td>
                                        <td>test@test.test</td>
                                        <td>dwad</td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-sm btn-secondary">
                                                <em className="fa fa-trash"></em>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Datatable>
                    </CardBody>
                </Card>
            </ContentWrapper>
        );
    }
}

export default SupplierList;