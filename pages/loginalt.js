

import styles from "../styles/Loginalt.module.css";
import _Head from "../components/_Head.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Image from "next/image";
import TextField from "@mui/material/TextField";

export default function Loginalt() {
    return (
        <><Header />
            <div className={styles.container}>
                <_Head />
                <main className={styles.main}>

                    <div id={styles.mainBox} className={styles.center}>
                        <div style={{ marginBottom: "30px" }}>
                            <Image alt="Logo Image"
                                src="/paira-logo.png"
                                width="300px"
                                height="57px"
                            ></Image>
                        </div>
                        <p className={styles.center}>Create an account to enjoy all the services without any ads for free!</p>

                        <p className={styles.centerText}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                placeholder="Email address or username"
                            />
                        </p>
                        <p className={styles.centerText}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                placeholder="Password"
                            />
                        </p>
                        <button className={styles.center} id={styles.login}>
                            Log In
                        </button>

                        <p id={styles.forgotPassword} className={styles.center}>Forgot Password?</p>

                        <button className={styles.center} id={styles.signup}>
                            Sign Up
                        </button>








                    </div>

                </main>

                <Footer />
            </div ></>
    );
}