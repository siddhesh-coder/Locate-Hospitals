import Header from "./Header";
import Footer from "./Footer";
import MainContainer from "./MainContainer";

function Hero() {
  
  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <Header />
      <MainContainer/>
      <Footer />
    </div>
  );
}

export default Hero;
