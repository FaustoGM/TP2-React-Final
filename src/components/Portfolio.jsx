import "../styles/css/portfolio.css";

const proyectos = [
  {
    titulo: "App de Clima",
    descripcion: "App React con consumo de API para clima en tiempo real.",
    imagen: `${import.meta.env.BASE_URL}assets/images/proyectos/proyecto1.png`,
    link: "https://github.com/faustogm/app-clima",
  },
  {
    titulo: "Gestor de Tareas",
    descripcion: "Aplicación full stack con CRUD de tareas en tiempo real.",
    imagen: `${import.meta.env.BASE_URL}assets/images/proyectos/proyecto2.png`,
    link: "https://github.com/faustogm/gestor-tareas",
  },
  {
    titulo: "Portfolio Personal",
    descripcion: "Sitio responsive hecho en React para mostrar mis proyectos.",
    imagen: `${import.meta.env.BASE_URL}assets/images/proyectos/proyecto3.png`,
    link: "https://github.com/faustogm/portfolio",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="seccion">
      <h2 className="titulo-seccion">Proyectos</h2>
      <p className="subtitulo-seccion">Algunos trabajos recientes</p>
      <div className="portfolio-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="card-proyecto">
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <div className="info-proyecto">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-proyecto"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
