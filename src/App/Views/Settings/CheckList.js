import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Datatable from '../Tables/Datatable';

// Calendar
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import events from './Calendar.events'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

// Setup the localizer by providing the moment
BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class CheckList extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          events: events,
        };

        this.moveEvent = this.moveEvent.bind(this)
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

      moveEvent({ event, start, end }) {
        const { events } = this.state

        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end }

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)

        this.setState({
          events: nextEvents,
        })

        console.log(`${event.title} was dropped onto ${event.start}`)
    }

    selectEvent = event => {
        if(event.url)
            alert(`Event can redirect to: ${event.url}`)
    };

    parseStyleProp = ({style}) => style ? { style } : {}

    resizeEvent = (resizeType, { event, start, end }) => {
        const { events } = this.state

        const nextEvents = events.map(existingEvent => {
          return existingEvent.id === event.id
            ? { ...existingEvent, start, end }
            : existingEvent
        })

        this.setState({
          events: nextEvents,
        })

        console.log(`${event.title} was resized to ${start}-${end}`)
    }      

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
                   <div>Check List
                   </div>
                   <button className="ml-auto btn btn-success">Add Task</button>
                </div>
                <div className="card b">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            >
                            Check List
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            >
                            Task
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Datatable options={this.state.dtOptions}>
                                <table className="table table-striped table-hover b0">
                                    <thead>
                                        <tr>
                                            <th style={{width: '80px'}}>
                                                <strong>ID</strong>
                                            </th>
                                            <th>
                                                <strong>Location</strong>
                                            </th>
                                            <th>
                                                <strong>Description</strong>
                                            </th>
                                            <th>
                                                <strong>Owner</strong>
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
                                            <td>Location</td>
                                            <td>Description</td>
                                            <td>Owner</td>
                                            <td className="text-center">
                                                <span className="badge badge-success">Complete</span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-sm btn-secondary">
                                                    <em className="fa fa-search"></em>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Location</td>
                                            <td>Description</td>
                                            <td>Owner</td>
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
                                            <td>Location</td>
                                            <td>Description</td>
                                            <td>Owner</td>
                                            <td className="text-center">
                                                <span className="badge badge-danger">Canceled</span>
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
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                            <Col sm="6">
                            { /* START row */ }
                            <div className="calendar-app">
                                { /* START panel */ }
                                <Card className="card-default">
                                    <CardBody>
                                        { /* START calendar */ }
                                        <DragAndDropCalendar
                                                style={{minHeight: 500}}
                                                selectable
                                                events={this.state.events}
                                                onEventDrop={this.moveEvent}
                                                resizable
                                                onEventResize={this.resizeEvent}
                                                onSelectEvent={this.selectEvent}
                                                defaultView="month"
                                                defaultDate={new Date()}
                                                eventPropGetter={this.parseStyleProp}
                                            />
                                        { /* END calendar */ }
                                    </CardBody>
                                </Card>
                                { /* END panel */ }
                            </div>
                            </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>                
            </ContentWrapper>
        );
    }
}

export default  DragDropContext(HTML5Backend)(CheckList);