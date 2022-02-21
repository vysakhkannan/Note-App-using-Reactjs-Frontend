import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotePage from "./pages/NotePage"
import './App.css'

function App() {
  return (
    <BrowserRouter>

        <div className="container dark">
          <div className="app">
            <Header/>
            <Routes>
              <Route path="/" element={<NotesListPage/>}/>
              <Route path="/note/:id" element={<NotePage/>}/>
            </Routes>
          </div>


        </div>
    </BrowserRouter>
  );
}

export default App;
