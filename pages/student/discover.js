import _Head from "../../components/_Head";
import BrowserForMentor from "../../components/BrowseForMentorCard";
import Footer from "../../components/Footer";
import HeaderStudent from "../../components/HeaderStudent";
import RecommendedResources from "../../components/RecommendedResources";
import styles from "../../styles/Login.module.css";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function Sample() {
  return (
    <>
      <_Head />
      <HeaderStudent />
      <main className={styles.container + " " + styles.main}>
        {/* search bar */}
        <TextField
          InputProps={{ startAdornment: <SearchIcon /> }}
          placeholder="Search Resources"
        ></TextField>
        {/* browser for mentors */}
        <h2>Browser for Mentors</h2>
        <div style={{ display: "flex" }}>
          {BrowserForMentor({ icon: <HotelIcon />, title: "Sleeping Coach" })}
          {BrowserForMentor({
            icon: <ScheduleIcon />,
            title: "Time Management Coach",
          })}
          {BrowserForMentor({
            icon: <SchoolIcon />,
            title: "Study Habits Coach",
          })}
          {BrowserForMentor({
            icon: <RestaurantIcon />,
            title: "Nutrition Coach",
          })}
          {BrowserForMentor({
            icon: <HandshakeIcon />,
            title: "Relationships Coach",
          })}
        </div>
        {/* recommended resources */}
        {RecommendedResources()}
      </main>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}
