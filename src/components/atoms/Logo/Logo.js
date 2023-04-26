import logo from "../../../assets/Logo.svg";

export const Logo = ({ className = "", ...rest }) => {
  const classes = getClasses(className);
  return (
    <div className={classes} {...rest}>
      <img src={logo} alt="logo" className="w-100 h-100" />
    </div>
  );
};

const getClasses = (extra) => {
  const defaultClasses = getDefaultClasses();
  const extraClasses = extra;

  return `${defaultClasses} ${extraClasses}`;
};

const getDefaultClasses = () => ``;
