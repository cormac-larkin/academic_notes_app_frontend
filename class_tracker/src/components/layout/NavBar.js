import classes from './NavBar.module.css';

const NavBar = (props) => {
    return (
        <nav className={classes.navBar}>
            <div className={classes.homeButton}>
                Home
            </div>
            <ul className={classes.navList}>
                <li className={classes.navItem}>
                    Profile
                </li>
                <li className={classes.navItem}>
                    Logout
                </li>
            </ul>
        </nav>);
};

export default NavBar;