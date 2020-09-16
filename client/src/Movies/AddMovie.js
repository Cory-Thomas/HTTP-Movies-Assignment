import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    title:'',
    director: '',
    metascore: '',
    id: Date.now(),
    stars: []
}

const AddMovie = ({ newList, setMovieList }) => {

    const [ formValues, setFormValues ] = useState( initialFormValues )
    const history = useHistory()

    const changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        setFormValues({
            ...formValues,
            [ name ]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault()

        const newMovie = {
            id: formValues.id,
            title: formValues.title,
            director: formValues.director,
            metascore: formValues.metascore
        };

        axios
        .post(`http://localhost:5000/api/movies/`, newMovie)
        .then( res => {
            setMovieList([ newMovie, ...newList ])
            history.push(`/`)
        })
        .catch(err => console.log(err))
        
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h3>Title</h3>
                <input
                    type="string"
                    name="title"
                    onChange={ changeHandler }
                    value={ formValues.title }
                />
                <h3>Director</h3>
                <input
                    type="string"
                    name="director"
                    onChange={ changeHandler }
                    value={ formValues.director }
                />
                <h3>Metascore</h3>
                <input
                    type="string"
                    name="metascore"
                    onChange={ changeHandler }
                    value={ formValues.metascore } />
                <button>Add</button>
            </form>
        </div>
    )
};

export default AddMovie;