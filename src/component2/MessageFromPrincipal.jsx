import "./MessageFromPrincipal.css";

const MessageFromPrincipal = () => {
  return (
    <section className="principal-section">
      <div className="principal-container">
        
        {/* LEFT IMAGE */}
        <div className="principal-image-wrapper">
          <div className="principal-image-border">
            <img
              src="/images/Principal.jpg"
              alt="Principal"
              className="principal-image"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="principal-content">
          <span className="principal-tag" />

          <h2 className="principal-title">
            MESSAGE FROM THE PRINCIPAL
          </h2>

          <p className="principal-text">
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>
          <p className="principal-text">
            Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest potential in Nurture each student to reach his or her fullest Nurture each.
          </p>


          <p className="principal-sign">
            – Girishbhai Patel
          </p>
        </div>

      </div>
    </section>
  );
};

export default MessageFromPrincipal;
