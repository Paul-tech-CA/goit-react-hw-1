import React from "react";
import data from "../data/data";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friends/FriendList";
import TransactionHistory from "./transactions/TransactionHistory";

const App = () => {
  const { user, friends, transactions, statisticalData } = data;
  return (
    <div>
      <Profile
        {...user}
        // name={user.name}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
