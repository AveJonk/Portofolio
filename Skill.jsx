import React from "react";
import { FaReact, FaNodeJs, FaJs, FaFigma, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiAdobeillustrator, SiAdobeaftereffects, SiMongodb } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { LuBrain } from "react-icons/lu";

const App = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#011825",
      color: "#fff",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "0.5rem",
    },
    paragraph: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
    },
    highlight: {
      color: "#a26bff", // Warna ungu
    },
    icons: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      marginBottom: "3rem",
    },
    icon: {
      fontSize: "2.5rem",
      color: "#fff",
      transition: "transform 0.3s ease",
    },
    iconHover: {
      transform: "scale(1.2)",
    },
    circle: {
      width: "150px",
      height: "150px",
      backgroundColor: "#8a00ff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    centerText: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#fff",
    },
    circleBeforeAfter: {
      content: '""',
      position: "absolute",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      borderRadius: "50%",
      width: "250px",
      height: "250px",
      top: "-50px",
      left: "-50px",
    },
    circleAfter: {
      width: "350px",
      height: "350px",
      top: "-100px",
      left: "-100px",
      opacity: "0.3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
       Saya merupakan siswa yang memiliki banyak pengalaman di SMK, <br/>
       saya merupakan seorang{" "}
        <span style={styles.highlight}>Visioner yang dapat beradaptasi</span> di segela situasi
      </h1>
      <p style={styles.paragraph}>
        Berikut adalah beberapa skill yang saya pelajari dan kuasai semasa SMK
      </p>

      <div style={styles.icons}>
        <FaReact style={styles.icon} />
        <SiNextdotjs style={styles.icon} />
        <FaNodeJs style={styles.icon} />
        <FaJs style={styles.icon} />
        <DiPython style={styles.icon} />
        <FaCss3Alt style={styles.icon} />
        <SiMongodb style={styles.icon} />
      </div>

      <div style={styles.circle}>
        <h2 style={styles.centerText}><LuBrain style={styles.icon} /></h2>
        <div style={styles.circleBeforeAfter}></div>
        <div style={{ ...styles.circleBeforeAfter, ...styles.circleAfter }}></div>
      </div>
    </div>
  );
};

export default App;
