import React from "react";

type Player = "X" | "O" | "BOTH" | null;

const Square = ({
  winner,
  onClick,
  value,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) => {
  //if no value return an empty button and button is disabled, winner is passed to a Boolean because disabled requires a boolean value
  if (!value) {
    //pass a onClick on the button without value
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }

  /* if there is a value the button text will be the value */
  return (
    <button className={`square square_${value.toLowerCase()}`} disabled>
      {value}
    </button>
  );
};

export default Square;
