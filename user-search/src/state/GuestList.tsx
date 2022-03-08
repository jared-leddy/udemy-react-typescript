import { useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>

      <ul>
        {guests.map((guest) => {
          return <li key={guest}>{guest}</li>;
        })}
      </ul>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
