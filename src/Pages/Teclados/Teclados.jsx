import React from 'react'
import { items } from '../../helper/items'

const Teclados = () => {
    return (
        <>
        <div >
        <h2>Teclados</h2>
        </div>
        {
            items.map((item) => {
                return (
                    <div>
                    {item.stock}
                    </div>
                )
            })
        }
        </>
    )
}

export default Teclados