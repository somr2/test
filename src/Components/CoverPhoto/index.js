import React from 'react'

const CoverPhoto = ({photos}) => {
    return (
        <div>
            {photos.map((photo, index) => (
                <div key={index}>{photo}</div>
            ))}
        </div>
    )
}

export default CoverPhoto