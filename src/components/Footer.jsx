import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { SiCanva } from 'react-icons/si';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSide}>
        <a href="https://www.instagram.com/callme_ijong" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <FaInstagram style={styles.icon} /> Instagram
        </a>
        <a href="https://github.com/AveJonk" target="_blank" rel="noopener noreferrer" style={styles.link}>
          <FaGithub style={styles.icon} /> GitHub
        </a>
      </div>
      <div style={styles.textCenter}>
        <p>Karya ini bukan sepenuhnya karya original saya</p>
      </div>
      <div style={styles.rightSide}>
      <a href="https://www.canva.com/design/DAGMtGBuPQA/-ERjtPXNBBUy1GKNzXF4YQ/edit?utm_content=DAGMtGBuPQA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" style={styles.link}>
        <SiCanva style={styles.icon} /> CV  
       </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '5px',
  },
  textCenter: {
    flexGrow: 1,
    textAlign: 'center',
  }
};

export default Footer;
