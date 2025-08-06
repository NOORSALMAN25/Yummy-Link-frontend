import '../../public/styleSheets/about-style.css'
import '../../public/styleSheets/home-style.css'
const About = () => {
  return (
    <>
      <div className="center">
        <div className="mission-section">
          <div className="mission-header">
            <h2 className="mission-title coiny-regular">Our Mission</h2>
          </div>
          <p className="mission-description">
            To create magical food discovery experiences that bring families
            together, support local vendors, and make every bite an adventure
            worth remembering.
          </p>
          <div className="mission-emojis">
            <span>🎪</span>
            <span>🍭</span>
            <span>❤️</span>
            <span>🎡</span>
            <span>🍕</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
