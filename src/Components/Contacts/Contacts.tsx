import React, { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import "./Contacts.css";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export default function Contacts() {
  const [contacts, setContacts] = useState<Array<any>>([]); // Replace 'any' with the appropriate type for contacts
  const [isOpen, setIsOpen] = useState(false);

  const deleteContact = (id: number) => { // Add type annotation for 'id'
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  const addContact = (newContact: any) => { // Replace 'any' with the appropriate type for newContact
    setIsOpen(false);
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.splice(1, 5));
        console.log(data);
      });
  }, []);

  return (
    <>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
      <button
        type="button"
        className="submitButton"
        onClick={() => setIsOpen(true)}
      >
        Add contact
      </button>
      <Form isOpen={isOpen} onCancel={onCancel} addContact={addContact} />
    </>
  );
}
