
import './App.css';
import Boton from './componentes/boton';
import Boton2 from './componentes/boton 2';

function App() {
  return (
    <div className="App">

      <div className="jumbotron">
          <h1 className="display-4">Hello world!!!!</h1>
          <p className="lead">
              this is a simple hero test, loremdsgadfsgdfgafgdfagag
              agasdgdasgadsgdasgadsg
              dasgadsgasdgasdgasdgasdgasdgasdgasdgasdgdasgs

          </p>

          <hr className="my-4"/>
          <p>
              dgadfgadfgasfdgadfgdfghdfghsdfhs
              dfshsdfhdfshsdfhdfshsdfhsdfhsdfh
              fhgsdfhsdfhsdfhfdh



          </p>

          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more!!!
          </a>
        

            <Boton  texto="clikeame ahora!"/>

            <br/>
            <br/>

            <Boton2  texto="clikeame ahorsssssa!" />



      </div>

      
      
    </div>
  );
}

export default App;
