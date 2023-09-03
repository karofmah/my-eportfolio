import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function ContactForm(props:any){
    const form = useRef<HTMLFormElement>(null);
    const [openSuccess, setOpenSuccess] = useState<boolean>(false);
    const [openError, setOpenError] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);

    const textFieldStyle = "my-6 w-4/5 self-center"


    const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
    
      if (reason === 'clickaway') {
        return;
      }
    
      setOpenSuccess(false);
    };

    const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
    
      if (reason === 'clickaway') {
        return;
      }
    
      setOpenError(false);
     
    };
  const sendEmail = (e:any) => {
    e.preventDefault();
    setIsSending(true)
    emailjs
    .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, 
        form.current!, 
        process.env.NEXT_PUBLIC_API_KEY!)
      .then((result:any) => {
          setOpenSuccess(true);
          setIsSending(false)
          e.target.reset()
      }, (error:any) => {
          setOpenError(true);
          setIsSending(false)

      });
  };
    return(
      <div className="flex justify-center">

        <form ref={form} onSubmit={sendEmail} className="flex flex-col self-center md:w-2/5 w-4/5 bg-gradient-to-br from-slate-500 to-slate-200 rounded-xl mb-14 self-center">
      <div className="flex flex-col ">
       
      <TextField
        required
          id="outlined"
          label=""
          className={textFieldStyle}
          placeholder="Name"
          name="from_name"
          type='text'
        />
        
         
      <TextField
          required
          id="outlined"
          label=""
          className={textFieldStyle}
          placeholder="Email"
          name="from_email"
          type='email'
        />
               
        </div>
      <TextField
          required
          className={textFieldStyle}
          id="filled-textarea"
          label=""
          placeholder="Enter your message"
          name="message"
          type='text'
          multiline
          rows={4}
          
        />
        <div className="flex flex-col ">
        <Button className= "w-3/5 self-center my-4" type="submit" value="Send"  variant="contained" endIcon={<SendIcon />}>
          Send
          </Button>
          {isSending &&
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
            </Box>
}

        </div>
      
    </form>

    <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
  <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
    Message sent successfully!
  </Alert>

 
</Snackbar>

<Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
<Alert  onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
    Message could not be sent
  </Alert>
</Snackbar>


    </div>

    )
}