import Coaches from "./components/Coaches";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Koach from "./components/Koach";
import KoachMatch from "./components/KoachMatch";
import Border from "./components/Border";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Border>
        <Hero />
      </Border>

      <Border>
        <Banner />
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

      <Border>
        <Dashboard />
      </Border>

      <Border>
        <Footer />
      </Border>
    </div>
  );
}

export default App;
