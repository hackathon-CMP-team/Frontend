import { NavLink } from 'react-router-dom';
import classes from './StyledNavLink.module.css';
function StyledNavLink({ to, text }) {
  return (
    <NavLink
      className={classes['nav-link']}
      to={to}
    >
      {text}
    </NavLink>
  );
}

export default StyledNavLink;
