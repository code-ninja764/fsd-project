import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update'
import Delete from './components/Delete/Delete';
import Get from  './components/Get/Get';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {/* <h3>React CRUD app for car insurance</h3> */}
        </div>
        <div>
          <Route exact path="/" component={Create} />
        </div>
        <div style={{ marginTop: 25 }}>
          <Route exact path="/read" component={Read} /> 
        </div>
        <div>
        <Route path="/update" component={Update} />
        </div>
        <div>
        <Route path="/admin" component={AdminPanel} />
        </div>
        <div>
        <Route path="/delete" component={Delete} />
        </div>
        <div>
        <Route path="/get" component={Get} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;