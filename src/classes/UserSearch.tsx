import React, { Component } from 'react';

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[]
}
interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends React.Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  // If not an arrow, anonymous function, will throw undefined error
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      console.log(user.name)
      return user.name === this.state.name;
    })

    this.setState({ user: foundUser })
  }



  render() {

    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && name}
          <h3>Results: </h3>
          <p>{user && user.name}</p>
          <p>{user && user.age}</p>
        </div>
      </div>
    )
  }
}

export default UserSearch;