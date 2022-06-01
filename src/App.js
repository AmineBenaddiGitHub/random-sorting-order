import { ParticipantsProvider } from "./ParticipantsContext";
import Participants from "./Participants";
import AddParticipant from "./AddParticipant";
import RandomlySortedParticipants from "./RandomlySortedParticipants";

function App() {
  return (
    <ParticipantsProvider>
      <Participants />
      <AddParticipant />
      <RandomlySortedParticipants />
    </ParticipantsProvider>
  );
}

export default App;
