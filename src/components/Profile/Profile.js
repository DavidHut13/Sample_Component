import classes from './Profile.module.css';
import React from 'react';
import Badge from 'react-bootstrap/Badge'


const Profile = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.BackgroundPic}>
                <div className={classes.ProfilePic}></div>
            </div>
            <div className={classes.cardBody}>
                <div className={classes.ProfileInfo}>
                    <h4 className={classes.userName}>Filip Martin Jose</h4>
                    <p className={[classes.greyText, 'm-0'].join(" ")}>Los Angeles</p>
                    <Badge className={classes.pillLevel} pill variant="primary">Pro Level</Badge>
                </div>
                <div className={classes.ProfileStats}>
                    <div>
                        <h6 className={classes.statHeader}>Followers</h6>
                        <h4 className={classes.stat}>980</h4>
                    </div>
                    <div>
                        <h6 className={classes.statHeader}>Projects</h6>
                        <h4 className={classes.stat}>142</h4>
                    </div>
                    <div>
                        <h6 className={classes.statHeader}>Rank</h6>
                        <h4 className={classes.stat}>129</h4>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Profile;