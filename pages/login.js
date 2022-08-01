import Image from "next/image";
import styles from "../styles/Login.module.css";
import _Head from "../components/_Head.js";
import Footer from "../components/Footer.js";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal"
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
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <Image
            alt="paira logo"
            height="100px"
            src="/../public/paira-placeholder.png"
            width="500px"
          />
          <p id={styles.createAccount}>
            Create an account to enjoy all the services without any ads free!
          </p>
          <form action="api/login" method="post" onSubmit={handleSubmit}>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" required type="email"></Input>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" required type="password"></Input>
            <br/>
            <Button type="submit">Log In</Button>
          </form>
          <Button>Forgot Password</Button>
          <br/>
          <Button onClick={handleOpen}>Create new account</Button>
        </div>
        <Image
          alt="paira student"
          height="500px"
          src="/../public/student-placeholder.png"
          width="200px"
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
