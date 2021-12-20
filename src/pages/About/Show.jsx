import '../../style/Profile.css';
import foto from '../../assets/img/foto.jpeg';

const AboutShow = function () {
  return (
    <div className="card">
      <div
        className="card-header"
        style={{ backgroundImage: `url(${foto})` }}
      >
        <div className="card-header-slanted-edge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>

        </div>
      </div>

      <div className="card-body">
        <h2 className="name">Anthony Will Solsol Soplin</h2>
        <h4 className="job-title">
          <strong>Desarrollador de software</strong>
        </h4>
        <h5 className="job-title">master.awss@gmail.com</h5>
        <div className="bio">
          Desarrollador de software entusiasta.
          #HagamosloConParsimonia 💻
        </div>
        <div className="social-accounts">
          <a href="https://github.com/masterawss">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
            <span className="sr-only">Github</span>
          </a>
        </div>
      </div>

      <div style={{ padding: '30px' }}>
        <h3>
          <strong>Lo que aprendí en este programa</strong>
        </h3>
        <ul style={{ marginTop: '10px' }}>
          <li>Aplicación de SASS y flex en los estilos</li>
          <li>Importación y uso de css en React JS</li>
          <li>Uso de React Routers</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutShow;
