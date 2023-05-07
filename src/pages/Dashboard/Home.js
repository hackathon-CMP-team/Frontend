import { Grid } from '@mui/material';
import MoneyCard from '../../components/MoneyCard/MoneyCard';

function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
        gap: '1.25rem'
      }}
    >
      <MoneyCard title="Total balance" />
      <MoneyCard title="Income" />
      <MoneyCard title="Outcome" />
      <MoneyCard title="Spendings" />
      <MoneyCard title="Most popular operation" />
    </div>
  );
}

export default Home;
