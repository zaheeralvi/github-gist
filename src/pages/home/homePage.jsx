import React, { Component, useState, useEffect } from 'react';
import Input from '../../components/gist/elements/input';
import GistCard from '../../components/gist/gistCard/gist';
import './home.css'
const HomePage = (props) => {

    let [value, setValue] = useState('VedashriDebray')
    let [gistList, setGistList] = useState([])

    // get Gist by username
    const getUserGist = () => {
        if (value != '') {
            fetch(`https://api.github.com/users/${value}/gists`)
                .then(res => res.json())
                .then(gistList => {
                    setGistList(gistList)
                })
        }
    }

    return (
        <div className='home-page'>
            <div className='search-block'>
                <Input type='search' value={value} setValue={setValue} placeholder='Search Gist' />
                <button style={{marginLeft:10,borderRadius:3,border:'1px solid #ccc',}} onClick={getUserGist}>Search</button>
            </div>
            <div className='gistList'>
                {gistList && gistList.length > 0 &&
                    gistList.map((gist) =>
                        <GistCard key={gist.id} data={gist} />
                    )
                }
            </div>
        </div>
    );

}

export default HomePage;