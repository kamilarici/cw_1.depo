const User = (props) => {
  return (
    <div>
      <ul>
        <li>isim:{props.name} </li>
        <li>departman:{props.department}</li>
        <li>maas: {props.salary}</li>
      </ul>
    </div>
  );
};

export default User;
