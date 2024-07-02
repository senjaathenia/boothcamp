
import React, { useState } from 'react';
import Utama from './contacts/utama';
import Contacts from './contacts/contacts';
import AddContact from './contacts/addCcntact';
import EditContact from './contacts/editcontact';

const Appp = () => {
  const [route, setRoute] = useState('');

  const handleNavigation = (routeName) => {
    setRoute(routeName);
  };

  return (
    <div>
      {route === '' && <Utama />}
      {route === 'contacts' && <Contacts />}
      {route === 'add' && <AddContact />}
      {route === 'edit' && <EditContact />}
      <nav>
        <ul>
          <li onClick={() => handleNavigation('')}>Home</li>
          <li onClick={() => handleNavigation('contacts')}>Contacts</li>
          <li onClick={() => handleNavigation('add')}>Add Contact</li>
          <li onClick={() => handleNavigation('edit')}>Edit Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Appp;
