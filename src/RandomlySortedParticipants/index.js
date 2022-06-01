import styled from "styled-components";
import { useParticipants } from "../ParticipantsContext";
import { useState } from "react";

function RandomlySortedParticipants() {
  const {
    state: { participants },
  } = useParticipants();
  const [randomOrder, setRandomOrder] = useState([]);
  const handleClick = () => {
    const copiedListParticipants = [...participants];
    const randomlySortedList = [];
    while (copiedListParticipants.length > 0) {
      const randIdx = Math.floor(Math.random() * copiedListParticipants.length);
      randomlySortedList.push(copiedListParticipants[randIdx]);
      copiedListParticipants.splice(randIdx, 1);
    }
    setRandomOrder(randomlySortedList);
  };
  return (
    <>
      <RandomlySortedContainer>
        <RandomSortButton onClick={handleClick}>Sort Randomly</RandomSortButton>
      </RandomlySortedContainer>
      <ol>
        {randomOrder.map((e, idx) => (
          <li key={idx}>{e}</li>
        ))}
      </ol>
    </>
  );
}

const RandomlySortedContainer = styled.div`
  margin: 20px 40px;
`;

const RandomSortButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2rem;
  background-color: aquamarine;
  border: 2px solid aquamarine;
  border-radius: 5px;
  &:hover {
    background-color: aqua;
  }
  font-weight: bold;
`;

export default RandomlySortedParticipants;
