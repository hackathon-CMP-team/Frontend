import classes from '../styles/roundBtn.module.css';

function RoundButton({ text }) {
  return <button className={classes['round-btn']}>{text}</button>;
}

export default RoundButton;
