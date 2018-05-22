import React from 'react'

class FetchData extends React.Component {
    componentDidMount(){
        const {fetchData, url} = this.props
        fetchData(url)
    }

    render(){

        const {payloads} = this.props

        return (
            <div>
                {
                    payloads.map((payload, i)=>(
                        <div key={i} >{payload.name}</div>
                    )
                )}
            </div>
        )
    }
}

export default FetchData