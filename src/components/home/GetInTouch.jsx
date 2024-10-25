import Workers from "../../assets/workers.png";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function GetInTouch() {
  return (
    <div className="get-in-touch-background px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={Workers}
        alt=""
        width="82"
        height="67"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        CALDERON BUILDERS INC.
      </h1>
      <div className="col-lg-10 mx-auto">
        <p className="lead mb-4">
        Serving all of Southern California since 1987, Calderon Builders is a trusted general contractor specializing in residential and commercial construction. From custom home builds and renovations to large-scale commercial projects, we bring over three decades of experience to every job. Our commitment to quality craftsmanship, attention to detail, and exceptional customer service has made us a leader in the industry. Whether you’re planning a kitchen remodel, new construction, or a commercial space renovation, we have the expertise to bring your vision to life. Contact us today to learn how we can make your next project a success!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Get In Touch
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
    </div>
  </div> */
}
