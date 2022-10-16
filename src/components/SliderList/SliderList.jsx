import SliderItems from "../sliderItem/SliderItems";
import "./sliderList.scss";

const SliderList = () => {
  return (
    <div className="slider-list">
      <span className="slider-title">Tournaments</span>
      <SliderItems />
    </div>
  );
};

export default SliderList;
