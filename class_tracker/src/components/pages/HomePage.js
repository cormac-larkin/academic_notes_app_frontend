import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getClasses, addClass } from '../handlers/classHandlers';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import styles from './HomePage.module.css';

const HomePage = (props) => {

    const navigate = useNavigate();

    const [classes, setClasses] = useState([]);
    const [lastAddedClass, setLastAddedClass] = useState();
    const newClass = useRef(null);

    const submitHandler = async (event) => {
        event.preventDefault();
        // Get name of the new class which User wants to add
        const className = newClass.current.value;
        // Ensure it is not a duplicate or empty string/whitespace
        const existingClassNames = classes.map((cls) => (cls.className));
        if (existingClassNames.includes(className) || (!className) || (className[0] === " ")) {
            newClass.current.value = "";
            alert("Invalid class name. Duplicate classes are not allowed. Class names cannot begin white a whitespace");
            return;
        }
        // Attempt to add new class to database
        const response = await addClass(className);
        // If server returns "401 Unauthorized", redirect user to Login page
        if (response.status === 401) {
            navigate('/login');
            return;
        }
        // Update 'lastAddedClass' state (triggers re-render)
        setLastAddedClass(className);
        // Clear input field
        newClass.current.value = "";
    };

    useEffect(() => {
        const populatePage = async () => {
            // Fetch the User's classes from database and add to our 'classes' state
            let response = await getClasses();
            if (response.status === 401) {
                navigate('/login');
                return;
            }
            setClasses(response);
        };
        populatePage();
        // Trigger a re-render when the User adds a new class
    }, [lastAddedClass, navigate]);

    return (

        <div className={styles.pageWrapper}>
            <NavBar />
            <div className={styles.main}>
                <div className={styles.sideBar}>
                    <ul className={styles.sideBarList}>
                        <li className={styles.sideBarItem}>
                            My Classes
                        </li>
                        <li className={styles.sideBarItem}>
                            My Notes
                        </li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h1>My Classes</h1>
                    {
                        !classes.length ? <h3>Looks like you haven't added any classes yet!</h3> :
                            classes.map((element) => (
                                <div key={element.uid} className={styles.classContainer}>
                                    <h3 className={styles.classTitle}>{element.className}</h3>
                                    <div className={styles.linkContainer}>
                                        <Link to='#' className={styles.noteLink}>Add Note</Link>
                                        <Link to='#' className={styles.noteLink}>View Notes</Link>
                                    </div>
                                </div>
                            ))
                    }

                    <form onSubmit={submitHandler}>
                        <input ref={newClass} type="text" name="newClass" />
                        <input type="submit" value="Add Class" />
                    </form>

                </div>
            </div>
            <Footer />
        </div>

    );
};

export default HomePage;