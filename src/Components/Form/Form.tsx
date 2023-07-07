import React, { FormEvent } from "react";
import { nanoid } from "nanoid";
import "./Form.css";

interface FormProps {
  onCancel: () => void;
  addContact: (newContact: any) => void;
}

export default function Form({ onCancel, addContact }: FormProps) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const newContact = {
      id: nanoid(),
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      username: (target.elements.namedItem("username") as HTMLInputElement)
        .value,
      phone: (target.elements.namedItem("phone") as HTMLInputElement).value,
    };
    addContact(newContact);
    target.reset();
  };

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" required />

        <div className="buttonContainer">
          <button type="submit">Add</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
