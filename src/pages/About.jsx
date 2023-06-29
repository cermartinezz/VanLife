import header from "./../images/image-54.png";

export default function About() {
  return (
    <div className="about">
      <img src={header} alt="about header" className="about--header" />
      <div className="about--content">
        <h1 className="about--content-header">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>

        <div className="about--content-cta">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button className="button secondary">Explore our vans</button>
        </div>
      </div>
    </div>
  );
}
