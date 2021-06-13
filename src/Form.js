import React, { useState, useEffect } from 'react';
import Confirm from './Confirm';
import * as Yup from "yup"

const Form = () => {
    const [order, setOrder] = useState({
        name: '',
        size: '',
        pepperoni: false,
        peppers: false,
        mushrooms: false,
        olives: false,
        onions: false,
        special: ''
    })

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const { name, size, pepperoni, peppers, mushrooms, olive, onions, special} = order;

    const changeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setOrder({...order, [e.target.name]: value});
    }

    const schema = Yup.object().shape({
        name: Yup
          .string()
          .required("Name is a required field")
          .min(2, "Name must be at least 2 characters")
    })

    const submitHandler = e => {
        e.preventDefault();
        console.log(order);
        setOrderPlaced(true);
    }

    useEffect(()=>{
        schema.isValid(order).then(valid => setDisabled(!valid))
    }, [order, schema])

    return (
        <div>
        <h2>Pizza Station</h2>
        {disabled && <p style={{color: 'red'}}>* Name must be more than 2 characters</p>}
        { !orderPlaced && <form id="pizza-form" onSubmit={submitHandler}>
            <label>
                Name
                <input type="text" name="name" id="name-input" value={name} onChange={changeHandler}/>
            </label>
            <br/>
            <label>
                Choose a Size
                <select name="size" id="size-dropdown" value={size} onChange={changeHandler}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br/>
            </label>
            <p>Choose your Toppings</p>
            <label>
                <input checked={pepperoni} type="checkbox" name="pepperoni" id="pepperoni" value={pepperoni} onChange={changeHandler}/>
                Pepperoni
            </label>
            <label>
                <input checked={peppers} type="checkbox" name="peppers" id="peppers" value={peppers} onChange={changeHandler}/>
                Green Peppers
            </label>
            <label>
                <input checked={mushrooms} type="checkbox" name="mushrooms" id="mushrooms" value={mushrooms} onChange={changeHandler}/>
                Mushrooms
            </label>
            <label>
                <input checked={olive} type="checkbox" name="olive" id="olive" value={olive} onChange={changeHandler}/>
                Olives
            </label>
            <label>
                <input checked={onions} type="checkbox" name="onions" id="onions" value={onions} onChange={changeHandler}/>
                Onions
            </label> 
            <br/>
            <br/>
            <label>
                Special Instructions 
                <input  name='special' id ="special" value={special} onChange={changeHandler}/>
            </label>
            <br/>
            <button id="order-button" type="submit" disabled={disabled}>ORDER</button>
            
        </form> }
        { orderPlaced && <Confirm order={order}/> }
        </div>
    )
}

export default Form;