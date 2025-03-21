import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Import Form for Bootstrap Switc

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editing}
                onChange={(e) => {
                    setEditing(e.target.checked);
                }}
            />
            {editing ?
                <div>
                    <Form.Group controlId="nameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student"
                        checked={isStudent}
                        onChange={(e) => {
                            setStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.{" "}
                </p>
            }
        </div>
    );
}
