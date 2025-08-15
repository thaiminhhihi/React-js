import React from 'react';
function Childcomponent({names, age}) {
    return (
        <div>
            <h1> Names = {names} </h1>
            <h2> Age = {age} </h2>
        </div>
    );

}
export default Childcomponent;