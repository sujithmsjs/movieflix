
import { getAllMovies } from './apis/MovieService'
import { useEffect, useState } from 'react';

const MoviesTable = () => {

    const [movies, setMovies] = useState([]);
    useEffect(
        () => {
            return () => {

            }
        }, []
    );

    getAllMovies().then(
        results => {
            console.info(results);
        }
    ).catch()



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


        </tbody>
    </table>);
}

export default MoviesTable;