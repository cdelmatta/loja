import { AuthProvider } from "./context/AuthContext";
import Routers from "./components/routers/Routers";

function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  );
}

export default App;
