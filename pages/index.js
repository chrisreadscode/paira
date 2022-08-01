import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma.js';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import DatePicker from '@mui/x-date-pickers/DatePicker';

import _Head from '../components/_Head.js'
import Footer from '../components/Footer.js'

export const getStaticProps = async () => {
  const students = await prisma.student.findMany({
    select: {
      firstName: true,
      email: true,
    },
  });
  return {
    props: { students },
    revalidate: 10,
  };
};

export default function Home(props) {
  const students = props.students;

  return (
    <div className={styles.container}>
      <_Head />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://pairahealth.com">PAIRA</a>
        </h1>

        <p>
          {/* Please kindly find a list of our students below: */}
          {students.map((student, index) => 
            <p key={index}>{student.firstName}: {student.email}</p>
          )}
        </p>

        <Button variant="contained">Hello World</Button>

        <Divider style={{width:'100%'}} light>HERE</Divider>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}