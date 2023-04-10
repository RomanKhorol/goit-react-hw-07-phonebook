import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';
import { Item } from 'components/Item/Item';
import { AbonentListUl } from './AbonentList.styled';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../../redux/selectors';

export const ItemList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContact = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  let visibleItems = getVisibleContact();

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <div>
          <AbonentListUl>
            {visibleItems.map(item => {
              return <Item key={item.id} contact={item} />;
            })}
          </AbonentListUl>
        </div>
      )}
    </>
  );
};

export default ItemList;
