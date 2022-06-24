import React,{useEffect, useState, Fragment} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Card } from 'react-bootstrap'
import Character from '../character/Character'

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState({})
  const params = useParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${params.eId}`)
      .then(res => {
        setEpisode(res.data);
        setLoading(true);
      })
      .catch(err => {
      console.log(err);
      })
  }, [params.eId])
  return (
    <Fragment>
      <Card className="text-center bg-warning mt-5">
        <Card.Header className='bg-danger fs-3'>{episode.episode}</Card.Header>
        <Card.Body>
          <Card.Title className='fs-1'>{episode.name}</Card.Title>
          <Card.Text>
            {episode.air_date}
          </Card.Text>
        </Card.Body>
        <Card.Title className='fs-4'>Characters</Card.Title>
      </Card>
      {loading && <Character items={episode.characters} />}
    </Fragment>
    
  )
}

export default EpisodeDetails