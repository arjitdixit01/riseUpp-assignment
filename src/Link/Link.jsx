import React from 'react';
import styles from './Link.module.css';

function Link() {
  return (
    <div className={styles.navbar}>
      <a href="https://www.riseupp.com/search?q=fdfd">Webinars</a>
      <a href="https://www.riseupp.com/search?q=fdfd">Blogs</a>
      <a href="https://www.riseupp.com/search?q=fdfd">Forum</a>
      <a href="https://www.riseupp.com/search?q=fdfd">Coupons</a>
      <a href="https://www.linkedin.com/company/riseupp/">Linkedin</a>
    </div>
  );
}

export default Link;
