import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./HamburgerMenu.module.css";

function HamburgerMenu(props) {
    const menu = useRef();
    const checkBox = useRef();

    // Function to close Hamburger Menu (side-menu)
    function menuCloser() {
        checkBox.current.checked = false;
    }

    // Function to close Hamburger Menu if user clicks other parts of the page
    function outsideClickHandler(event) {
        if (menu.current.contains(event.target) || checkBox.current.contains(event.target)) {
            return;
        }
        menuCloser();
    }

    // Listener to trigger Menu Close function
    document.addEventListener("click", outsideClickHandler);

    return (
        <div className={classes.menuToggle}>
            <input ref={checkBox} type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul ref={menu} className={classes.menu}>
                <li>
                    <Link to="/" onClick={menuCloser}>
                        Home
                    </Link>
                </li>
                <a href="#">
                    <li>Info</li>
                </a>
                <a href="#">
                    <li>Contact</li>
                </a>
                <a href="#">
                    <li>Show me more</li>
                </a>
            </ul>
        </div>
    );
}

export default HamburgerMenu;
