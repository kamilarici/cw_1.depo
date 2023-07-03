const User = ({ name, surname, age, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn
        ? `benim adim ${name}, soyadim ${surname} yasım:${29}`
        : "giriş yapmadiniz"}
    </div>
  );
};

export default User;
