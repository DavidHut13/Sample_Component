import React, { useState } from 'react';
import classes from './SetPrice.module.css'

const SetPrice = (props) => {
    const [sliderValue, setEnteredSliderValue] = useState('');


    return (
        <div className={classes.Card}>
            <div>
                <h4>Set up your pricing</h4>
                <p className={classes.greyText}>
                    Please set up your hourly or fixed rate so 
                    that the client is aware of your pricing.
                </p>
            </div>
            <div className={[classes.BtnWrapper,"my-4"].join(" ")}>
                <button  className={[classes.Btn,"mx-2"].join(" ")}>
                    <i class="fas fa-clock"></i><h6 class="m-0 ml-1">Hourly</h6>
                </button >
                <button  className={[classes.Btn,"mx-2"].join(" ")}>
                    <i class="fas fa-cogs"></i><h6 class="m-0 ml-1">Fixed</h6>
                </button >
            </div>
            <div className={classes.amountWrapper}>
                <span className={classes.moneySign}>$</span>
                <h1 className={classes.amount}> {sliderValue} </h1>
                <span className={classes.year}>/ year</span>
            </div>
            <div className={classes.sliderWrapper}>
                <input 
                type="range" 
                min="20" 
                max="300"  
                onChange={event => {
                    setEnteredSliderValue(event.target.value);
                }} 
                value={sliderValue} 
                class={classes.rangeSlider} 
                id="rangeSlider">  
                </input>
                <span className={classes.minValue}>$20</span>
                <span className={classes.maxValue}>$300</span>
            </div>
       
        </div>
    )
}

export default SetPrice;