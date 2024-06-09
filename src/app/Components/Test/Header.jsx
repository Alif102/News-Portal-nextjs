"use client"
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" passHref>
          <span className={styles.title}>The Pasadena Tribune</span>
        </Link>
        <input
          type="checkbox"
          id="openSidebarMenu"
          className={styles.openSidebarMenu}
          checked={isChecked}
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />
        <label htmlFor="openSidebarMenu" className={styles.sidebarIconToggle}>
          {isChecked ? (
            <IoClose className={styles.menuClose} />
          ) : (
            <IoMenu className={styles.menu} />
          )}
        </label>
      </div>
      <nav className={`${styles.nav} ${isChecked ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


