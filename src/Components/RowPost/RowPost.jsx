import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl } from '../../Constants/Contstants'
import axios from '../../Axios'
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
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img className={props.isSmall ?'smallPoster' :'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}

            </div>

        </div>
    )
}

export default RowPost
