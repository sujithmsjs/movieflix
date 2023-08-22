
import { getAllMovies } from './apis/MovieService'
import { useEffect, useState } from 'react';

const MoviesTable = () => {

    const [movies, setMovies] = useState([]);
    useEffect(
        () => {
            getAllMovies()
                .then(
                    results => {
                        console.info(results.data);
                        setMovies(results.data);
                    }
                ).catch(error => {
                    console.info('Error: ', error);
                })

            return () => {

            }
        }, []
    );





    return (<table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>genre</th>
                <th>director</th>
                <th>duration</th>
                <th>rating</th>
                <th>releaseDate</th>
                <th>collection</th>
            </tr>
        </thead>
        <tbody>
            {
                movies.map(
                    (e, i) => (
                        <tr key={i}>
                            <td>{e.title}</td>
                            <td>{e.genre}</td>
                            <td>{e.director}</td>
                            <td>{e.duration}</td>
                            <td>{e.rating}</td>
                            <td>{e.releaseDate}</td>
                            <td>{e.collection}</td>
                        </tr>
                    )
                )
            }

        </tbody>
    </table>);
}

export default MoviesTable;