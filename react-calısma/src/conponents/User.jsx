import PropTypes from "prop-types";
// !impt kısayolu ile geliyor

const User = (props) => {
  const { name, department, salary } = props;
  return (
    <div>
      <ul>
        <li>isim:{name} </li>
        <li>departman:{department}</li>
        <li>maas: {salary}</li>
      </ul>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
};
User.defaultProps = {
  name: "bilgi yok",
  department: "bilgi yok",
  salary: "bilgi yok",
};

export default User;
