import React from 'react';
import ReactDOM from 'react-dom';
import Utama from './contacts/utama';
import Contacts from './contacts/contacts';
import About from './contacts/about';
import AddContact from './contacts/addcontact'; // Import komponen AddContact

const App = () => {
  const handleNavigation = (path) => {
    window.history.pushState({}, path, window.location.origin + path);
    renderApp();
  };

  const renderApp = () => {
    let component;
    const currentPath = window.location.pathname;

    if (currentPath === '/' || currentPath === '/utama') {
      component = <Utama />;
    } else if (currentPath === '/about') {
      component = <About />;
    } else if (currentPath === '/contacts') {
      component = <Contacts />;
    } else if (currentPath === '/addcontact') { // Tambahkan kondisi untuk halaman AddContact
      component = <AddContact />;
    } else {
      component = <div>Halaman tidak ditemukan</div>;
    }

    ReactDOM.render(
      <React.StrictMode>
        <div>
          <h1>Welcome to the Contact App</h1>
          <nav>
            <ul>
              <li><button onClick={() => handleNavigation('/utama')}>Utama</button></li>
              <li><button onClick={() => handleNavigation('/about')}>About</button></li>
              <li><button onClick={() => handleNavigation('/contacts')}>Contacts</button></li>
               </ul>
          </nav>
          {component}
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  // Handle initial rendering
  renderApp();

  // Handle back/forward browser navigation
  window.onpopstate = renderApp;

  return null;
};

ReactDOM.render(<App />, document.getElementById('root'));
