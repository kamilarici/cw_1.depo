import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};
Nav.propTypes = {
  title: PropTypes.string.isRequired,
};
Nav.defaultProps = {
  title: "default app",
};
export default Nav;
