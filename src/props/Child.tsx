interface ChildProps {
  color: string;
  onClick: () => void;
  children: any;
}

export const Child = (props: ChildProps) => {
  return (<div>{props.color}</div>);
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <>
      <div>{color}
        {children}
        <button onClick={onClick}>Click me</button>
      </div>
    </>
  );
}

console.log(ChildAsFC.displayName = 'hello');
