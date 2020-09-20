import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    id: 0,
    title: '',
    director: '',
    metascore: 0,
    stars: []
};

const UpdateMovie = ({ setMovieList, movies }) => {
    const [ formValues, setFormValues ] = useState( initialFormValues );
    const { id } = useParams();
    const history = useHistory();

    console.log(formValues)

    useEffect( () => {
        axios
            .get( `http://localhost:5000/api/movies/${id}` )
            .then( response => {
                console.log(response.data)
                setFormValues(
                    response.data
                )
            })
            .catch(err => console.log( err ))
    }, [ id ])

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        setFormValues({
            ...formValues,
            [ name ]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .put( `http://localhost:5000/api/movies/${id}`, formValues )
            .then( response => {
                console.log(response)
                setMovieList([...movies, response.data])
                history.push( `/movies/${id}` )
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Director</h3>
                <input
                    type="string"
                    name="director"
                    onChange={ changeHandler }
                    value={ formValues.director }
                />
                <h3>Metascore</h3>
                <input
                    type="number"
                    name="metascore"
                    onChange={ changeHandler }
                    value={ formValues.metascore } 
                />
                <button type='submit'>Update</button>
            </form>
        </div>
    )
};

export default UpdateMovie;