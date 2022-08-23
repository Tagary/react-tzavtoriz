import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, List } from 'antd';
import React, { FC } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IContact } from '../../models/IUser';
import SearchForm from './SearchForm';

const Contacts: FC = () => {
  const { getContacts } = useActions();
  const { contact } = useTypedSelector((state) => state.contact);
  React.useEffect(() => {
    getContacts();
  }, []);
  const [filterList, setFilterList] = React.useState<IContact[] | null>(null);
  return (
    <div className="height100 contact__container">
      <SearchForm setInputSearch={setFilterList} />
      <Divider orientation="left">Contacts</Divider>

      <Card>
        <List
          itemLayout="horizontal"
          dataSource={contact}
          renderItem={(contact) => (
            <List.Item
              actions={[
                <Button>
                  <EditOutlined />
                </Button>,
                <Button>
                  <DeleteOutlined />
                </Button>,
              ]}>
              <List.Item.Meta
                title={contact.name}
                avatar={
                  <Avatar
                    src={
                      'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00a3daea6e3ad1c2ce1ad51fa00186bd63e2b358.jpg'
                    }
                  />
                }
              />
              <div>{contact.number}</div>
            </List.Item>
          )}></List>
      </Card>
    </div>
  );
};

export default Contacts;
