import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import EditIcon from '@mui/icons-material/Edit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

export default function StudentProfile() {
  return (
    <><HeaderMentor />
      <div className={commonStyles.container}>
        <_Head />
        <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

          {/* Div so that mainBox and sideBox are side by side */}
          <div style={{ width: "100%" }}>
            {/* The box on the left part of the screen */}
            <div id={styles.mainBox}>
              <Image alt="Background Image"
                src="/background.jpeg"
                width="822px"
                height="100px"
                id={styles.background}></Image>

              {/* <Image alt="Profile Image"
                            src="/profile_pic.png"
                            width="100px"
                            height="100px"
                            id={styles.profileImg}></Image> */}

              <div id={styles.profile}>
                <div style={{ width: "100%" }}>
                  <h4 id={styles.title} style={{ float: "left" }}>Gina Wee</h4>

                  <div id={styles.icon}>
                    <EditIcon alt="Edit Icon"
                      width="20px"
                      height="20px"
                    > </EditIcon>
                  </div>
                </div>
                <br></br>
                <h4 style={{ margin: "0px" }}>---</h4>
                <p className={styles.fontSmall} style={{ margin: "0px", color: "#9c9c9c" }}>Boston, Massachusetts</p>

                <p id={styles.education} className={styles.fontLarge}>Education</p>
                <div className={styles.textBox} style={{ width: "50%", lineHeight: "1.6" }}>
                  <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121" }}>
                    Harvard Graduate
                  </p>
                </div>

                <p id={styles.email} className={styles.fontLarge}>Email</p>
                <div className={styles.textBox} style={{ width: "50%", lineHeight: "1.6" }}>
                  <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121" }}>
                    ginawee@harvard.edu
                  </p>
                </div>

                <p id={styles.email} className={styles.fontLarge}>Description</p>
                <div className={styles.textBox} style={{ width: "50%" }}>
                  <p className={styles.fontSmall} style={{ margin: "0px", color: "#212121", lineHeight: "1.6" }}>
                    Harvard graduate studying education and adolescent psychology
                  </p>
                </div>


              </div>
            </div>




            {/* The box on the right part of the screen */}
            <div id={styles.sideBox}>
              <p className={styles.subtitle}>Assigned to Students</p>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className={styles.assigned} style={{ marginLeft: "15px", height: "170px" }}>
                  <div style={{ height: "40%" }}>
                    <p className={styles.menteeName}>Paul Sanjeet</p>
                    <div className={styles.menteePic}>
                      <Image alt="Mentee Profile Pic"
                        src="/profile-pic.png"
                        width="40px"
                        height="40px"
                      ></Image>
                    </div>
                  </div>

                  <div style={{ display: "flex", paddingTop: "10px", height: "60%" }}>
                    <div className={styles.assignments}>
                    </div>
                    <div className={styles.assignments}>
                    </div>
                    <div className={styles.assignments}>
                    </div>
                  </div>
                </div>

                <div className={styles.assigned} style={{ marginLeft: "15px", height: "170px" }}>
                  <div style={{ height: "40%" }}>
                    <p className={styles.menteeName}>Nicole Tran</p>
                    <div className={styles.menteePic}>
                      <Image alt="Mentee Profile Pic"
                        src="/profile-pic.png"
                        width="40px"
                        height="40px"
                      ></Image>
                    </div>
                  </div>

                  <div style={{ display: "flex", paddingTop: "10px", height: "60%" }}>
                    <div className={styles.assignments}>
                    </div>
                    <div className={styles.assignments}>
                    </div>
                    <div className={styles.assignments}>
                    </div>
                  </div>
                </div>


              </div>


              <div id={styles.wallet}>
                <p className={styles.subtitle} style={{ margin: "0px", fontSize: "larger", marginBottom: "30px" }}>Wallet</p>
                <div style={{ marginLeft: "30px" }}>
                  Balance
                  <h4 style={{ marginTop: "10px", marginBottom: "10px" }}>$164.95</h4>
                  Payout scheduled July 21st
                </div>
              </div>
              <div style={{ marginTop: "10px", marginLeft: "20px", display: "flex", justifyContent: "center", width: "150px" }}>
                <CreditCardIcon alt="Credit Card Icon"
                  width="20px"
                  height="20px"
                > </CreditCardIcon>
                Payment Method
              </div>








            </div>


          </div>

        </main>

        <Footer />
      </div ></>
  );
}