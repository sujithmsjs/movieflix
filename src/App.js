import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import MoviesTable from './MoviesTable';
import MovieForm from './MovieForm';
import AsyncTest from './AsyncTest';

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-md-3">
          <h4>Add New</h4>
          <MovieForm />
          <AsyncTest />
        </div>
        <div class="col-md-9">
          <MoviesTable />
        </div>
      </div>

    </div >

  );
}

export default App;
