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
            <div data-testid="test-accordion" onClick={() => setToggle(prev => !prev)}>
                {selected || initialValue}
            </div>
            <ul role="list">
            {(hasItems && toggle) && items.map((el) => {
                const key = "option" + el.id;
                return (
                    <option 
                        key={key} 
                        onClick={(el) => {
                            onSelect(el);
                            setToggle(prev => !prev);
                        }}
                        data-testid={key}
                        >
                        {el.name}
                    </option>
                )})}
            </ul>
        </div>
    )
}

export default Accordion;