import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    margin: 0 auto;
    width: 100%;
`

const Wrapper = styled.div`
   display: block;
   text-align: left;
   width: 500px;
   margin: auto;
`

class Product extends React.Component { 
    componentDidMount(){

        const {clearData, fetchData, match} = this.props  
        clearData()
        fetchData(match.params.item_id)
    }

    render(){
        
        const {id, category, name, material, price, description} = this.props

        return(
            <Container>
                <Wrapper>
                    <h2>{name}</h2>
                    <div>{id}</div>
                    <div>{category}</div>
                    <div>{material}</div>
                    <div>{price}</div>
                    <div>{description}</div>
                </Wrapper>
            </Container>
        )
    }  
}

export default Product