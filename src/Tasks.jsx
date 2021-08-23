import React from 'react'

function Tasks() {
    return (
        <div className="tasks">
            <h1>Inbox</h1>
            <div className="add_task__btn">
                <span className="plus">+</span>
                <span className="add_task_text">Add Task</span>
            </div>
            <div className="add_task_dialog">
                <input />
            </div>
            <div className="add_task_action_container">
                <div className="btn_container">
                    <button className="add_btn">Add Task</button>
                    <button className="cancel_btn">Cancel</button>
                </div>
                <div className="icon_container"></div>
            </div>
        </div>
    )
}

export default Tasks
