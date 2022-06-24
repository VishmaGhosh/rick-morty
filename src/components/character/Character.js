import React,{useState, useEffect} from 'react'
import CharacterCard from './CharacterCard';
import classes from './Character.module.css'

const Character = (props) => {
  // console.log("character", props.items);
  const [list, setList] = useState([])

  useEffect(() => {
    setList(props.items)
  }, [list, setList, props.items])

  return (
    <div className={classes.container}>
      {
        list.map((item, id) => <CharacterCard key={id} item={item} />)
      }
    </div>
  )
}

export default Character