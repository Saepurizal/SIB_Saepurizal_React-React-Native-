import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Jadwal from './PastMeetUpp';

const PastMeetUp = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="row mt-4 col-11">
        <div>
          <h5>Past Meetup</h5>
        </div>

        <div className="row mt-2 mb-4">
          <Jadwal jadwal="27 November 2017" judul="#39 JakartaJS April Meetup with kumparan" des="113 went" />
          <Jadwal jadwal="27 Oktober 2017" judul="#38 JakartaJS April Meetup with Blili" des="113 went" />
          <Jadwal jadwal="27 September 2017" judul="#37 JakartaJS April Meetup with Hacktiv8" des="110 went" />
        </div>
      </div>
    </div>
  );
}

export default PastMeetUp;