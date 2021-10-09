//import logo from './logo.svg';
//import './App.css';
import { Fragment } from 'react';
import Curso from './components/Curso';
import './styles/styles.scss';

const App = () => (
  <Fragment>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="tu-imagen.jpg" alt='banner' />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Cursos EDteam</p>
          <p> Tu futuro te esta esperando</p>
          <a href="/#" className="button">Suscribirse</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    <Curso 
      title="React desde cero" 
      image="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F7204fcde-37aa-49a2-a619-63459f834ada.png&w=1920&q=75" 
      price="50"
      />
    <Curso 
    title="Formularios con React" 
    image="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2Fbea68093-bc25-4492-8244-b9c2a1b31e26.png&w=1920&q=75" 
    price="20"
    />
    <Curso 
    title="React native" 
    image="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F9cfa2a82-e1d9-4903-849f-b3d09804a703.png&w=1920&q=75" 
    price="60"
    />

</div>
</Fragment>
)

export default App;

/*
1.- toddas las etiquetas deben cerrarse
2.- todos los componentes deben devolver un solo elemento, en el caso de tener varios se puede usar <Fragment><Fragment />
3.- el atributo className ahora debe llamarse className
4.- los estilos deben ser tomados como objetos
5.- for => forHTML
6.- className => clasName
*/
