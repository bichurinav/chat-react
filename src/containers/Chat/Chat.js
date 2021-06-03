import React, { useState } from 'react';
import { Container, Box, TextField, Typography } from '@material-ui/core';
import { Message } from './../../components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formChat: {
        margin: theme.spacing(2, 0, 1, 0),
    },
}));

function Chat() {
    const [messageField, setMessageField] = useState('');
    const clasess = useStyles();

    const chatHandler = (e) => {
        e.preventDefault();
        if (!messageField) return;
        console.log(messageField);
    };

    return (
        <div className="chat">
            <Container maxWidth="sm">
                <div>
                    <Box component="header">
                        <Typography>ID комнаты: 123</Typography>{' '}
                        <Typography>Ваш ник: dancer</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Message
                            user="test_1"
                            message="Привет, чувак"
                            date="15:39"
                            messageOtherUser={true}
                        />
                        <Message
                            user="test_2"
                            message="Хай, у мя такое случилось, епамать"
                            date="15:41"
                        />
                    </Box>
                    <form
                        className={clasess.formChat}
                        onSubmit={(e) => chatHandler(e)}
                        noValidate
                    >
                        <TextField
                            onChange={(e) => setMessageField(e.target.value)}
                            value={messageField}
                            placeholder="Сообщение..."
                            fullWidth
                        ></TextField>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Chat;
