import call from "../../../assets/iCons/Calling.svg";

export const ContactRequestIcon = ({ className, ...rest }) => {
  const classes = getClasses(className);
  return (
    <div className={classes} {...rest}>
      <img src={call} alt="marker-icon" />
    </div>
  );
};

const getClasses = (extra) => {
  const defaultClasses = getDefaultClasses();
  const extraClasses = extra;

  return `${defaultClasses} ${extraClasses}`;
};

const getDefaultClasses = () =>
  `bg-primary d-flex justify-content-center align-items-center custom_ContactRequest_Icon`;
