import { Section } from '../Section/Section';
import { User } from '../User/User';
import user from 'user.json';
import { Statistics } from '../Statistics/Statistics';
import statistics from 'data.json';
import { FriendsList } from '../FriendsList/FriendsList';
import friends from 'friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';

export function App() {
  return (
    <>
      <Section>
        <User
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        ></User>
        <Statistics title="Upload stats" stats={statistics}></Statistics>
        <FriendsList friends={friends}></FriendsList>
        <TransactionHistory items={transactions}></TransactionHistory>
      </Section>
    </>
  );
}
