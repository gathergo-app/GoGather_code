import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        {/* Logo */}
        <div className="logo-row welcome-logo-row">
          <img
            src="https://github.com/writetoankan/GatherGo-Assets/blob/main/GatherGo%20Icon.png?raw=true"
            alt="GatherGo"
            className="logo-icon welcome-logo-icon"
          />
          <h1 className="logo-text welcome-logo-text">GatherGo</h1>
        </div>

        {/* Tagline */}
        <h2 className="welcome-title">Group Travel, Organized. Finally.</h2>
        <p className="welcome-subtext">
          All your trip plans, expenses, memories, and group chats — in one
          private space.
        </p>

        {/* CTA */}
        <button
          className="welcome-btn primary"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>

        {/* Demo Link */}
        <p className="demo-link" onClick={() => alert("Demo coming soon!")}>
          Watch Demo
        </p>
      </div>
    </div>
  );
}
