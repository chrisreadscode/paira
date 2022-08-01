import Image from "next/image";
import styles from "../styles/Login.module.css";
import _Head from "../components/_Head.js";
import Footer from "../components/Footer.js";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal"
import Divider from "@mui/material/Divider"
import { useState } from 'react';

export default function Login() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      firstName: event.target.first.value,
      lastName: event.target.last.value,
    };

    console.log(data);

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/hello";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    alert(`Is this your full name: ${result.data}`);
  };

  const handleClose = async (event) => {

  };

  const handleOpen = async (event) => {
    setOpen(true);
    return
  };

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <_Head />
      <main
        className={styles.main}
      >
        <div id={styles.div}>
          <Image
            alt="paira logo"
            id={styles.logo}
            height="50px"
            src="/../public/paira-logo.png"
            width="200px"
          />
          <p id={styles.createAccount}>
            Create an account to enjoy all the services without any ads free!
          </p>
          <form action="api/login" id={styles.loginForm} method="post" onSubmit={handleSubmit}>
            <TextField className={styles.input} id="email" fullWidth placeholder="Email" required type="email"></TextField>
            <br/>
            <TextField className={styles.input} id="password" fullWidth placeholder="Password" required type="password"></TextField>
            <br/>
            <Button className={styles.button} fullWidth type="submit" size="large" variant="contained">Log In</Button>
          </form>
          <Button style={{margin: "auto", width: "fit-content"}}>Forgot Password?</Button>
          <Divider style={{margin: "2vh auto", width: "80%"}}></Divider>
          <Button color="success" onClick={handleOpen} style={{margin: "auto", width: "50%"}} variant="contained">Create new account</Button>
        </div>
        <Image
          alt="paira student"
          id={styles.pairaStudent}
          height="500"
          src="/../public/paira-student-girl.png"
          width="100"
        />
        {/* <Modal open={} onClose={handleClose}>
          <div>Sign Up</div>
          <div>Are you a?</div>
          <div>
            <div>Parent</div>
            <div>———— or ————</div>
            <div>Student</div>
          </div>
          <div>Interested in working as a mentor?</div>
        </Modal> */}
      </main>
      <Footer />
    </div>
  );
}
