import Image from "next/image";
import styles from "../../styles/MentorProfile.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

export default function MentorProfile() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div style={{ display: "flex" }}>
          <div id={styles.mainBox}>
            <Image
              alt="Background Image"
              src="/background.jpeg"
              width="745px"
              height="150px"
              id={styles.background}
            ></Image>
            <Image
              alt="Profile Image"
              src="/profile_pic.png"
              width="100px"
              height="100px"
              id={styles.profileImg}
            ></Image>
            <div id={styles.profile}>Gina Wee</div>
            <Divider></Divider>
            <Divider></Divider>
            <div>
              <div>Boston</div>
              <div>Massachusetts</div>
              <div>United States</div>
            </div>
            <div>
              <div>Education</div>
              <TextField value="Harvard graduate" variant="outlined" />
            </div>
            <div>
              <div>Email</div>
              <TextField value="ginawee@harvard.edu" variant="outlined" />
            </div>
            <div>
              <div>Description</div>
              <TextField
                value="Harvard graduate studying education and adolescent psychology"
                variant="outlined"
              />
            </div>
            <EditIcon />
          </div>
          <div id={styles.mainBox}>
            <h2>Assigned to Student</h2>
            <div>
              <div>Paul Sanjeet</div>
              <div>Nicole Tran</div>
              <div>Abbey Adams</div>
            </div>

            <div>
              <h3>Wallet</h3>
              <div style={{ display: "flex" }}>
                <div>
                  <div>Balance</div>
                  <div>$164.95</div>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div>Payout scheduled for: July 21st</div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <CreditCardIcon />
              <div>Payment Methods</div>
            </div>
            {/* Payout, Linked Payout Methods */}
          </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
