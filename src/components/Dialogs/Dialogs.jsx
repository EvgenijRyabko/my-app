import React from 'react';
import classes from './Dialogs.module.css';

const DialogItem = ({ name }) => {
    return (
        <section className={ classes.dialog }>
            { name }
        </section>
    );
}

const Dialogs = () => {
    return (
        <section className={ classes.dialogs }>
            <div className={ classes['dialogs-items']}>
                <div className={ classes.dialog }>Andrew</div>
                <div className={ classes.dialog }>Mark</div>
                <div className={ classes.dialog }>Slavyan</div>
                <div className={ classes.dialog }>Sveta</div>
                <div className={ classes.dialog }>Yarik</div>
            </div>
            <div className={ classes.messages}>
                <div className={ classes.message }>Hi</div>
                <div className={ classes.message }>How are your course?</div>
                <div className={ classes.message }>Yo</div>
            </div>
        </section>
    );
}

export default Dialogs;