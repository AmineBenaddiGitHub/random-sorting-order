import { createContext, useReducer, useContext } from "react";

const ParticipantsContext = createContext();

function participantsReducer(state, action) {
  switch (action.type) {
    case "addParticipant": {
      return { participants: [...state.participants, action.participant] };
    }
    case "removeParticipant": {
      const newListParticipants = [...state.participants];
      newListParticipants.splice(action.idx, 1);
      return { participants: newListParticipants };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ParticipantsProvider({ children }) {
  const [state, dispatch] = useReducer(participantsReducer, {
    participants: [],
  });
  const value = { state, dispatch };
  return (
    <ParticipantsContext.Provider value={value}>
      {children}
    </ParticipantsContext.Provider>
  );
}

function useParticipants() {
  const context = useContext(ParticipantsContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { ParticipantsProvider, useParticipants };
