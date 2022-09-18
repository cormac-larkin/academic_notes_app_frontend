const getClasses = async () => {

    // Construct the request
    const options = {
        method: 'GET',
        headers: new Headers({ 'content-type': 'application/json' }),
        credentials: "include"
    };

    // Send request, check for error response
    const response = await fetch('http://localhost:4000/classes', options);
    if (response.status !== 200) { return response; }

    // If no error, return JSON content of response
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

    // Send request, check for error response
    const response = await fetch('http://localhost:4000/classes/add', options);
    if (response.status !== 200) { return response; }

    // If no error, return JSON content of response
    const addedClass = await response.json();
    return addedClass;
};


module.exports = { getClasses, addClass };