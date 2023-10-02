import React from 'react'
import { items } from '../../helper/items'
import { Link } from 'react-router-dom'

const Productos = () => {
    return (
        <>
        <div>
        <h2 style={{display:"flex", justifyContent:"center", marginTop: "50px"}}>Productos</h2>
        </div>
        {
            items.map((item) => {
                return (
                    <div style={{display:"flex", justifyContent:"center",}}>
                    <Link to={`${item.id}`}>{item.nombre}</Link>
                    </div>
                )
            })
        }
        </>
    )
}

export default Productos