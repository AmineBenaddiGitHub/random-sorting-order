import { useParticipants } from "../ParticipantsContext";
import styled from "styled-components";

function Participants() {
  const { state, dispatch } = useParticipants();
  return (
    <ParticipantContainer>
      {state.participants.map((e, idx) => (
        <li key={idx}>
          <ParticipantEntry>
            <ParticipantName>{e}</ParticipantName>
            <ParticipantButton
              onClick={() => {
                dispatch({ type: "removeParticipant", idx });
              }}
            >
              DELETE
            </ParticipantButton>
          </ParticipantEntry>
        </li>
      ))}
    </ParticipantContainer>
  );
}

const ParticipantContainer = styled.ul`
  list-style-type: circle;
`;

const ParticipantName = styled.p`
  min-width: 200px;
`;

const ParticipantEntry = styled.div`
  display: flex;
  align-items: center;
`;

const ParticipantButton = styled.button`
  cursor: pointer;
  height: 2rem;
  background-color: tomato;
  border: 2px solid tomato;
  border-radius: 5px;
  &:hover {
    background-color: red;
  }
`;

export default Participants;
