import React from 'react';
import classes from './PaymentPlan.module.css'
import Button from 'react-bootstrap/button'
const PaymentPlan = (props) => {
    return (
        <div className={classes.Card}>
            <div>
                <h3>Upgrade your plan</h3>
                <p className={classes.greyText}>
                    Please make the payment to start enjoying 
                    all the features of our premium plan as
                    soon as possible.
                </p>
            </div>
            <div className={classes.SelectedPlan}>
                <div class="d-flex flex-row justify-content-center align-items-center my-3 ml-4">
                    <div className={classes.BlueSquare}>
                        <i class="fas fa-briefcase fa-2x"></i>
                    </div>
                    <div class="ml-4">
                        <h5>Small Business</h5>
                        <p className={classes.blueText}>Change plan</p>
                    </div>
                </div>
                
                <div className={classes.amountWrapper}>
                    <span className={classes.moneySign}>$</span>
                    <h1 className={classes.amount}> 8,350 </h1>
                    <span className={classes.year}>/ year</span>
                </div>
            </div>
            <div className={classes.PaymentDetails}>
                <h5 className={[classes.PaymentHeader, "mt-5"].join(" ")}>Payment details</h5>
                <div class="d-flex flex-row justify-content-between align-items-center my-4">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <i class="fab fa-cc-visa fa-3x"></i>
                        <div class="ml-4">
                            <p class="m-0 font-weight-bold">Credit Card</p>
                            <p class={[classes.greyText,"m-0"].join(" ")}>2344 xxxx xxxx 8880</p>
                        </div>
                    </div>
                    <input className={classes.CvcInput} placeholder="CVC" size="2"></input>
                </div>
                <div class="d-flex flex-row justify-content-between align-items-center my-4">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <i class="fab fa-cc-visa fa-3x"></i>
                        <div class="ml-4">
                            <p class="m-0 font-weight-bold">Credit Card</p>
                            <p class={[classes.greyText,"m-0"].join(" ")}>2344 xxxx xxxx 8880</p>
                        </div>
                    </div>
                    <input className={classes.CvcInput} placeholder="CVC" size="2"></input>
                </div>
                <h6 className={[classes.blueText, "mb-4"].join(" ")}>Add payment method</h6>
            </div>
            <div className={classes.InputWrapper}>
               <input className={classes.EmailInput} placeholder="Email address"></input> 
               <Button className={[classes.PayBtn,'py-4 mt-4'].join(" ")} block size="lg">Proceed to payment  <i class="fas fa-arrow-right"></i></Button>
            </div>
        </div>
    )
}

export default PaymentPlan;