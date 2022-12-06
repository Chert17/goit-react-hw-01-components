import PropTypes from 'prop-types';
import { StatsCard } from './Statistics.styled';
import { StatsList } from './Statistics.styled';
import { StatsListItem } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatsCard>
      {title && <h2 className="title">{title}</h2>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsListItem className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage} %</span>
          </StatsListItem>
        ))}
      </StatsList>
    </StatsCard>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      fileExtension: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// export default function Statistics({ title, stats }) {
//   return (
//     <section className="statistics">
//       <h2 className="title">{title}</h2>

//       <ul className="stat-list">
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//         <li className="item">
//           <span className="label">{stats.label}</span>
//           <span className="percentage">{stats.percentage}%</span>
//         </li>
//       </ul>
//     </section>
//   );
// }

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       fileExtension: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
