import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "../styles/Login.module.css";

export default function SignupOptionsModal(props) {
  const { openModal, setOpenModal } = props;

  const handleModalClose = async (event) => {
    const modalNode = document.getElementById("modaldiv");
    const nodeUserClicksOn = event.target;
    if (!modalNode.contains(nodeUserClicksOn)) {
      setOpenModal(false);
    }
  };

  return (
    <Dialog onClick={handleModalClose} open={openModal}>
      <div id="modaldiv">
        <DialogTitle style={{ color: "grey" }}>Sign Up</DialogTitle>
        <Divider
          style={{ borderBottomColor: "black", width: "40vw" }}
          variant="middle"
        />
        <List
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "50vh",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ fontSize: "1.5em" }}>Are you a</div>
          <ListItem
            className={styles.userSignup}
            style={{
              display: "flex",
              fontSize: "1.1em",
              justifyContent: "center",
            }}
          >
            <Link href="/signup/parent">Parent</Link>
          </ListItem>
          <Divider
            style={{ fontSize: "1.5em", width: "40vw" }}
            variant="middle"
          >
            or
          </Divider>
          <ListItem
            className={styles.userSignup}
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: "1.1em",
              justifyContent: "center",
            }}
          >
            <Link href="/signup/student">Student</Link>
          </ListItem>
          <ListItem
            className={styles.userSignup}
            style={{ top: "4vh", fontSize: ".6em" }}
          >
            <Link href="/signup/mentor">
              Interested in working as a mentor?
            </Link>
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}
