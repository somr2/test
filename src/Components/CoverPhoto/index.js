import React from 'react'
// import {test} from 'src/Components/HeaderNav/index.js'

const CoverPhoto = ({photos}) => {
    return (
        <div>
            {/* {test} */}
            {photos.map((photo, index) => (
                <div key={index}>{photo}</div>
            ))}
        </div>
    )
}

export default CoverPhoto