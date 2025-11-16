export default function SocialButtons() {
  return (
    <div className="social-buttons">
      <button className="social-btn google">
        <img
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="Google logo"
          className="social-icon"
        />
        Continue with Google
      </button>

      <button className="social-btn facebook">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
          alt="Facebook logo"
          className="social-icon"
        />
        Continue with Facebook
      </button>
    </div>
  );
}
