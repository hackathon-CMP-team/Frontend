import { Avatar, Badge, Grid, IconButton } from '@mui/material';
import MoneyCard from '../../components/MoneyCard/MoneyCard';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import LastActivityCard from '../../components/LastActivityCard/LastActivityCard';
function Home() {
  const popularOperations = [
    { text: 'Transfer', icon: <SyncAltOutlinedIcon />, route: '' },
    { text: 'Payment', icon: <PaidOutlinedIcon />, route: '' },
    { text: 'Withdraw', icon: <CleanHandsOutlinedIcon />, route: '' },
    {
      text: 'Help',
      icon: <HelpOutlineOutlinedIcon />,
      route: '/dashboard/help'
    },
    { text: 'Virtual Card', icon: <CreditCardOutlinedIcon />, route: '' }
  ];
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
      <LastActivityCard />
      <MoneyCard title="Most popular operation">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(6rem, 1fr))'
          }}
        >
          {popularOperations.map((op) => {
            return (
              <IconButton
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
                size="small"
              >
                <Avatar style={{ backgroundColor: '#E2ACB4' }}>
                  {op.icon}
                </Avatar>
                <h6>{op.text}</h6>
              </IconButton>
            );
          })}
        </div>
      </MoneyCard>
    </div>
  );
}

export default Home;
