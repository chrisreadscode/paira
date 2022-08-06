import styles from "../../styles/Login.module.css";
import _Head from "../../components/_Head.js";
import HeaderMentor from "../../components/HeaderMentor.js";
import Footer from "../../components/Footer.js";
import MeetingSummary from "../../components/MeetingSummary.js";

export default function Sample() {
  return (
    <div>
      <_Head />
      <div className={styles.container}>
        <HeaderMentor />
        <main className={styles.main} style={{display: "flex", flexDirection: "row"}}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FEdmonton&src=cmNyZWFkLmlpQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y180c21lYjZjcnVvMDdnbHRrY3BrdG8ydjBjNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23b8a000&color=%2333B679&color=%230B8043&color=%237CB342"
            style={{ border: "solid 1px #777" }}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
          <div style={{display: "flex", flexDirection: "column"}}>
            <h2>Upcoming Meetings</h2>
            <MeetingSummary />
            <MeetingSummary />
            <MeetingSummary />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
