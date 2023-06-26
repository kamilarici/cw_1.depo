import PropTypes from "prop-types";
// !impt kısayolu ile geliyor

const User = (props) => {
  const { name, department, salary } = props;
  return (
    <div className="col-md-8 mb-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4 className="d-inline">{name}</h4>
          <i
            className="fa-sharp fa-solid fa-trash"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="card-body">
          <p className="card-text">Maas:{salary}</p>
          <p className="card-text">department:{department}</p>
        </div>
      </div>
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
