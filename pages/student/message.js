import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import MentorCardMessage from "../../components/MentorCardMessage";
import MessageTopBar from "../../components/MessageTopBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import HeaderStudent from "../../components/HeaderStudent";

export default function Message() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <HeaderStudent />
        <main className={styles.main}>
          <div id={styles.box} style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <MentorCardMessage />
              <MentorCardMessage />
              <MentorCardMessage />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <MessageTopBar />
              <div>
                <div>
                  If you have any questions, about the topic, please let me know
                </div>
                <div>Okay, thank you!</div>
              </div>
              <div>
                <TextField
                  placeholder="Message..."
                  InputProps={{
                    startAdornment: (
                      <>
                        <Button>
                          <AddCircleOutlineIcon />
                        </Button>
                        <AttachFileIcon />
                      </>
                    ),
                    endAdornment: <Button variant="contained">Send</Button>,
                  }}
                ></TextField>
              </div>
              {/* messages */}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
