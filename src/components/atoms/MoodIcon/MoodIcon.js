import good from "../../../assets/iCons/Good.svg";
import middle from "../../../assets/iCons/Neutral.svg";
import bad from "../../../assets/iCons/Bad.svg";
import marker from "../../../assets/iCons/Marker.svg";

export const MoodIcon = ({ className, mood, ...rest }) => {
  const classes = getClasses(className);

  switch (mood) {
    case "good":
      return (
        <button className={classes} mood={mood} {...rest}>
          <img src={good} alt="goodMood-icon" className="w-100 h-100" />
        </button>
      );
    case "middle":
      return (
        <button className={classes} mood={mood} {...rest}>
          <img src={middle} alt="middleMood-icon" className="w-100 h-100" />
        </button>
      );
    case "bad":
      return (
        <button className={classes} mood={mood} {...rest}>
          <img src={bad} alt="badMood-icon" className="w-100 h-100" />
        </button>
      );

    default:
      return (
        <div {...rest}>
          <img src={marker} alt="marker-icon" />
        </div>
      );
  }
};

const getClasses = (extra) => {
  const defaultClasses = getDefaultClasses();
  const extraClasses = extra;

  return `${defaultClasses} ${extraClasses}`;
};

const getDefaultClasses = () => `border-0 bg-transparent`;
