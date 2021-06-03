import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography color="textSecondary" align="center">
            {'Copyright © '}
            <Typography component="span" color="inherit">
                Torch Chat
            </Typography>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Auth() {
    const [roomID, setRoomID] = useState('');
    const [username, setUsername] = useState('');
    const classes = useStyles();

    const authHandler = (e) => {
        e.preventDefault();
        if (!(roomID && username)) return;
        console.log(roomID, username);
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <MeetingRoomOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Torch Chat
                </Typography>
                <form
                    onSubmit={(e) => authHandler(e)}
                    className={classes.form}
                    noValidate
                >
                    <TextField
                        onChange={(e) => setRoomID(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="ID комнаты"
                        type="number"
                        name="roomID"
                        autoFocus
                    />
                    <TextField
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="Ваш клёвый ник"
                    />
                    <Button
                        type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Войти
                    </Button>
                </form>
            </div>
            <Box mt={2}>
                <Copyright />
            </Box>
        </Container>
    );
}
