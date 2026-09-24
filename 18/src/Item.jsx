import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onClick }) => {
    const { id, text, state } = task;

    const handleClick = (e) => {
        e.preventDefault();
        onClick(id);
    };

    return (
        <div className="row">
            <div className="col-1">{id}</div>
            <div className="col">
                {state === 'finished' ? (
                    <s><a href="#" className="todo-task" onClick={handleClick}>{text}</a></s>
                ) : (
                    <a href="#" className="todo-task" onClick={handleClick}>{text}</a>
                )}
            </div>
        </div>
    );
};

export default Item;
// END
