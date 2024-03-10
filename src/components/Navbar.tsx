import { useEffect, useState } from "react";
import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function checkScroll() {
      setIsOpen(window.scrollY < 60);
    }
    
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.open : styles.closed}`}
    >
      <nav>
        <ul className={styles.ul}>
          <div className={styles.left}>
            <li>
              <a href="#">
                <img className={styles.logo} src="/logo_1.png" alt="" />
              </a>
            </li>
          </div>
          <div className={styles.right}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#apps">Apps</a>
            </li>
            <li>
              <a href="#legal">Legal</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}