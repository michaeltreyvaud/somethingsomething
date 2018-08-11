import React from 'react';
import { translate } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, } from 'reactstrap';

class CleaningTask extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   <div>Cleaning Task
                   </div>
                </div>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-thin">Single view content</h2>
                        <p>
                            Stuff Goes Here
                        </p>
                    </Col>
                </Row>
            </ContentWrapper>
        );
    }
}

export default translate('translations')(CleaningTask);