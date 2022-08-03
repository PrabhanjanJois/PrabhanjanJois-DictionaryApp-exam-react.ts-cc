import HomePage from "./components/HomePage";
import TitleNav from "./components/TitleNav";
import "./App.css";

export default function App() {
  var imgurl = "./dictback.jpg";
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( 89.8deg,  rgba(204,156,223,1) 0.3%, rgba(155,219,245,1) 20.4%, rgba(245,183,208,1) 40.2%, rgba(250,186,98,1) 62.9%, rgba(234,238,240,1) 81.9%, rgba(250,245,171,1) 99.2% )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <TitleNav />
      <HomePage />
    </div>
  );
}
