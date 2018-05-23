import React from 'react'

class Product extends React.Component { 
    componentDidMount(){

        const {clearData, fetchData, match} = this.props  
        clearData()
        fetchData(match.params.item_id)
    }

    render(){
        
        const {id, category, name, material, price, description} = this.props

        return(
            <div>
                <h3>{name}</h3>
                <div>{id}</div>
                <div>{category}</div>
                <div>{material}</div>
                <div>{price}</div>
                <div>{description}</div>
            </div>
        )
    }  
}

export default Product