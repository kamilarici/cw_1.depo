import ImageItem from "./ImageItem";

const ListImg = ({ imagesPlaceholder }) => {
  return (
    <div className="car">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};

export default ListImg;
