//import logo from './logo.svg';
//import './App.css';
import { Fragment } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Curso from './components/Curso';
import './styles/styles.scss';

const courses = [
  {
    title : "React desde cero",
    image : "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F7204fcde-37aa-49a2-a619-63459f834ada.png&w=1920&q=75",
    price : "50"
  },
  {
    title : "Formularios con React",
    image : "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2Fbea68093-bc25-4492-8244-b9c2a1b31e26.png&w=1920&q=75",
    price : "20"
  },
  {
    title : "React native",
    image : "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F9cfa2a82-e1d9-4903-849f-b3d09804a703.png&w=1920&q=75",
    price : "60"
  }
]

const App = () => (
  <Fragment>
  <Banner />
  <div className="ed-grid m-grid-3">

    {courses.map((course,index) => (

      <Curso 
        title = {course.title}
        image = {course.image}
        price = {course.price}
        key = {course.title + index}
      />

    ))}
</div>
<div className="ed-grid m-grid-3">
<Form />

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
