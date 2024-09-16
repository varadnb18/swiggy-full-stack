import Header from "../Header/Header";
import ScrollBar from "../Scroll-Bar/ScrollBar";
import Title from "../Title/Title";
import Sorting from "../Sorting/Sorting";
import Home from "../Container/Home";

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
