import React, { useState } from "react";

interface IAccordionProps {
    initialValue : string;
    items : any[];
    selected?: string;
    onSelect : (el : any) => void;
}

const Accordion : React.FC<IAccordionProps> = ({initialValue, items, selected, onSelect}) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const hasItems = items.length > 0;
    return (
        <div>
            <div 
                data-testid="test-accordion"
                onClick={() => setToggle(prev => !prev)}
                >
                {selected || initialValue}
            </div>
            {(hasItems && toggle) && (
                <ul>
                    {items.map((el) => {
                        return (
                            <li 
                                key={"a" + el.id} 
                                onClick={() => {
                                    onSelect(el);
                                    setToggle(false);
                                }}
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

export default Accordion;