import { Carousel } from "react-bootstrap";
import circuloOne from "../../assets/circulo1.jpg";
import circuloTwo from "../../assets/circulo2.png";

function HomePage() {
  return (
    <div>
      <div>
        <div className="backgroundtop">
          <div className="fontposition">
            <h1>QueerLink</h1>
            <h3>Connecting Queer Communities</h3>
          </div>
        </div>
        <div className="bordersPage">
          <p>
            <b className="textbold">
              QueerLink is an inclusive community where queer people can
              connect, share experiences, and build supportive networks.
            </b>{" "}
            Our goal is to create a space where queer people can have a sense of
            belonging and work together to address the unique challenges our
            community faces.
          </p>
          <div className="firstpara">
            <p className="firstp">
              Every week, we offer a wide range of queer events, including
              social gatherings, workshops, panel discussions, and cultural
              celebrations. We also create engaging content, educational
              resources, and interactive sessions that focus on LGBTQ+ history.
              We believe that understanding and appreciating our past is crucial
              for creating a more inclusive future.
            </p>
            <p className="imagefisrtp">
              <img src={circuloOne} width="230" height="230" />
            </p>
          </div>
          <div className="secondpara">
            <p className="imagesecondp">
              <img src={circuloTwo} width="230" height="230" />
            </p>
            <p className="secondp">
              QueerLink welcomes individuals of all gender identities, sexual
              orientations, and backgrounds. We actively encourage participation
              from allies, as we believe that collective support is crucial to
              building a more just and open society. If you are interested in
              making a lasting impact and shaping a brighter future for all,
              please reach out! We'd love to meet you.
            </p>
          </div>
        </div>
      </div>
      <div className="topofbottom">
        <h2 className="meet">We'd love to meet you</h2>
      </div>
      <div className="bottompart">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="320"
              height="320"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=ironhack&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://2yu.co">2yu</a>
            <br />
            <style>
              {`.mapouter{position:relative;text-align:right;height:320px;width:320px;}`}
            </style>
            <a href="https://embedgooglemap.2yu.co">html embed google map</a>
            <style>
              {`.gmap_canvas{overflow:hidden;background:none!important;height:320px;width:320px;}`}
            </style>
          </div>
        </div>
        <div className="informations">
          <p className="informationsP">R. do Instituto Virgílio Machado, 14</p>
          <p className="informationsP">Lisboa, 1100-284</p>
          <p className="informationsP">Monday - Friday</p>
          <p className="informationsP">10:00am 6:00pm</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
