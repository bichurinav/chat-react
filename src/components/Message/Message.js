import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 300,
        display: 'inline-block',
        padding: theme.spacing(1, 6, 2, 1),
        margin: theme.spacing(1, 2, 1, 2),
        position: 'relative',
        borderRadius: 10,
    },
    user: {
        color: theme.palette.primary.main,
    },
    message: {
        fontSize: '0.9rem',
    },
    messageOtherUser: {
        alignSelf: 'flex-end',
    },
    time: {
        position: 'absolute',
        right: '3px',
        bottom: '3px',
    },
}));

function Message({ user, message, date, messageOtherUser }) {
    const classes = useStyles();
    return (
        <Paper
            className={
                messageOtherUser
                    ? `${classes.paper} ${classes.messageOtherUser}`
                    : classes.paper
            }
        >
            <Typography className={classes.user} variant="body2">
                {user}
            </Typography>
            <Typography className={classes.message}>{message}</Typography>
            <span className={classes.time} variant="body2">
                {date}
            </span>
        </Paper>
    );
}

export default Message;
