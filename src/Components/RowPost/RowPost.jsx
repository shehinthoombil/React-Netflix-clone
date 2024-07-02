import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl } from '../../Constants/Contstants'
import axios from '../../Axios'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response);
            setMovies(response.data.results)
        }).catch(err => {
            // alert('Network Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const handleMovie = (id)=>{
        setMovies(movies)
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}

            </div>
            <YouTube opts={opts} videoId="2g811Eo7K8U" />
        </div>
    )
}

export default RowPost
