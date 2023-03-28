import "./App.css";
import BooksContainer from "./BooksApp/Books/BooksContainer";
import BookProfileContainer from "./BooksApp/BookProfile/BookProfileContainer";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={ <BooksContainer />} />
          <Route path="/:id" exact element={ <BookProfileContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
