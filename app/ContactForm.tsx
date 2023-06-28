import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LinearIndeterminate from './LinearProgress';
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
        'service_m0phs9o', 
        'template_0pxrb0m', 
        form.current!, 
        'wX_64WmWGLc7q9r6B')
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
      <div className="flex justify-center ">

        <form ref={form} onSubmit={sendEmail} className="flex flex-col self-center md:w-2/5 w-4/5 bg-gradient-to-r from-slate-400 to-white rounded-t-xl mb-14 self-center">
      <div className="flex flex-col">
       
      
      <TextField
        required
          id="outlined"
          label=""
          className="shadow-white inset-shadow bg-gradient-to-r from-slate-400 to-white"
          placeholder="Name"
          name="from_name"
          type='text'
        />
        
         
      <TextField
          required
          id="outlined"
          label=""
          className="bg-gradient-to-r from-slate-400 to-white"

          placeholder="Email"
          name="from_email"
          type='email'
        />
               
        </div>
      <TextField
          required
            className="bg-gradient-to-r from-slate-400 to-white"

          id="filled-textarea"
          label=""
          placeholder="Enter your message"
          name="message"
          type='text'
          multiline
          rows={4}
          
        />
        <div className="flex flex-col ">
        <Button type="submit" value="Send"  variant="contained" endIcon={<SendIcon />}>
          Send
          </Button>
          {isSending && <LinearIndeterminate/>
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