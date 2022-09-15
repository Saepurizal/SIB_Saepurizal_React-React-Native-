import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

const NextMeetUp = () => {
    return (
        <div className="row justify-content-center">
            <div className="row mt-4 col-11">
                <div>
                    <h5>Next Meetup</h5>
                </div>

                <div className="row mt-2 col md-12">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <Card.Title>Awesome meetup an event</Card.Title>
                            <Card.Header>25 January 2019</Card.Header>
                            <Card.Text>
                                Hello, JavaScript and Node.js Ninjas!
                                <br />
                                Get ready for our monthly meetup JakartaJS!This Will be our fifth of 2018
                                <br />
                                The meetup format will contain some short stories and technical talks.
                                <br />
                                If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
                                <br />
                                <br />
                                Remember to bring a photo ID to get through building security.
                                <br />
                                <br />
                                -----
                                <br />
                                See you there!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default NextMeetUp;