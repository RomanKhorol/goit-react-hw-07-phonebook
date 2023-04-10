import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import PropTypes from 'prop-types';
import { AbonentCard, AbonentText, AbonentDeleteBnt } from './Item.styled';

export const Item = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <AbonentCard>
      <AbonentText>{contact.name}:</AbonentText>
      <AbonentText>{contact.phone}</AbonentText>
      <AbonentDeleteBnt onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </AbonentDeleteBnt>
    </AbonentCard>
  );
};

Item.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
