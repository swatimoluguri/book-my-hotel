import story from "../assets/story.jpg";
import mission from "../assets/mission.jpg";
import vison from "../assets/vision.jpg";

const OurStory = () => {
  return (
      <div className="our-story">
        <div className="story-headings">
          <h2 className="headingSuggestions">
            Our Story : Unveiling Our Passion for Travel
          </h2>
          <p className="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="story-container">
          <div className="story-img">
            <img src={story} alt="Our Story" />
          </div>
          <div className="story-desc">
            <h2 className="story-header">
              Our <span className="highlight">Story</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="story-button">Read More</button>
          </div>
        </div>
        <div className="story-container">
          <div className="story-desc">
            <h2 className="story-header">
              Our <span className="highlight">Mission</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="story-button">Read More</button>
          </div>
          <div className="story-img">
            <img src={mission} alt="Our Mission" />
          </div>
        </div>
        <div className="story-container">
        <div className="story-img">
            <img src={vison} alt="Our Vision" />
          </div>
          <div className="story-desc">
            <h2 className="story-header">
              Our <span className="highlight">Vision</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="story-button">Read More</button>
          </div>
        </div>
      </div>
  );
};
export default OurStory;
