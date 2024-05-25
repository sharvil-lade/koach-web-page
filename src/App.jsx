import Coaches from "./components/Coaches";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Koach from "./components/Koach";
import KoachMatch from "./components/KoachMatch";
import Border from "./components/Border";

function App() {
  return (
    <div>
      <Border>
        <Hero />
      </Border>
      <Border>
        <Dashboard />
      </Border>
      <Border>
        <Koach />
      </Border>
      <Border>
        <Coaches />
      </Border>
      <Border>
        <KoachMatch />
      </Border>
    </div>
  );
}

export default App;
