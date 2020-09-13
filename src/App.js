import React from 'react';
import './styles/reset.css';
import { Container } from './styles/grid';
import SideBar from './components/SideBar';

function App(props) {
    return (
      <Container>
          <div className="sideBar">
              <SideBar />
          </div>
          <div className="mainGrid">
              <h1>teste</h1>
          </div>
      </Container>
    );
}

export default App;
