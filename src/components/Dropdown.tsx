import { useState, type ReactElement, cloneElement } from "react";

// works but not very good
// better use the library provided one.
type TriggerProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

interface Props {
  children: ReactElement<TriggerProps>,
  options: ReactElement[],
}

export function Dropdown({ children, options }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [coors, setCoors] = useState<DOMRect>();

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    children?.props?.onClick?.(event);
    
    const rect = event.currentTarget?.getBoundingClientRect();
    
    if (!rect) return;
    setOpen(open => !open);
    setCoors(rect);
  }

  const child = cloneElement(children, { onClick: handleClick });

  return (
    <>
      {child}
      {open && 
        <div
          className='rounded-lg p-2 bg-gray-100'
          style={{
            'position': 'fixed',
            'top': `${coors?.bottom}px`,
            'left': `${coors?.left}px`,
            'transform': "translateX(-50%)",
            'display': 'flex',
            'flexDirection': 'column',
            'gap': '4px'
          }}
        >
          {options}
        </div>
      
      }
    </>
  )
}