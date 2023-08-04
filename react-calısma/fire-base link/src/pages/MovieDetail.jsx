import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const MovieDetail = () => {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [movieKey, setMovieKey] = useState("")

    const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
    const FEATURED_API = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const VIDEO_API = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`


    const getMovieDetail = async (API) => {

        const res = await axios(API)
        setMovieDetail(res.data)
        const video = await axios(VIDEO_API)
        setMovieKey(video?.data?.results[0]?.key)
    }
    useEffect(() => {
        getMovieDetail(FEATURED_API)
    }, [])

    const { poster_path, title, overview, vote_count, vote_average, release_date } = movieDetail

    return (
        <div className='container '>
            <div className="card mx-auto" style={{ width: '40rem' }}>

                <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} className="card-img-top w-50 mx-auto" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{overview}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Release Date: {release_date}</li>
                    <li className="list-group-item">Rate: {vote_average}</li>
                    <li className="list-group-item">Total Vote: {vote_count}</li>
                </ul>
                <div className="card-body">
                    <Link to={-1} className="card-link">Go Back</Link>

                </div>

                <div className="ratio ratio-16x9">
                    <iframe src={`https://www.youtube.com/embed/${movieKey}`} title="YouTube video" allowFullScreen />
                </div>

            </div>

        </div>
    )
}

export default MovieDetail