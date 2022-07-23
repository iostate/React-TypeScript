import { useState } from "react";
import './EventComponent.css';

const EventComponent = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [poss, setPoss] = useState<{ x: number; y: number }[]>([])


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(`X, Y: ${event.clientX},  ${event.clientY}`);
    const pos = { x: event.clientX, y: event.clientY };
    setPos(pos);
    setPoss([...poss, pos]);
    console.log(poss);
  }
  return (
    <>
      <input onChange={onChange} />
      <div className="draggables">
        <div draggable onDragStart={onDragStart}>
          <button>
            Drag Me!
          </button>
        </div>
        <div draggable onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <button className="buttons">
            Drag Me!
          </button>
        </div>
      </div>
      <ul>
        {poss && poss.length > 0 ? poss.map((position, id): React.ReactNode => {
          return <li key={id}>{position.x},{position.y}</li>;
        }) : ''}
      </ul>
    </>
  );
}

export default EventComponent;
