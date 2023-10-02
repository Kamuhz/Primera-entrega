import React from 'react'
import { items } from '../../helper/items'

const Ssd = () => {
    return (
        <>
        <div >
        <h2>Discos duros & SSD</h2>
        </div>
        {
            items.map((item) => {
                return (
                    <div>
                    {item.categoria}
                    </div>
                )
            })
        }
        </>
    )
}

export default Ssd