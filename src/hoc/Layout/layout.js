import React from 'react';
import Profile from '../../components/Profile/Profile'
import SetPrice from '../../components/SetPrice/SetPrice'
import PaymentPlan from '../../components/PaymentPlan/PaymentPlan'
import classes from './layout.module.css'
const Layout = (props) => {
    return (
        <div className={classes.Wrapper}>
            <div class="mt-5 mx-3">
                <PaymentPlan/>
            </div>
            <div class="d-flex flex-column">
                <div class="mt-5 mx-3">
                    <Profile/>
                </div>
                <div class="mt-3 mx-3">
                    <SetPrice/>
                </div>  
            </div>       
        </div>
    )
}

export default Layout