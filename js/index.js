class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lenguage: ['Español', 'English'],
      selector: ['Eng', 'Spa'],
      navbarList: [
        ['INICIO', 'PROYECTOS', 'PERFIL', 'CONTACTO'],
        ['HOME', 'PROJECTS', 'PROFILE', 'CONCTACT']
      ]
    };
    this.generateList = this.generateList.bind(this);
  };

  generateList = (list) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(
        <li className="navbarListItem">
          <a
            className="navbarLink"
            href={'#' + this.state.navbarList[1][i]}>
          {list[i]}
          </a>
        </li>);
    }
    return arr;
  };

  render() {

    return(
      <div className="navbarWrapper">
        <div className="translator">
          <button
            className="lenguageSelector"
            type="button"
            name="translator"
            onClick={this.props.translate}
          >
            {this.state.selector[this.props.translator]}
          </button>
          <h4 className="lenguage">
            {this.state.lenguage[this.props.translator]}
          </h4>
        </div>
        <div className="navbarListWrapper">
          <ul className="navbarList">
            {this.generateList(this.state.navbarList[this.props.translator])}
          </ul>
        </div>
      </div>
    );
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: ['Desarrolador Web', 'Web Developer']
    };
  };
  render() {
    return (
      <div id="HOME" className="homeWrapper">
        <h1 className="title">Javier Mazzoni</h1>
        <h2 className="subtitle">
          {this.state.subtitle[this.props.translator]}
        </h2>
      </div>
    );
  };
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [
        "Algunos proyectos en los que estuve trabajando",
        "Some projects I've been working on"
      ],
    };
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
              {list[i].title[this.props.translator]}
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
      <div id="PROJECTS" className="projectsWrapper">
        <h3>{this.state.title[this.props.translator]}</h3>
        <div className="projectTileContainer">
          {this.addTile(this.props.projects)}
        </div>
      </div>
    );
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    if (this.props.translator === 0) {
      return (
        <div id="PROFILE" className="profileWrapper">

          <div className="profileImgContainer">
            <img src="img/profile-square.png" alt="Photo of Javier Mazzoni" />
          </div>

          <div className="profileInfo">
            <h3>¿Quién soy?</h3>
            <p>
              Soy Javier Mazzoni. Tengo 27 años y soy de Buenos Aires,
              Argentina.

              <br/><br/>

              Estudié en la Universidad de Buenos Aires donde me
              gradué como Licenciado en Ciencias Biológicas, y actualmente
              me estoy entrenando en el desarrollo web front-end.

              <br/><br/>

              Inicié mis conocimientos principalmente con los cursos de
              Free Code Camp sobre: <a
                className="certification"
                href="https://www.freecodecamp.org/certification/javim93/responsive-web-design"
                target="_blank"
              >
                Responsive Web Design
              </a>, <a
                className="certification"
                href="https://www.freecodecamp.org/certification/javim93/javascript-algorithms-and-data-structures"
                target="_blank"
              >
                JavaScript Algorithms and Data Structure
              </a> y <a
                className="certification"
                href="https://www.freecodecamp.org/certification/javim93/front-end-development-libraries"
                target="_blank"
              >
                Front-end Development Libraries
              </a>. Entre otras fuentes, como <a
                className="certification"
                href="https://www.udemy.com/certificate/UC-337aeb09-4b88-4fff-bca6-7643bdf5c7d5/"
                target="_blank"
              >
                Udemy
              </a> o <a
                className="certification"
                href="https://www.internetingishard.com/"
                target="_blank"
              >
                Interneting is Hard
              </a>.

              <br/><br/>

            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div id="PROFILE" className="profileWrapper">

          <div className="profileImgContainer">
            <img src="img/profile-square.png" alt="Photo of Javier Mazzoni" />
          </div>

          <div className="profileInfo">
            <h3>Who am I?</h3>
            <p>I'm Javier Mazzoni. I'm 27 years old and I am from Buenos
            Aires, Argentina.

              <br/><br/>

              I've studied in the Buenos Aires University where I
              graduated in Biology Sciences and I'm currently training
              myself in front-end web development.

              <br/><br/>

              I started my path mainly with the courses of Free Code Camp
              about: <a
                className="certification"
                href="https://www.freecodecamp.org/certification/javim93/responsive-web-design"
                target="_blank"
              >
                Responsive Web Design
              </a>, <a
                className="certification"
                href="https://www.freecodecamp.org/certification/javim93/javascript-algorithms-and-data-structures"
                target="_blank"
              >
                JavaScript Algorithms and Data Structure
              </a> and <a
                className="certification"
                href="https://www.freecodecamp.org/certification/javim93/front-end-development-libraries"
                target="_blank"
              >
                Front-end Development Libraries
              </a>. Besides other sources such as <a
                className="certification"
                href="https://www.udemy.com/certificate/UC-337aeb09-4b88-4fff-bca6-7643bdf5c7d5/"
                target="_blank"
              >
                Udemy
              </a> or <a
                className="certification"
                href="https://www.internetingishard.com/"
                target="_blank"
              >
                internetingishard
              </a>.
            </p>
          </div>

        </div>
      );
    }
  };
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["Ponete en contacto!", "Contact me!"]
    };
  };
  render() {
    return (
      <div id="CONTACT" className="contactWrapper">
        <h3>{this.state.title[this.props.translator]}</h3>
        <ul className="contactList">
          <li class="contactListItem">
            <i class="contactItem fab fa-free-code-camp"></i>
            <a
              class="contactLink"
              target="_blank"
              href="https://www.freecodecamp.org/javim93"
            >
              <h4 class="contactItem">FCC</h4>
            </a>
          </li>
          <li class="contactListItem">
            <i class="contactItem fab fa-github"></i>
            <a
              class="contactLink"
              target="_blank"
              href="https://github.com/javim93"
            >
              <h4 class="contactItem">GitHub</h4>
            </a>
          </li>
          <li class="contactListItem">
            <i class="contactItem fab fa-linkedin"></i>
            <a
              class="contactLink"
              target="_blank"
              href="https://www.linkedin.com/in/javier-mazzoni/"
            >
              <h4 class="contactItem">LinkedIn</h4>
            </a>
          </li>
          <li class="contactListItem">
            <i class="contactItem fas fa-envelope"></i>
            <a
              class="contactLink"
              href="mailto:javi.mazzoni@gmail.com"
            >
              <h4 class="contactItem">Gmail</h4>
            </a>
          </li>
        </ul>
      </div>
    );
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translator: 0
    };
    this.translate = this.translate.bind(this);
  };

  translate() {
    if (this.state.translator === 0) {
      this.setState ({
        translator: 1
      });
    } else {
      this.setState ({
        translator: 0
      });
    }
  };

  render(){
    return (
      <div>
        <Navbar
          translator={this.state.translator}
          translate={this.translate} />
        <Home translator={this.state.translator} />
        <Projects
          translator={this.state.translator}
          projects={[
            {title: ["Cerdito animado", "Animated pig"],
              img: "pig-animation.jpg",
              link: "pig-animation"
            },
            {title: ["Piedra, Papel o Tijera!", "Rock, Paper, Scissor!"],
              img: "rock-paper-scissor.png",
              link: "rock-paper-scissor"
            },
            {title: ["Generador de citas", "Random quote generator"],
              img: "random-quote-generator.png",
              link: "random-quote-generator"
            },
            {title: ["Reloj 25 + 5", "25 + 5 Clock"],
              img: "25+5-clock.png",
              link: "25+5-clock"
            }

            /*============PARA AGREGAR UN NUEVO PROYECTO=================
            {title: ["", ""],
              img: "",
              link: ""
            }
            ============================================================*/

          ]}/>
        <Profile translator={this.state.translator}/>
        <Contact translator={this.state.translator} />
      </div>
    );
  };
};

ReactDOM.render(<App/>, document.getElementById("app"));
