import styled from "styled-components";
import { useState } from "react";
import { useParticipants } from "../ParticipantsContext";

function AddParticipant() {
  const [participant, setParticipant] = useState("");
  const { dispatch } = useParticipants();
  return (
    <AddParticipantContainer>
      <ParticipantInput
        type="text"
        value={participant}
        onChange={(e) => {
          setParticipant(e.target.value);
        }}
        placeholder="Add a participant then press 'enter'"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "addParticipant", participant });
            setParticipant("");
          }
        }}
      />
    </AddParticipantContainer>
  );
}

const ParticipantInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 5px;
`;

const AddParticipantContainer = styled.div`
  margin: 0 50px 0 40px;
`;

export default AddParticipant;
