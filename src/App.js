import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Emoji from './components/Emoji';

function App() {
  return (
    <Switch>
      <Route path="/blog">
      </Route>
      <Route path="/">
        <div className="App">
          <p className="center-text header"><Emoji className="center-text" symbol="🛠️" style={{ marginRight: '0.5em' }} /> WIP (both the website and myself ;p) <Emoji className="center-text" symbol="🛠️" style={{ marginLeft: '0.5em' }} /></p>
          <hr />
          <p className="header">about me</p>
          <ul style={{ listStyleType: 'circle' }}>
            <li>i find web development EXTREMELY fun</li>
            <li>but the math behind ML is so interesting {'<3'}</li>
            <li>my current dream seems to be cognitive science</li>
          </ul>
          <hr />
          <p className="header">some projects</p>
          <Link to={{ pathname: "https://time-taggr.herokuapp.com" }} className="App-link" target="_blank">time-Taggr</Link>
          <Link to={{ pathname: '' }} className="App-link" target="_blank">telegram wordcloud bot</Link>
          <hr style={{ marginTop: '1em' }} />
          <p className="header">links</p>
          <Link to={{ pathname: "https://time-taggr.herokuapp.com" }} className="App-link" target="_blank">GitHub</Link>
          <Link to={{ pathname: '' }} className="App-link" target="_blank">LinkedIn</Link>
          <span>ericmiranda7@gmail.com</span>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
