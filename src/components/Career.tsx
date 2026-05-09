import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building</h4>
                <h5>YOJNAPATH</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              AI Based Government Scheme Recommendation &amp; Explaining App — an
              AI-powered platform that helps users discover relevant government
              schemes based on eligibility, profile, and requirements. The app
              also explains complex schemes in simplified language to improve
              accessibility and awareness for common users.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building</h4>
                <h5>HAIR CRAFT</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Modern Hair Salon &amp; Grooming Website — a modern salon website
              designed for showcasing grooming services, appointments, branding,
              and customer engagement with a sleek responsive interface.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building</h4>
                <h5>FOUNDRAI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              AI &amp; Startup Focused Platform — a futuristic web platform
              focused on AI innovation, startup ideas, digital tools, and modern
              user interaction experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
