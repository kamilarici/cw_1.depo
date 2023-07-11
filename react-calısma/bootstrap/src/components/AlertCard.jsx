import Alert from "react-bootstrap/Alert";

const AlertCard = () => {
  return (
    <div>
      <Alert key="info" variant="info">
        This is a info alert with{" "}
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
    </div>
  );
};

export default AlertCard;
