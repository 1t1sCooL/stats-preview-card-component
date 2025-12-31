import styles from "./App.module.css";
import Footer from "./Footer.tsx";
function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h1 className={styles.header}>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className={styles.text}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul>
            <li>
              <span>10k+</span> companies
            </li>
            <li>
              <span>314</span> templates
            </li>
            <li>
              <span>12M+</span> queries
            </li>
          </ul>
        </div>
        <div className={styles.containerImg}></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
