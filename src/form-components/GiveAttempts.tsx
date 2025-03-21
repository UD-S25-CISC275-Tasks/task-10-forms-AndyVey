import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setLeft] = useState<number>(3);
    const [requested, setRequest] = useState<string>("");
    function useAttempt() {
        if (attemptsLeft > 0) {
            setLeft(attemptsLeft - 1);
        }
    }
    function gainAttempt() {
        const num = parseInt(requested);
        if (!isNaN(num) && num > 0) {
            setLeft(attemptsLeft + num);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requested}
                onChange={(e) => {
                    setRequest(e.target.value);
                }}
            />
            <button onClick={useAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={gainAttempt}>Gain</button>
        </div>
    );
}
