import React from "react";

interface IDropdownProps {
    initialValue : string;
    items : any[];
    selected?: string;
    onSelect : (el : any) => void;
}

const Dropdown : React.FC<IDropdownProps> = ({initialValue, items, selected, onSelect}) => {
    const hasItems = items.length > 0;
    return (
        <div>
            <div data-testid="test-dropdown">{selected || initialValue}</div>
            {hasItems && (
                <ul>
                    {items.map((el) => {
                        return (
                            <li 
                                key={"a" + el.id} 
                                onClick={onSelect}
                                role="list"
                                >
                                {el.name}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;