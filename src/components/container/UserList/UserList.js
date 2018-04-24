import React from 'react';
import List from '@components/presentational/List';

export default class UserList extends React.Component {
  state = {
    userList: [
      'Rafael Câmara',
      'Igor Octaviano',
      'Pedro Froes',
      'João Xavier',
      'Gabriel Bessa',
      'Louise Bougleaux'
    ]
  }
  render() {
    return <List dataList={this.state.userList} />
  }
}