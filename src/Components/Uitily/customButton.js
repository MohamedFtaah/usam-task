import React, { useState } from 'react'

export default function CustomButton({ Color = 'red', changColor, textColor = 'white', children }) {
    const [color, setColor] = useState(Color)

    return (
        <div>
            <button onClick={changColor ? () => { setColor(changColor) } : null} style={{ backgroundColor: color, color: textColor }} className=' w-32 h-10 rounded-3xl '> {children}</button>
        </div>
    )
}
