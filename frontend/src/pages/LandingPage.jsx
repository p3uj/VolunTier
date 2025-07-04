import classes from "./LandingPage.module.css";
import "../styles/global.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <h1>VolunTier</h1>
        <p>
          Level up through service, earn recognition with every act, and build a
          legacy of impact one mission at a time.
        </p>
        <p>About system here</p>
        <button onClick={() => navigate("signup")}>Sign Up</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </section>
      <section className={classes.section}>System Features</section>
      <section className={classes.section}>Events (top 10)</section>
      <section className={classes.section}>Top volunteers</section>
    </main>
  );
}
