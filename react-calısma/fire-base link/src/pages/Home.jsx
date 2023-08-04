import { useContext } from "react";
import { useMovieContext } from "../context/MovieContext";
import { FirebaseContext } from "../context/FireBaseContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

 const Home = () => {

  const { movies, getMovies } = useMovieContext()

  const { currentUser } = useContext(FirebaseContext)

  const navigate = useNavigate()





  const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
  const FEATURED_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


  const handleSearch = (e) => {
    e.preventDefault()
    let query = e.target[0].value

    if (currentUser) {
      getMovies(FEATURED_API + query)
    } else {
      alert("Kardes Sen Olacak Login Ben Verecek Filim !! ");
      navigate("/login")
    }

  }

  return (
    <Container className="text-center mt-4 p-4">

      <h1>OUR BEST MOVIES</h1>

      <form action="" className=" d-flex gap-2 justify-content-center" onSubmit={handleSearch}>
        <input type="search" name="" id="" className="form-control w-50 " placeholder="Search Movie.." />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>



      <Row className="justify-content-center gap-4 align-items-center mt-4">

        {
          movies?.map((movie) => {
            const { id, poster_path, title, release_date } = movie;
            return (
              <Col className="col d-flex justify-content-center" key={id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{release_date}</Card.Text>
                    <Button variant="danger" onClick={()=>navigate(`/moviedetail/${id}`)} >Detail</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        }

      </Row>
    </Container>
  );
};

export default Home;
