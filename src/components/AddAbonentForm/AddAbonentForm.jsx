import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { InputList, Label, Button } from './AddAbonentForm.styled';
import { addContact } from '../../redux/contactsOperations';
import { getContacts } from 'redux/selectors';

const initialValues = {
  name: '',
  phone: '',
};
const Input = styled(Field)`
  margin-left: auto;
  outline: none;
  border-color: #a9a9a9;
  border-radius: 4px;
  :focus {
    border-color: #4169e1;
    box-shadow: 1px 1px 2px 0 #4169e1;
  }
`;
export const AddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const hendleSubmit = ({ name, phone }, { resetForm }) => {
    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existContact) {
      resetForm();
      return alert(`${name} is already in contacts`);
    } else dispatch(addContact({ name, phone }));

    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
      <div>
        <Form autoComplete="off">
          <InputList>
            <li>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </li>
            <li>
              <Label htmlFor="phone">Number</Label>
              <Input
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </li>
          </InputList>

          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    </Formik>
  );
};
