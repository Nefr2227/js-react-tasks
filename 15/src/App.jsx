import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  { id: 1, name: 'White', className: 'light' },
  { id: 2, name: 'Black', className: 'dark' },
  { id: 3, name: 'Blue', className: 'dark-blue' },
];

class App extends React.Component {
  state = {
    currentTheme: themes[0],
  };

  setTheme = (theme) => {
    this.setState({ currentTheme: theme });
  };

  render() {
    const contextValue = {
      themes,
      currentTheme: this.state.currentTheme,
      setTheme: this.setTheme,
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        <div className="container mt-3">
          <ThemeSwitcher />
          <Tabs defaultActiveKey="home" className="mb-3">
            <Tab eventKey="home" title="Home">
              <Home />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Profile />
            </Tab>
          </Tabs>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;