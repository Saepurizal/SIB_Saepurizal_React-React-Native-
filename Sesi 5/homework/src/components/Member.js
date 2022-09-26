import React from 'react';
import pict from '../assets/pic.jpeg'
import {Card, Row, Col} from 'react-bootstrap';

const Member = () => {
    return (
        <div className="row justify-content-center">
            <div className="row mt-4 col-11">
                <div>
                    <h5>Members</h5>
                </div>

                <div className="row mt-2">
                    <Row>
                        <Col md="{12}">
                            <Card className="border-0 rounded shadow-sm">
                                <Card.Body className="p-4">
                                    <Row>
                                        <Col className="col-auto">
                                            <div className="bg-large">
                                            <img
                                                src={pict}
                                                alt="icon-logo"
                                                width="100"
                                                
                                            />
                                            </div>
                                        </Col>
                                        <Col className="m-0 mx-auto">
                                            <Row>
                                                <Col className="col-2">Organizers</Col>                                 
                                            </Row>
                                            <Row className = "row mt-3">
                                                <Col className="col-4">Saepurizal</Col>
                                                <Col className="col-7">4 others</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
      );
    }

export default Member;