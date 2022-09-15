import React from 'react';
import { Button, Card } from 'react-bootstrap';


const PastMeetUpp = (props) => {
  return (
    <div className="col-md">
      <Card>
        <Card.Header>{props.jadwal}</Card.Header>
        <Card.Body>
          <Card.Title>{props.judul}</Card.Title>
          <Card.Text>
            <strong>{props.des}</strong>
          </Card.Text>
          <Button variant="secondary">view</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PastMeetUpp;