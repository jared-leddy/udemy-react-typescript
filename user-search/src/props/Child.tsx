interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Color: {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildFunction: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      Color: {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
