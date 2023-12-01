import React, { useState } from 'react';
import { Button, Dialog, DialogContent, TextField, IconButton, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { sendMessage } from '../Api'; // Import the sendMessage function

const StyledIconButton = styled(IconButton)({
   position: 'fixed',
   bottom: '20px',
   right: '20px',
   width: '80px',
   height: '80px',
   backgroundColor: '#007bff',
});

const StyledDialog = styled(Dialog)({
   '& .MuiDialog-paper': {
     position: 'fixed',
     right: '20px',
     height: '80%', // Increase the height to 80%
     width: '30%',
     overflow: 'scroll',
   },
});

function Chatbot() {
   const [open, setOpen] = useState(false);
   const [message, setMessage] = useState('');
   const [chat, setChat] = useState([]);

   const handleClickOpen = () => {
       setOpen(true);
   };

   const handleClose = () => {
    console.log('Sending message:', message);
       setOpen(false);
   };

   const handleSendMessage = () => {
       setChat([...chat, { sender: 'user', message: message }]);
       setMessage('');

       // Send the message to the server
       sendMessage(message)
           .then(response => {
            console.log('Received response:', response.data.message);
               setChat([...chat, { sender: 'bot', message: response.data.message }]);
           })
           .catch(error => {
               console.error('Error sending message', error);
           });
   };

   return (
       <div>
           <StyledIconButton onClick={handleClickOpen}>
               <SendIcon />
           </StyledIconButton>
           <Typography variant="h6" sx={{ position: 'fixed', left: '10px', right: '10px' }}>
               Chatbot
           </Typography>
           <StyledDialog open={open} onClose={handleClose}>
               <DialogContent>
                  {chat.map((chatMessage, index) => (
                      <p key={index}>
                          <strong>{chatMessage.sender}:</strong> {chatMessage.message}
                      </p>
                  ))}
                  <TextField variant="outlined" value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your question here" fullWidth sx={{ marginBottom: '10px' }} />
                  <Button variant="contained" color="primary" onClick={handleSendMessage}>Send</Button>
               </DialogContent>
           </StyledDialog>
       </div>
   );
}

export default Chatbot;
