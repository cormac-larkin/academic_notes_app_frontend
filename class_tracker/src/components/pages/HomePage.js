import { useState, useEffect, useRef } from 'react';
import { getClasses, addClass } from '../handlers/classHandlers';

const HomePage = (props) => {

    const [classes, setClasses] = useState([]);
    const [lastAddedClass, setLastAddedClass] = useState();
    const newClass = useRef(null);

    const submitHandler = async (event) => {
        event.preventDefault();
        // Get name of the new class which User wants to add
        const className = newClass.current.value;
        // Ensure it is not a duplicate of the last added class (prevents accidental double clicks)
        if (className === lastAddedClass) { return; }
        // Add new class to database and update 'lastAddedClass' state
        await addClass(className);
        setLastAddedClass(className);
    };

    useEffect(() => {
        const populatePage = async () => {
            let response = await getClasses();

            const classList = response.map((cls) => (cls.className));
            setClasses(classList);
        };
        populatePage();
    }, [lastAddedClass]);

    return (
        <div>
            <div>
                {
                    classes.map((element) => (
                        <h1 key={element}>{element}</h1>
                    ))
                }
            </div>

            <form onSubmit={submitHandler}>
                <input ref={newClass} type="text" name="newClass" />
                <input type="submit" value="Add Class" />
            </form>
        </div >
    );
};

export default HomePage;