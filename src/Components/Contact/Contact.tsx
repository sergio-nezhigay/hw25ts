import React from "react";
import "./Contact.css";

export interface ContactProps {
  id: number;
  name: string;
  username: string;
  phone: string;
  deleteContact: (id: number) => void;
}

export default function Contact({ id, name, username, phone, deleteContact }: ContactProps) {
  return (
    <div className="contactRow">
      <div className="names">
        <span>{name}</span>
        <span>{username}</span>
      </div>

      <span>{phone}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
