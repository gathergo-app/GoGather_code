import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // phone will include country code automatically
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password strength regex: ≥6 chars, at least 1 letter, 1 number, 1 special char
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  // Dummy existing accounts (replace with backend check later)
  const existingEmails = ["test@example.com", "ankan@gathergo.com"];
  const existingPhones = ["919876543210", "11234567890"]; // stored without "+" for consistency

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    // Check duplicates
    if (existingEmails.includes(email)) {
      setError("An account with this email already exists.");
      return;
    }
    if (existingPhones.includes(phone)) {
      setError("An account with this phone number already exists.");
      return;
    }

    // Check password strength
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include letters, numbers, and a special character."
      );
      return;
    }

    // Check password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ Passed all checks → go to Profile Setup
    navigate("/profile");
  };

  return (
    <div className="signup-container signup-page">
      {/* Logo */}
      <div className="logo-row signup-logo-row">
        <img
          src="https://github.com/writetoankan/GatherGo-Assets/blob/main/GatherGo%20Icon.png?raw=true"
          alt="GatherGo"
          className="logo-icon signup-logo-icon"
        />
        <h1 className="logo-text signup-logo-text">GatherGo</h1>
      </div>

      {/* Social sign-in */}
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

      {/* Manual signup */}
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
          required
        />

        {/* Phone input with country code */}
        <PhoneInput
          country={"in"} // default India
          value={phone}
          onChange={(value) => {
            const digitsOnly = value.replace(/\D/g, "");
            if (digitsOnly.length <= 15) {
              setPhone(value);
            }
          }}
          inputClass="signup-input"
          containerClass="phone-input-container"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-input"
          required
        />

        {/* Error message */}
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="signup-btn primary">
          Sign up
        </button>
      </form>

      {/* Footer links */}
      <div className="signup-footer">
        <p className="login-link" onClick={() => navigate("/login")}>
          Already have an account? <span className="link-accent">Log in</span>
        </p>
        <p
          className="forgot-link"
          onClick={() => alert("Password recovery coming soon!")}
        >
          Forgot password?
        </p>
      </div>
    </div>
  );
}
