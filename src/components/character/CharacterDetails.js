import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CharacterDetails = () => {

  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState({})
  const params = useParams();
  const fetchCharacter = () => {
    axios.get(`https://rickandmortyapi.com/api/character/${params.cId}`)
      .then(res => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch(
        err => console.log(err)
      )
  }

  useEffect(() => {
    fetchCharacter();
  }, [])

  if (loading) return (
    <h1 className='text-center text-danger'>Loading...</h1>
  )
  else if (!loading) {
    return (
      <div className='m-2 bg-secondary rounded shadow'>
        <div className='row rounded'>
          <div className='col-3 m-2 rounded'><img className='rounded shadow-lg img-fluid' alt='character' src={character.image} /></div>
          <div className='col m-2 text-white'>
            <div className='text-center fs-1 bg-primary shadow rounded fw-bold'>{character.name}</div>
            <div className='d-flex text-start fs-3 rounded'>
              <div className='flex'>Gender:</div>
              <div className='text-warning text-uppercase px-2'> {character.gender}</div>
            </div>
            <div className='d-flex text-start fs-3 rounded'>
              <div className='flex'>Species:</div>
              <div className='text-warning text-uppercase px-2'> {character.species}</div>
            </div>
            <div className='d-flex text-start fs-3 rounded'>
              <div className='flex'>Status:</div>
              <div className='text-warning text-uppercase px-2'> {character.status}</div>
            </div>
            <div className='d-flex text-start fs-3 rounded'>
              <div className='flex'>Origin:</div>
              <div className='text-warning text-uppercase px-2'> {character.origin.name}</div>
            </div>
            <div className='d-flex text-start fs-3 rounded'>
              <div className='flex'>Type:</div>
              <div className='text-warning text-uppercase px-2'> {character.type}</div>
            </div>
          </div>
        </div>
      </div>

    )
  }
  
}

export default CharacterDetails