import './App.css';


import Menubar from './components/menubar/menubar.component';
import Navbar from './components/navbar/navbar.component';
import PageContent from './components/page-content/page-content.component';




function App() {
  return (
    <div className="App">
       <Navbar /> 
       <Menubar />
       <PageContent />
    </div>
  );
}

export default App;
