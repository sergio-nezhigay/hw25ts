import React from "react";
import Contact, { ContactProps } from "../Contact/Contact";

interface ContactListProps {
  contacts: Array<ContactProps>;
  deleteContact: (id: number) => void;
}

export default function ContactList({ contacts, deleteContact }: ContactListProps) {
  return (
    <ul>
      {contacts.map(({ id, ...rest }) => (
        <li key={id}>
          <Contact id={id} {...rest} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
