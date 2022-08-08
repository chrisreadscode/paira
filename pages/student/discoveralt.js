
import styles from "../../styles/Homealt.module.css";
import commonStyles from "../../styles/common.module.css";
import _Head from "../../components/_Head.js";
import HeaderStudent from "../../components/HeaderStudent.js";
import Footer from "../../components/Footer.js";
import Image from "next/image";
import Link from "next/link";




export default function StudentProfile() {
    return (
        <><HeaderStudent />
            <div className={commonStyles.container}>
                <_Head />
                <main className={commonStyles.main}>
                    <div id={styles.upcomingAssignment}>
                        <h2 className={commonStyles.title}>Upcoming Assignments</h2>
                    </div>

                    


                </main>

                <Footer />
            </div ></>
    );
}