import Hero from "./Hero";

const ContactView = () => {
  return (
    <div>
      <Hero text="Contact" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              <ul>
                <li>
                  Mailing address: 308 Negra Arroyo Lane, Albuquerque, New
                  Mexico. 87104
                </li>
                <li>PO Box 8452</li>
                <li>Phone #:(505) 117-8987 </li>
                <li>Name:Walter Hartwell White</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
