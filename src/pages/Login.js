import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    setError("");

    const errors = [];

    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (password.length < 6) {
      errors.push("Password must be at least 6 characters.");
    }

    if (errors.length > 0) {
      setError(errors.join(" "));
      return;
    }

    // ✅ Dummy credentials for testing
    const dummyEmail = "ankan@gathergo.com";
    const dummyPassword = "Gather@123";

    if (email !== dummyEmail) {
      setError("No account found with this email.");
      return;
    }

    if (password !== dummyPassword) {
      setError("Incorrect password. Please try again.");
      return;
    }

    // ✅ Passed → go to Profile
    navigate("/profile");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo */}
        <div className="logo-row login-logo-row">
          <img
            src="https://github.com/writetoankan/GatherGo-Assets/blob/main/GatherGo%20Icon.png?raw=true"
            alt="GatherGo"
            className="logo-icon login-logo-icon"
          />
          <h1 className="logo-text login-logo-text">GatherGo</h1>
        </div>

        {/* Title */}
        <h2 className="login-title">Welcome back</h2>
        <p className="login-subtext">Log in to access your trips and groups.</p>

        {/* Social login */}
        <div className="signup-social">
          <button className="btn-social btn-google">
            <img
              src="https://github.com/writetoankan/GatherGo-Assets/blob/main/Google%20Icon.png?raw=true"
              alt="Google"
              className="social-icon"
            />
            <span className="social-text">Continue with Google</span>
          </button>

          <button className="btn-social btn-facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/512px-Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="social-icon"
            />
            <span className="social-text">Continue with Facebook</span>
          </button>
        </div>

        <div className="divider">OR</div>

        {/* Inputs */}
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Error message */}
        {error && <p className="error-message">{error}</p>}

        {/* CTA */}
        <button className="login-btn primary" onClick={handleLogin}>
          Log In
        </button>

        {/* Footer */}
        <div className="login-footer">
          <p className="forgot-link">Forgot password?</p>
          <p className="login-link">
            New here?{" "}
            <span className="link-accent" onClick={() => navigate("/signup")}>
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
