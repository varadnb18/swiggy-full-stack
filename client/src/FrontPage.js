import Header from "./Components/Header/Header";
import ScrollBar from "./Components/Scroll-Bar/ScrollBar";
import Home from "./Components/Container/Home";
import Title from "./Components/Title/Title";
import Sorting from "./Components/Sorting/Sorting";

function FrontPage() {
  return (
    <div>
      <Header />
      <ScrollBar />
      <Title />
      <Sorting />
      <Home />
    </div>
  );
}

export default FrontPage;
