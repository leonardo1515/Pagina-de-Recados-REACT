import ContactType from "./ContactType";

type ContactsType = {
  items: ContactType[];
  status: "success" | "error" | "";
};

export default ContactsType;
