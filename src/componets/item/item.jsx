import React from 'react'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../helper/items.js'

const Item = () => {
    const { itemId } = useParams()
    const Products = getItemById(itemId)

    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div>
                <h2>Item: <p>{Products.nombre}</p></h2>
                <h3>Id: {Products.id}</h3>
            </div>

        </div>
        </>
    )
}

export default Item