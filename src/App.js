import "./App.css";
import BooksContainer from "./BooksApp/Books/BooksContainer";
import BookProfileContainer from "./BooksApp/BookProfile/BookProfileContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" exact element={<BooksContainer />} />
            <Route path="/:id" exact element={<BookProfileContainer />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
