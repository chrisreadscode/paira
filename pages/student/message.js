import Image from "next/image";
import styles from "../../styles/Message.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import Footer from "../../components/Footer.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import EditIcon from '@mui/icons-material/Edit';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ToggleButton } from "@mui/material";
import { useState } from 'react';
import { Button } from "@mui/material";
import stylesChatUIKit from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

export default function Messages() {
    const [recepient, setRecepient ] = useState({name: "Gina Wee", title: "Personal Mentor"});

    const [messages, setMessages] = useState([
    <Message
        key='1'
        model={{
        message: "Hello my friend",
        sentTime: "10 minutes",
        sender: "Joe",
        direction: "incoming",
        position: "first"
        }}
    >
        <Avatar src="/mentor-profile-pic.png" name="Mentor" />
        <Message.Footer sender="Joe" sentTime="1min" />
    </Message>, 
    <Message
        key='2'
        model={{
        message: "Hi there my friend",
        sentTime: "just now",
        sender: "",
        direction: "outgoing"
        }}
    >
        <Avatar src="/profile-pic.png" name="Student" />
    </Message>]);

    return (
        <><HeaderStudent />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main} style={{ paddingTop: "50px" }}>

                    <div id={styles.mainBox}>
                        <div id={styles.mentorSide}>

                            <div onClick={(e) => setRecepient({ name: "Gina Wee", title: "Personal Mentor" })}>
                                <MessageMentor imgTitle={"Profile Picture"} img={"/mentor-profile-pic.png"}
                                    mentorName={"Gina Wee"} mentorDescription={"Personal Mentor"}></MessageMentor>
                            </div>

                            <div onClick={(e) => setRecepient({ name: "Tina Richards", title: "Time Management Mentor" })}>
                                <MessageMentor imgTitle={"Profile Picture"} img={"/mentor-profile-pic.png"}
                                    mentorName={"Tina Richards"} mentorDescription={"Time Management"}></MessageMentor>
                            </div>

                            <div onClick={(e) => setRecepient({ name: "John Lake", title: "Sleep Mentor" })}>
                                <MessageMentor imgTitle={"Profile Picture"} img={"/mentor-profile-pic.png"}
                                    mentorName={"John Lake"} mentorDescription={"Sleep Mentor"}></MessageMentor>
                            </div>

                        </div>

                        <div id={styles.messageSide}>
                            <div id={styles.messageTop}>
                                <h3 className={styles.mentorNames} style={{ fontWeight: "heavy", fontSize: "x-large" }}>{recepient.name}</h3>
                                <p style={{ color: "#7c7c7c" }}>{recepient.title}</p>
                            </div>
                            <div id={styles.messageBottom}>
                                <div style={{ position: "relative", height: "100%" }}>
                                    <MainContainer>
                                        <ChatContainer>
                                            <MessageList>
                                            {/* <TypingIndicator content="Akane is typing" /> */}
                                                {messages.map((message) => message)}
                                            </MessageList>
                                            <MessageInput onSend={(event) => {
                                                const newMessage = <Message
                                                    key='3'
                                                    model={{
                                                        message: `${event}`,
                                                        sentTime: "just now",
                                                        sender: "Chris",
                                                        direction: "outgoing"
                                                    }}
                                                    >
                                                        {/* <Avatar src="/profile-pic.png" name="Student" /> */}
                                                    </Message>
                                                setMessages([...messages, newMessage]);
                                            }} placeholder="Type message here" />
                                        </ChatContainer>
                                    </MainContainer>
                                </div>

                                {/* <div style={{ display: "flex", alignItems: "flex-end", height: "18%", justifyContent: "flex-end"}}>
                                    <div id={styles.messageInput} style={{display: "flex", margin: "0 1vw 1vh 0"}}>
                                        <Button style={{alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <h3 id={styles.more}>+</h3>
                                        </Button>
                                        <Button style={{ display: "flex" }}>
                                            <AttachFileIcon id={styles.attachFile} />
                                        </Button>
                                        <TextField id="message" variant="standard" placeholder="Message..." sx={{ width: '70%', paddingTop: "3px" }} />

                                        <Button>
                                            <h4 style={{ margin: "auto 20px" }}>Send</h4>
                                        </Button>
                                    </div>

                                </div> */}
                            </div>

                        </div>
                    </div>
                </main>

                <Footer />
            </div ></>
    );
}

// import _Head from "../../components/_Head.js";
// import Footer from "../../components/Footer.js";
// import HeaderStudent from "../../components/HeaderStudent";
// import MessageMain from "../../components/MessageMain";
// import styles from "../../styles/Default.module.css";

// export default function Message() {
//   return (
//     <>
//       <_Head />
//       <HeaderStudent />
//       <div className={styles.container}>
//         <main className={styles.main}>
//           <MessageMain />
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

