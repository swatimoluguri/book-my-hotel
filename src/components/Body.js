import Awards from "./Awards";
import Suggestions from "./Suggestions";
import OurStory from "./OurStory";
import Discount from "./Discount";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <Awards />
      <Suggestions id="suggestions"/>
      <OurStory id="our-story"/>
      <Discount/>
      <Contact id="contact-us"/>
      <Testimonials/>
      <Footer/>
    </>
  );
};
export default Body;
