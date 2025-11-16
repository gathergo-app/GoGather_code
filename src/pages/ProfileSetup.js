import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Logo */}
        <div className="logo-row profile-logo-row">
          <img
            src="https://github.com/writetoankan/GatherGo-Assets/blob/main/GatherGo%20Icon.png?raw=true"
            alt="GatherGo"
            className="logo-icon profile-logo-icon"
          />
          <h1 className="logo-text profile-logo-text">GatherGo</h1>
        </div>

        {/* Title */}
        <h2 className="profile-title">Set up your profile</h2>
        <p className="profile-subtext">
          Add your details so friends know it’s you.
        </p>

        {/* Inputs */}
        <input className="profile-input" type="text" placeholder="Full Name" />
        <input className="profile-input" type="text" placeholder="Username" />
        <textarea
          className="profile-textarea"
          placeholder="Bio (optional)"
        ></textarea>

        {/* CTA */}
        <button
          className="profile-btn primary"
          onClick={() => navigate("/home")}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
