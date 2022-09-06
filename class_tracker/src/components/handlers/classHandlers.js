const getClasses = async () => {

    // Construct the request
    const options = {
        method: 'GET',
        headers: new Headers({ 'content-type': 'application/json' }),
        credentials: "include"
    };

    const response = await fetch('http://localhost:4000/classes', options);
    const allClasses = await response.json();

    return allClasses;
};


const addClass = async (className) => {

    // Construct the request
    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        credentials: "include",
        body: JSON.stringify({
            className: className
        })
    };

    const response = await fetch('http://localhost:4000/classes/add', options);
    const allClasses = await response.json();

    return allClasses;
};


module.exports = { getClasses, addClass };