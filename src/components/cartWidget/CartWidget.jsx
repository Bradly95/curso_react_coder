import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri"
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <p className='cart_icon'><RiShoppingCart2Fill />
            <div className='red_notice'>2</div>
        </p>
    )
}
