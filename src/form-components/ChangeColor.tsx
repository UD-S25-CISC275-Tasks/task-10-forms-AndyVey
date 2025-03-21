import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];
    const [selected, setSelected] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color} style={{ marginRight: "10px" }}>
                    <input
                        type="radio"
                        value={color}
                        name="color"
                        checked={selected === color}
                        onChange={(e) => {
                            setSelected(e.target.value);
                        }}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selected,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    border: "1px solid black",
                    width: "150px",
                    textAlign: "center",
                }}
            >
                {selected}
            </div>
        </div>
    );
}
