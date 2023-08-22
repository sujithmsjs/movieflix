import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import MoviesTable from './MoviesTable';

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-md-3">
          <h1>Add New</h1>
          <form>
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input type="text" class="form-control" id="title" placeholder="Enter title" value="string" />
            </div>
            <div class="mb-3">
              <label for="genre" class="form-label">Genre</label>
              <select class="form-select" id="genre">
                <option value="ACTION" selected>ACTION</option>

              </select>
            </div>
            <div class="mb-3">
              <label for="director" class="form-label">Director</label>
              <input type="text" class="form-control" id="director" placeholder="Enter director" value="string" />
            </div>
            <div class="mb-3">
              <label for="duration" class="form-label">Duration</label>
              <input type="number" class="form-control" id="duration" placeholder="Enter duration" value="0" />
            </div>
            <div class="mb-3">
              <label for="rating" class="form-label">Rating</label>
              <input type="number" class="form-control" id="rating" placeholder="Enter rating" value="0" />
            </div>
            <div class="mb-3">
              <label for="releaseDate" class="form-label">Release Date</label>
              <input type="date" class="form-control" id="releaseDate" value="2023-08-22" />
            </div>
            <div class="mb-3">
              <label for="collection" class="form-label">Collection</label>
              <input type="text" class="form-control" id="collection" placeholder="Enter collection" value="50.08" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-9">
          <MoviesTable />
        </div>
      </div>

    </div >

  );
}

export default App;
