import './App.css';
import React from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {

  const contacts = [
    {
      id:"1",
      name:"prasad",
      email:"prasad@gmail.com"
    },
    {
      id:"2",
      name:"pramod",
      email:"pramod@gmail.com"
    },
  ];
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
