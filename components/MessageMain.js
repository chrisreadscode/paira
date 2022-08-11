import MessageCard from "./MessageCard";
import MessageHeader from "./MessageHeader";
import styles from "../styles/Default.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function MessageMain() {
  return (
    <div id={styles.box} style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MessageHeader />
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
  );
}
