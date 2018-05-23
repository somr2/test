import React from 'react'
import { Redirect } from "react-router-dom";

class ProductListing extends React.Component{
    componentWillUnmount(){
        const {onRedirect} = this.props
        onRedirect()
        
    }
    render(){
        const {products, onClick, redirect, whereTo} = this.props
        console.log(redirect, whereTo)
        if (redirect) {
            // console.log('redirect')
            return <Redirect push to={`/necklace/${whereTo}`} />;
        }
        return (
            <div>
                {products.map((product,i)=>(
                    <div key={i} onClick={() => onClick(product.id)}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.material}</div>
                        <div>{product.description}</div>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

export default ProductListing