import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { DropdownToggle, DropdownMenu, DropdownItem, InputGroupButtonDropdown, Card, CardBody } from 'reactstrap';
import Datatable from '../Tables/Datatable';

class ColdHotLocation extends React.Component {

    state = {
        dropdownOpen: false,
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

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Freezer Item
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
                                            <strong>Image</strong>
                                        </th>                                
                                        <th>
                                            <strong>Name</strong>
                                        </th>
                                        <th>
                                            <strong>Description</strong>
                                        </th>
                                        <th className="text-center">
                                            <strong>Actions</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td>Trans Test</td>
                                        <td>test</td>
                                        <td className="text-center">
                                            <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                            <DropdownToggle caret color='info'>
                                                Actions
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>View</DropdownItem>
                                                <DropdownItem>Print Label</DropdownItem>
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
            </ContentWrapper>
        );
    }
}

export default ColdHotLocation;