const Course = ({ image, title, description }) => {
  //   const { title, description } = props;
  //   console.log(props);
  return (
    <div className="">
      <div className="">
        {/* <img src="" alt="" />
        <img src={image} alt="" />
        <div>{title}</div>
        <div>{description}</div> */}
        {/* <div className="card col-4 ">
          <img src={image} className="card-img-top  " alt="fgh" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Bilet Al
            </a>
          </div>
        </div> */}
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img className="" src={image} alt="img" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="">
                <p className="title is-4">{title}</p>
              </div>
            </div>

            <div className="content">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
