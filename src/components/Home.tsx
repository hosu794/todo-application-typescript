import React from 'react';
import Album from './Album';


type HomeType = {
    title: string
}


const Home = (props: HomeType) => {

    return (
        <React.Fragment>
          <Album />
        </React.Fragment>
    )
}


export default Home