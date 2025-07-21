import "../styles/css/tecnologias.css";
import html5 from "../assets/images/Tech/html5.svg";
import css3 from "../assets/images/Tech/css3.svg";
import js from "../assets/images/Tech/javascript.svg";
import react from "../assets/images/Tech/react.svg";
import mysql from "../assets/images/Tech/mysql.svg";

const Tecnologias = () => {
  return (
    <section id="tecnologias" className="seccion">
      <div className="contenido-seccion">
        <h2 className="titulo-seccion">Tecnologías</h2>
        <p className="subtitulo-seccion">
          Estas son algunas de las tecnologías que manejo
        </p>
        <div className="iconos-tecnologias">
          <img src={html5} alt="HTML5" title="HTML5" />
          <img src={css3} alt="CSS3" title="CSS3" />
          <img src={js} alt="JavaScript" title="JavaScript" />
          <img src={react} alt="React" title="React" />
          <img src={mysql} alt="MySql" title="MySql" />
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
