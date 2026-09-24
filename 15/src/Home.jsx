import React from 'react';
import ThemeContext from './contexts';

const content = 'Текст для вкладки Home';

class Home extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { currentTheme } = this.context;

    return (
      <article className={currentTheme.className}>
        {content}
      </article>
    );
  }
}

export default Home;