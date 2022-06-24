import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const EpisodeItem = (props) => {
  // console.log(props.item);
  return (

    <Link to={`/episode/${props.item.id}`} style={{ textDecoration: "none" }}>
      <Card
        bg="danger"
        key="danger"
        text="white"
        style={{ width: '18rem' }}
        className="mb-2 m-2"
      >
        <Card.Header className='text-dark fs-3'>{props.item.episode}</Card.Header>
        <Card.Body>
          <Card.Title> {props.item.name} </Card.Title>
          <Card.Text>
            {props.item.air_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default EpisodeItem