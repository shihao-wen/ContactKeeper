import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactStates = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'abc',
        email: 'abc@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'def',
        email: 'def@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'hij',
        email: 'hij@gmail.com',
        phone: '333-333-3333',
        type: 'personal'
      },
      {
        id: 4,
        name: 'mno',
        email: 'mno@gmail.com',
        phone: '444-444-4444',
        type: 'personal'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter COntacts

  // Clear Filter

  return (
    <contactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactStates;
