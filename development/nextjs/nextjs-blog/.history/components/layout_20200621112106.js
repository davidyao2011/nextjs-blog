import React from "react";
import styles from './lay'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
