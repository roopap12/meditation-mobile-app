import './App.css';

function App() {
  return (
    <div className="parent">
    <div className="child">Header</div>
    <div className="child">NavBar</div>
    <div className="main">
      <div className="child">Sidebar</div>
      <div className="child content">Content</div>  
    </div>
    <div className="child">Footer</div>
    
  </div>
  );
}

export default App;
