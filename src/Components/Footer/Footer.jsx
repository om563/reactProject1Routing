import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="  p-2 text-white text-center position-relative">
        <div className="container">
            
        <div className="row ">

          <div className="col-md-4 ">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4 d-flex flex-column  align-items-center">
            <h3>AROUND THE WEB</h3>

            <div className="footerLogo d-flex justify-content-between align-items-center w-50">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-solid fa-globe"></i>
            </div>

          </div>

          <div className="col-md-4 " >
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

          </div>

        </div>
        </div>

        <div className="footerEnd position-absolute bottom-0 end-0 start-0  d-flex justify-content-center align-items-center">
            <p className="m-0"> Copyright © Your Website 2021</p>
        </div>

      </footer>
    </>
  );
}
