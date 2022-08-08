import _Head from "../../components/_Head";
import DiscoverAssignmentsCard from "../../components/DiscoverAssignmentsCard";
import Footer from "../../components/Footer";
import HeaderMentor from "../../components/HeaderMentor";
import RecommendedResources from "../../components/RecommendedResources";
import styles from "../../styles/Login.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function Sample() {
  return (
    <>
      <_Head />
      <HeaderMentor />
      <main className={styles.container + " " + styles.main}>
        {/* search bar */}
        <TextField
          InputProps={{ startAdornment: <SearchIcon /> }}
          placeholder="Search Resources"
        ></TextField>
        {/* recommended resources */}
        <div style={{ display: "flex" }}>
          {RecommendedResources()}
          <ArrowForwardIosIcon />
        </div>
        <div>
          <h3>Different Assignments</h3>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              {DiscoverAssignmentsCard({time: "2 min", title: "Self-Awareness"})}
              {DiscoverAssignmentsCard({time: "3 min", title: "Direction"})}
              {DiscoverAssignmentsCard({time: "3 min", title: "Time Management"})}
            </div>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

{
  /* <div id={styles.box}> */
}
