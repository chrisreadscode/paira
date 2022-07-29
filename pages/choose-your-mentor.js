import styles from "../styles/Home.module.css";
import _Head from "../components/_Head.js";
import Footer from "../components/Footer.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function chooseMentor() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      firstName: event.target.first.value,
      lastName: event.target.last.value,
    };

    console.log(data);

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/hello";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <div className={styles.container}>
      <_Head />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Welcome to our second page!</p>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Submit Form!</Button>

        <form action="/api/hello" method="post" onSubmit={handleSubmit}>
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" />
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">Submit</button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
