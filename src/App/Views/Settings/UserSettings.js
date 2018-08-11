import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
// Filestyle
import 'bootstrap-filestyle';

class UserSettings extends React.Component {

    state = {
        activeTab: 'profile'
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }    

    render() {
        return (
            <ContentWrapper>
                <div className="container-md">
                    <Row>
                        <Col lg="3">
                            <div className="card b">
                                <div className="card-header bg-gray-lighter text-bold">Personal Settings</div>
                                <ListGroup>
                                    <ListGroupItem action
                                        className={ this.state.activeTab === 'profile' ? 'active':'' }
                                        onClick={() => { this.toggleTab('profile'); }}>
                                        Profile
                                    </ListGroupItem>
                                    <ListGroupItem action
                                        className={ this.state.activeTab === 'account' ? 'active':'' }
                                        onClick={() => { this.toggleTab('account'); }}>
                                        Account
                                    </ListGroupItem>
                                    <ListGroupItem action
                                        className={ this.state.activeTab === 'signature' ? 'active':'' }
                                        onClick={() => { this.toggleTab('signature'); }}>
                                        Signature
                                    </ListGroupItem>
                                    <ListGroupItem action
                                        className={ this.state.activeTab === 'medical' ? 'active':'' }
                                        onClick={() => { this.toggleTab('medical'); }}>
                                        Medical Questionaire
                                    </ListGroupItem>
                                    <ListGroupItem action
                                        className={ this.state.activeTab === 'medicallog' ? 'active':'' }
                                        onClick={() => { this.toggleTab('medicallog'); }}>
                                        Medical Log
                                    </ListGroupItem>
                                    <ListGroupItem action
                                        className={ this.state.activeTab === 'traininglog' ? 'active':'' }
                                        onClick={() => { this.toggleTab('traininglog'); }}>
                                        Training Log
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg="9">
                            <TabContent activeTab={this.state.activeTab} className="p-0 b0">
                                <TabPane tabId="profile">
                                    <div className="card b">
                                        <div className="card-header bg-gray-lighter text-bold">Profile</div>
                                        <div className="card-body">
                                            <form action="">
                                                <div className="py-4 text-center">
                                                    <img className="img-fluid rounded-circle img-thumbnail thumb96" src="img/user/02.jpg" alt="Contact"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Picture</label>
                                                    <input className="form-control filestyle" type="file" data-input="false" data-classbutton="btn btn-secondary" data-classinput="form-control inline" data-text="Upload new picture" data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input className="form-control" type="text"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Second Name</label>
                                                    <input className="form-control" type="text"/>
                                                </div>                                                
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control" type="email"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input className="form-control" type="text"/>
                                                </div>
                                                <button className="btn btn-info" type="button">Save</button>
                                            </form>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="account">
                                    <div className="card b">
                                        <div className="card-header bg-gray-lighter text-bold">Account</div>
                                        <div className="card-body">
                                            <form action="">
                                                <div className="form-group">
                                                    <label>Current password</label>
                                                    <input className="form-control" type="password"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>New password</label>
                                                    <input className="form-control" type="password"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Confirm new password</label>
                                                    <input className="form-control" type="password"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Login Code</label>
                                                    <input className="form-control" type="password"/>
                                                </div>
                                                <button className="btn btn-info" type="button">Update password</button>
                                                <p>
                                                    <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card b">
                                        <div className="card-header bg-danger text-bold">Delete account</div>
                                        <div className="card-body bt">
                                            <p>You will be asked for confirmation before delete account.</p>
                                            <button className="btn btn-secondary" type="button">
                                                <span className="text-danger">Delete account</span>
                                            </button>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="signature">
                                    <div className="card b">
                                        <div className="card-header bg-gray-lighter text-bold">Signature</div>
                                        <div className="card-body">
                                            <form action="">
                                            </form>
                                        </div>
                                    </div>
                                </TabPane>                                
                                <TabPane tabId="medical">
                                    <div className="card b">
                                        <div className="card-header bg-gray-lighter text-bold">Account</div>
                                        <div className="card-body">
                                            <form action="">
                                                GET FORMS FROM HSC
                                            </form>
                                        </div>
                                    </div>
                                </TabPane>                                
                                <TabPane tabId="medicallog">
                                    <div className="card b">
                                        <div className="card-header bg-gray-lighter text-bold">Emails</div>
                                        <div className="card-body">
                                            <form action="">
                                                Required?
                                            </form>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="traininglog">
                                    <form action="">
                                        <div className="card b">
                                            <div className="card-header bg-gray-lighter text-bold">Notifications</div>
                                            <div className="card-body bb">
                                                Required?
                                            </div>
                                        </div>
                                    </form>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </div>
            </ContentWrapper>
        );
    }
}

export default UserSettings;