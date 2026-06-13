import {usestate} from "react"
import cardPreview from "./components/CardPreview";

function App() {

  const [settings, setSettings] = useState({
    width: "300px",
    height: "200px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc",
    title: "Card Title",
    description: "This is a description of the card.",
    buttonText: "Click Me"
  });

  return (

    <cardPreview settings={settings} />
  )
}

export default App;