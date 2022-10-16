import "./banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useRef } from "react";

const Banner = () => {
  let youtube_video = null;

  youtube_video = useRef(
    "https://www.youtube.com/embed/Fi7laZ15eYk?rel=0&controls=0&autoplay=1&mute=1"
  );
  return (
    <div className="banner">
      <div className="banner-container">
        <img
          src="https://i3.ytimg.com/vi/Fi7laZ15eYk/maxresdefault.jpg"
          alt=""
        />
        <iframe
          title="banner-vid"
          className="banner-video"
          width="560"
          height="315"
          frameBorder="0"
          src={youtube_video.current}
        ></iframe>
        <div className="banner-info">
          <div className="banner-buttons">
            <button className="button play-button">
              <PlayArrowIcon />
              <span>Play</span>
            </button>
            <button className="button more-info-button">
              <InfoOutlinedIcon />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
