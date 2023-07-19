import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <h1>Contact</h1>
      <button className="btn btn-success" onClick={() => navigate(-1)}>
        go back
      </button>
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        go back
      </button>
    </div>
  );
};

export default Contact;
