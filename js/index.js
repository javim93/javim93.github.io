const projects = [
  {title: "Cerdito animado",
    img: "pig-animation.jpg",
    link: "pig-animation"
  },
  {title: "Piedra, Papel o Tijera!",
    img: "rock-paper-scissor.png",
    link: "rock-paper-scissor"
  },
  {title: "Generador de citas",
    img: "random-quote-generator.png",
    link: "random-quote-generator"
  },
  {title: "Reloj 25 + 5",
    img: "25+5-clock.png",
    link: "25+5-clock"
  },
  {title: "Maquina de ruido",
    img: "drum-machine.png",
    link: "drumMachine"
  },
  {title: "Previsualizador de markdown",
    img: "markdown-preview.png",
    link: "markdown-preview"
  },
  {title: "Página tributo",
    img: "tribute-page.png",
    link: "tribute-page"
  },
  {title: "Formulario de usuario",
    img: "survey-form.png",
    link: "survey-form"
  },
  {title: "Original Trombones",
    img: "product-landing-page.png",
    link: "product-landing-page"
  },
  {title: "Documentación técnica (Inglés)",
    img: "technical-documentation.png",
    link: "technical-documentation"
  }

  /*============PARA AGREGAR UN NUEVO PROYECTO=================
  {title: "TITULO DEL PROYECTO",
    img: "NOMBRE DEL ARCHIVO DE LA IMAGEN MINIATURA",
    link: "NOMBRE DE LA CARPETA DEL REPOSITORIO DONDE ESTÁ EL PROYECTO"
  }
  ============================================================*/

];

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.addTile = this.addTile.bind(this);
  };

  addTile = (list) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(
        <div className="projectTile">
          <div className="projectImgContainer">
            <a
              target="_blank"
              href={"projects/" + list[i].link + "/index.html"}>
              <img src={"img/" + list[i].img} />
            </a>
          </div>
          <div className="projectLinkContainer">
            <a
              className="projectLink largeLink"
              target="_blank"
              href={"projects/" + list[i].link + "/index.html"}>
              {list[i].title}
            </a>
            <a
              className="projectLink"
              target="_blank"
              href={"https://github.com/javim93/javim93.github.io/tree/main/projects/" + list[i].link}>
            &lt;code &#47;&gt;
            </a>
          </div>
        </div>
      );
    }
    return arr;
  };

  render() {
    return (
      <div className="projectsWrapper">
        <h3>Algunos proyectos en los que estuve trabajando</h3>
        <div className="projectTileContainer">
          {this.addTile(this.props.projects)}
        </div>
      </div>
    );
  };
};

ReactDOM.render(
  <Projects
    projects={projects}
  />,
  document.getElementById("PROJECTS")
);
