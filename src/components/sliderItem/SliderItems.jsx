import "./sliderItems.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRef, useState } from "react";

const SliderItems = () => {
  const listRef = useRef();
  let [sliderIndex, setSliderIndex] = useState(0);

  function handleEvent(direction) {
    let itemsPerContainer = getComputedStyle(listRef.current).getPropertyValue(
      "--items-per-container"
    );

    let itemsInContainer = listRef.current.children.length;

    if (direction === "left") {
      if (sliderIndex - 1 < 0) {
        sliderIndex = Math.ceil(itemsInContainer / itemsPerContainer) - 1;
        listRef.current.style.transform = `translateX(calc(${sliderIndex} * -100%))`;
        setSliderIndex(sliderIndex);
      } else {
        sliderIndex = sliderIndex - 1;
        listRef.current.style.transform = `translateX(calc(${sliderIndex} * -100%))`;
        setSliderIndex(sliderIndex);
      }
    } else if (direction === "right") {
      if (sliderIndex + 1 >= Math.ceil(itemsInContainer / itemsPerContainer)) {
        sliderIndex = 0;
        listRef.current.style.transform = `translateX(calc(${sliderIndex} * -100%))`;
        setSliderIndex(sliderIndex);
      } else {
        sliderIndex = sliderIndex + 1;
        listRef.current.style.transform = `translateX(calc(${sliderIndex} * -100%))`;
        setSliderIndex(sliderIndex);
      }
    }
  }

  return (
    <div className="slider">
      <button onClick={() => handleEvent("left")} className="button arrow-left">
        <ArrowBackIosOutlinedIcon className="icon arrow-left" />
      </button>
      <div ref={listRef} className="slider-container">
        <img
          src="https://i3.ytimg.com/vi/Gf7txHEJ41s/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/TqV9rHWfFrQ/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/Gf7txHEJ41s/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/TqV9rHWfFrQ/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/Vre1ww7s76U/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/OncYOQ-9q2k/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/KrxWz48-Oug/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/Gf7txHEJ41s/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/OncYOQ-9q2k/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/OncYOQ-9q2k/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/OncYOQ-9q2k/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/OncYOQ-9q2k/maxresdefault.jpg"
          alt=""
        />
        <img
          src="https://i3.ytimg.com/vi/OncYOQ-9q2k/maxresdefault.jpg"
          alt=""
        />
      </div>
      <button
        onClick={() => handleEvent("right")}
        className="button arrow-right"
      >
        <ArrowForwardIosOutlinedIcon className="icon" />
      </button>
    </div>
  );
};

export default SliderItems;
