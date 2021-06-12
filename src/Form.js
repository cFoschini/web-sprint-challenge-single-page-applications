import React from 'react'

export default function Form() {
    return (
        <div>
            <h1>Order Pizza Here!</h1>
            <form id="pizza-form" >

                <label>Name:
                    <input type="text" id="name-input" />
                </label>
                <br/>

                <label>Pizza Size:
                    <select id="size-dropdown">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Xtra Large</option>
                    </select>
                    <br/>

                </label>
                <label>Toppings:
                <br/>
                    <label>Pepperoni<input type="checkbox"/></label>
                    <br/>
                    <label>Green Peppers<input type="checkbox"/></label>
                    <br/>
                    <label>Black Olives<input type="checkbox"/></label>
                    <br/>
                    <label>Banana Peppers<input type="checkbox"/></label>
                </label>
                <br/>

                <label>Special Instructions:
                    <input type="text" />
                </label> 
                <br/>

                <button id="order-button">Order Now!</button>

            </form>
        </div>
    )
}

