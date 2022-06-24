import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeItem from './EpisodeItem';
import classes from './Episode.module.css'

const Episode = () => {
    const [episode, setEpisode] = useState([]);
    const fetchData = function () {
        axios.get(`https://rickandmortyapi.com/api/episode`)
            .then(res => {

                setEpisode(res.data.results);
                // console.log(episode);
            })
            .catch(err => {
                console.log(err);

            })
    }

    useEffect(() => {
        fetchData();
    }, [setEpisode])


    return (
        <div className={classes.container}>
            {
                episode.map(item => <EpisodeItem key={item.id} item={item} />)
            }
        </div>
    )
}

export default Episode