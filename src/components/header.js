import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header fragment="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header-bar">
                <a class="navbar-brand" href="/">Blocks by React</a>

                <span class="nav-item">
                <span text="${username}"></span>
                </span>
            </nav>
        </header>
    );
  }
}

export default Header;