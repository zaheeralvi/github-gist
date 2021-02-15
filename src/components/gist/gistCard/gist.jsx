import React, { useState, useEffect } from 'react';
import './gist.css'

const GistCard = ({ data }) => {

    const [forks, setForks] = useState([])

    // get forks list for each gist
    useEffect(() => {
        if (data.forks_url) {
            fetch(data.forks_url)
                .then(res => res.json())
                .then(forks => {
                    setForks(forks.slice(0, 3))
                })
        }
    }, [data])

    return (
        <div className='gist-card'>
            <h4>{data.description}</h4>
            <div>
                {data.files &&
                    Object.keys(data.files).map(file => (
                        <a title='CLick to view contents' className='tag' key={file} target='_blank' href={data.files[file].raw_url}>
                            <p>{data.files[file].type.split('/')[0]}</p>

                        </a>
                    ))
                }
                <p></p>
            </div>
            <h6 className='heading'>Forks List</h6>
            <div className='forks'>
                {forks &&
                    forks.map(fork =>(
                        <div key={fork.id} className='fork'>
                            <img className='avatar' src={fork.owner.avatar_url} />
                            <span className='username'>{fork.owner.login}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GistCard