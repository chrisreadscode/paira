import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import _Head from "../components/_Head.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export default function Login() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    // event.preventDefault();

    // const data = {
    //   firstName: event.target.first.value,
    //   lastName: event.target.last.value,
    // };

    // console.log(data);

    // const JSONdata = JSON.stringify(data);

    // const endpoint = "/api/hello";

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSONdata,
    // };

    // const response = await fetch(endpoint, options);

    // const result = await response.json();

    // alert(`Is this your full name: ${result.data}`);
  };

  // const handleCloseModal = async (event) => {
  //   setOpen(false);
  //   return;
  // };

  // const handleOpenModal = async (event) => {
  //   setOpen(true);
  //   console.log
  // };

  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = async (event) => {
      const modalNode = document.getElementById("modaldiv");
      const nodeUserClicksOn = event.target;
      if (!modalNode.contains(nodeUserClicksOn)) {
        setOpenModal(false);
      }
  }

  return (
    <div className={styles.container}>
      <_Head />
      <main className={styles.main}>
        <div id={styles.div}>
          <Header />
          <p id={styles.createAccount}>
            Create an account to enjoy all the services without any ads free!
          </p>
          <form
            action="api/login"
            id={styles.loginForm}
            method="post"
            onSubmit={handleSubmit}
          >
            <TextField
              className={styles.input}
              id="email"
              fullWidth
              placeholder="Email"
              required
              type="email"
            ></TextField>
            <br />
            <TextField
              className={styles.input}
              id="password"
              fullWidth
              placeholder="Password"
              required
              type="password"
            ></TextField>
            <br />
            <Button
              className={styles.button}
              fullWidth
              type="submit"
              size="large"
              variant="contained"
            >
              Log In
            </Button>
          </form>
          <Button style={{ margin: "auto", width: "fit-content" }}>
            Forgot Password?
          </Button>
          <Divider style={{ margin: "2vh auto", width: "80%" }}></Divider>
          <Button
            color="success"
            onClick={() => setOpenModal(true)}
            style={{ margin: "auto", width: "50%" }}
            variant="contained"
          >
            Create new account
          </Button>
        </div>
        <Image
          alt="paira student"
          id={styles.pairaStudent}
          height="500"
          src="/../public/paira-student-girl.png"
          width="100"
        />
        <Modal
          onClick={handleModalClose}
          open={openModal}
          style={{ width: "800px", height: "800px" }}
        >
          <div id="modaldiv">
            <div>Signup</div>
            <Divider style={{ margin: "2vh auto", width: "80%" }}></Divider>
            <div>Are you a</div>
            <Link href="/signup/parent">Parent</Link>
            <Divider style={{ margin: "2vh auto", width: "80%" }}>or</Divider>
            <Link href="/signup/student">Student</Link>
            <br />
            <Link href="/signup/mentor">
              Interested in working as a mentor?
            </Link>
          </div>
        </Modal>
      </main>
      <Footer />
    </div>
  );
}
