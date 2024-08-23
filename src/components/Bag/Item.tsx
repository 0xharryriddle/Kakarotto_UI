import React, { useState } from 'react'

interface ItemProps {
    itemData: any;
}

export default function Item({ itemData }: ItemProps) {
    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });

    const onMouseMove = (event: React.MouseEvent) => {
        setCursorPosition({ top: event.clientY, left: event.clientX });

        // TODO: Implement the logic to move the item with the cursor
        return "";
    };

    return (
        <div>Item</div>
    )
}
