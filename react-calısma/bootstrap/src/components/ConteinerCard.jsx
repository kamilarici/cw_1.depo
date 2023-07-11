import Form from "react-bootstrap/Form";

const ConteinerCard = () => {
  return (
    <>
      {/* //! input içine çarpi ikonu getirmek için type:search yapmak gerekiyor.html getiriyor */}
      <Form.Control type="search" placeholder="Sarch Player" />
    </>
  );
};

export default ConteinerCard;
