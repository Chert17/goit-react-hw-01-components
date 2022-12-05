import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { Tr } from './TransactionHistory.styled';
import { TableHeadText } from './TransactionHistory.styled';
import { TableBodyText } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Tr>
          <TableHeadText>Type</TableHeadText>
          <TableHeadText>Amount</TableHeadText>
          <TableHeadText>Currency</TableHeadText>
        </Tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <TableBodyText>{type}</TableBodyText>
            <TableBodyText>{amount}</TableBodyText>
            <TableBodyText>{currency}</TableBodyText>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.PropsTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
