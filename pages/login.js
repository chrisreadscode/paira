import styles from "../styles/Login.module.css";
import _Head from "../components/_Head.js";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer.js";
import Image from "next/image";
import Link from "next/link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { useRouter } from "next/router"
import { useState } from "react";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        const JSONdata = JSON.stringify(data);

        const endpoint = '/api/login';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata,
        }

        // const response = await fetch(endpoint, options)

        // const result = await response.json();

        // if (result) router.push('/student/home');
        router.push('/student/home')

        // alert('Hooray the form works!')
        
        // console.log([...name, ...value]);
    }

    const handleModalClose = async (event) => {
        const modalNode = document.getElementById("modaldiv");
        const nodeUserClicksOn = event.target;
        if (!modalNode.contains(nodeUserClicksOn)) {
          setOpenModal(false);
        }
      };

    return (
        <>
            <_Head />
            <div className={styles.container}>
                <main className={styles.main}>

                    <div id={styles.mainBox} className={styles.center}>
                        <div style={{ marginBottom: "30px" }}>
                            <>
                                <Image alt="Logo Image"
                                    src="/paira-logo.png"
                                    width="300px"
                                    height="57px"
                                    />
                            </>
                        </div>
                        <p className={styles.center}>Create an account to enjoy all the services without any ads for free!</p>

                        <form action="/api/login" method="post" onSubmit={(data) => handleLogin(data)}>
                            <div className={styles.centerText}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    name="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Email address or username"
                                    value={email}
                                />
                            </div>
                            
                            <div className={styles.centerText}>
                                <TextField
                                    required
                                    fullWidth
                                    id="outlined-required"
                                    name="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Password"
                                    value={password}
                                />
                            </div>
                            <button className={styles.center} id={styles.login} type="submit">
                                Log In
                            </button>
                        </form>

                        <Link href="/password-reset">
                            <a>
                                <p id={styles.forgotPassword} className={styles.center}>Forgot Password?</p>
                            </a>
                        </Link>

                        <button className={styles.center} id={styles.signup} onClick={() => setOpenModal(true)}>
                            Sign Up
                        </button>
                    </div>
                    <Dialog
                        onClick={handleModalClose}
                        open={openModal}
                    >
                        <div id="modaldiv">
                        <DialogTitle style={{color: 'grey'}}>Sign Up</DialogTitle>
                        <Divider style={{borderBottomColor: "black", width: "40vw"}} variant="middle"/>
                        <List style={{display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", justifyContent: "space-evenly"}}>
                            <div style={{fontSize: "1.5em"}}>Are you a</div>
                            <ListItem className={styles.userSignup} style={{display: "flex", fontSize: "1.1em", justifyContent: "center"}}><Link href="/signup/parent">Parent</Link></ListItem>
                            <Divider style={{fontSize: "1.5em", width: "40vw"}} variant="middle">or</Divider>
                            <ListItem className={styles.userSignup} style={{alignItems: "center", display: "flex", fontSize: "1.1em", justifyContent: "center"}}><Link href="/signup/student">Student</Link></ListItem>
                            <ListItem className={styles.userSignup} style={{top: "4vh", fontSize: ".6em"}}><Link href="/signup/mentor">Interested in working as a mentor?</Link></ListItem>
                        </List>
                        </div>
                    </Dialog>
                </main>
            </div >
        <Footer />
        </>
    );
}
