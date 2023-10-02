import React from 'react'
import { items } from '../../helper/items'
import { Link } from 'react-router-dom'

const Productos = () => {
    return (
        <>
        <div>
        <h2>Productos</h2>
        </div>
        {
            items.map((item) => {
                return (
                    <div>
                    <Link to={`${item.id}`}>{item.nombre}</Link>
                    </div>
                )
            })
        }
        </>
    )
}

export default Productos