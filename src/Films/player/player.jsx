import React from 'react';
import ReactPlayer from 'react-player';
import './player.css';


export const Player = (props) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                playing={false}
                controls={true}
                className='react-player'
                url={props.video}
                width='100%'
                height='100%'
            />
        </div>
    )
}