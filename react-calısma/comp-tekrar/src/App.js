import "bulma/css/bulma.css";
import Course from "./Course";
import Thor from "./img/thor.jpg";
import Dr from "./img/dr.jpg";
import İronman from "./img/ironman.jpg";
import Black from "./img/black.jpg";
function App() {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">FİMLERİM</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div class="column">
              <Course
                image={Thor}
                title="THOR"
                description="lLorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, itaque eveniet culpa, nemo natus atque mollitia voluptate unde neque velit veritatis dolorum aliquam placeat harum dolor libero ullam. Cumque, sed."
              />
            </div>
            <div className="column">
              {" "}
              <Course
                image={Black}
                title="BLACK"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, itaque eveniet culpa, nemo natus atque mollitia voluptate unde neque velit veritatis dolorum aliquam placeat harum dolor libero ullam. Cumque, sed."
              />
            </div>
            <div className="column">
              <Course
                image={Dr}
                title="DR.STRANGE"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, itaque eveniet culpa, nemo natus atque mollitia voluptate unde neque velit veritatis dolorum aliquam placeat harum dolor libero ullam. Cumque, sed."
              />
            </div>
            <div className="column">
              <Course
                image={İronman}
                title="İRON MAN"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, itaque eveniet culpa, nemo natus atque mollitia voluptate unde neque velit veritatis dolorum aliquam placeat harum dolor libero ullam. Cumque, sed."
              />
            </div>
          </div>
        </section>

        {/* <img src={Angular} alt="" /> */}
      </div>
    </div>
  );
}

export default App;
