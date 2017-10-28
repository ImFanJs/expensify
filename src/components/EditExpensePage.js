import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            I am editing the expense with id {props.match.params.id}.
            <p onClick={props.history.goBack}>Go Back</p>
        </div>
    );
}

export default EditExpensePage;
