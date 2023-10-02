import React from 'react'
import { items } from '../../helper/items'

const Monitores = () => {
    return (
        <>
        <div >
        <h2>Monitores</h2>
        </div>
        {
            items.map((item) => {
                return (
                    <div>
                    {item.id}
                    </div>
                )
            })
        }
        </>
    )
}

export default Monitores