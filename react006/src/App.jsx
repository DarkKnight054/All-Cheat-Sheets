import "./App.css";
import Bracket from "./components/composition/Bracket";
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";
function App() {
  return (
    <div className="App">
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </div>
  );
}

export default App;
