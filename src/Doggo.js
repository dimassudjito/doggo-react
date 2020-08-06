import React from 'react'


const Doggo = ({name, temperament, pic}) => {
    return(
        <div>
            <img className="Image" src={pic} alt="good boy"/>
            <p>
                Hello friends, I am a(n) {name}, 
                and I love balls and naps.
                I am {temperament}, and a total good boy.
            </p>

        </div>
    )
}

export default Doggo
