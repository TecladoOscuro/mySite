import React from 'react'
import ReactPlayer from "react-player"
const Video = () => {

    return (
        <div>
            <ReactPlayer
                url="https://youtu.be/aAkMkVFwAoo?t=2"
                loop={true}
                controls={false}
                height={'500px'}
                width={'840px'}
            />
      </div>
    )
}

export default Video
