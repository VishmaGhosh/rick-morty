import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    // console.log("card",props.item);
    const [character, setCharacter] = useState({})

    const fetchCharacter = () => {
        axios.get(props.item)
            .then(res => {
            setCharacter(res.data)
            })
        .catch(
            err => console.log(err)
        )
    }

    useEffect(() => {
        fetchCharacter();
    }, [])
    return (
        <Link to={`/${character.id}`} style={{ textDecoration: "none" }}>
            <Card style={{ width: '10rem' }} className="mb-2 m-2 shadow-lg bg-dark text-white">
                <Card.Img variant="top" src={character.image} alt='character' />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        {character.species}
                    </Card.Text>
                </Card.Body>
            </Card>
      </Link>      
      
  )
}

export default CharacterCard