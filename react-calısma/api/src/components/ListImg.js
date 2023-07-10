import ImageItem from "./ImageItem";

const ListImg = ({ imagesPlaceholder }) => {
  return (
    <div>
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};

export default ListImg;
