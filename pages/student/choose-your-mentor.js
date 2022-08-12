import { useRouter } from "next/router";
import styles from "../../styles/Default.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import commonStyles from "../../styles/common.module.css";
import stylesHomeAlt from "../../styles/Homealt.module.css";
import { useState } from 'react';

export default function ChooseYourMentor() {
  const router = useRouter();

  const [mentor, setMentor] = useState({name: "Tina Richards", description: "Gina is a Harvard graduate studying education and adolescent psychology"})

  return (
    <div>
      <_Head />
      <HeaderStudent />
      <main className={commonStyles.containerRelative}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", width: "20vw", alignItems: "center"}}>
          <div style={{fontSize: "1.1em", width: "100%"}}>You have 3 matched mentors:</div>
          <div className={styles.mentor}>
            <div className={stylesHomeAlt.mentorCard}>
              <Image
                alt="Mentor Profile Pic"
                src="/mentor-profile-pic.png"
                width="100px"
                height="100px"
              ></Image>
              Tina Richards
            </div>
          </div>
          <div className={styles.mentor}>
            <div className={stylesHomeAlt.mentorCard}>
              <Image
                alt="Mentor Profile Pic"
                src="/mentor-profile-pic.png"
                width="100px"
                height="100px"
              ></Image>
              John Lake
            </div>
          </div>
          <div className={styles.mentor}>
            <div className={stylesHomeAlt.mentorCard}>
              <Image
                alt="Mentor Profile Pic"
                src="/mentor-profile-pic.png"
                width="100px"
                height="100px"
              ></Image>
              Gina Wee
            </div>
          </div>
        </div>
        <Divider
          orientation="vertical"
          style={{ backgroundColor: "#73C2FB", marginLeft: "10vw"}}
          flexItem
          size="large"
        />

        <div id="choose-mentor" style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", width: "70vw", }}>
          <div style={{display: "flex"}}>
            <h2 style={{textAlign: "center", width: "50vw", paddingLeft: "5vw", paddingBottom: "5vh"}}>Choose your mentor</h2>
            <Button onClick={() => router.push("/student/home")} variant="outlined">done</Button>
          </div>

          <div id="mentor-profile-summary">
            {/* profile */}
            <div className={styles.mentorCard} style={{textAlign: "center"}}>
              <Image
                alt="Mentor Profile Pic"
                src="/mentor-profile-pic.png"
                width="200px"
                height="200px"
              ></Image>
              <br />
              <div style={{fontSize: "1.2em", paddingBottom: "5vh"}}>Meet Gina Wee</div>
            </div>
            <div style={{fontSize: "1.1em", paddingBottom: "10vh"}}>
              {mentor.description}
            </div>
          </div>
          <div style={{display: "flex"}}>
            <Button onClick={() => router.push("/student/schedule")} variant="contained" style={{backgroundColor: "#73C2FB", marginRight: "1vw", borderRadius: "1em"}}>
              Schedule with {mentor.name}
            </Button>
            <Button onClick={() => router.push("/student/mentor-profile")} variant="contained" style={{backgroundColor: "#73C2FB", marginLeft: "1vw", borderRadius: "1em"}}>
              More about me
            </Button>
          </div>
        </div>
      </main>
      {/* </div> */}
      <Footer />
    </div>
  );
}
