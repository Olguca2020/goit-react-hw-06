import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleContactDelete = (contactId) => {
    dispatch(removeContact(contactId));
  };

  return (
    <ul className={css.contactWrapper}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onButtonClick={() => handleContactDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};
