export default function SignupForm() {
  return (
    <form className="signup-form">
      <input
        type="text"
        placeholder="Full name"
        className="input"
        name="name"
      />
      <input type="email" placeholder="Email" className="input" name="email" />
      <input
        type="tel"
        placeholder="Phone number"
        className="input"
        name="phone"
      />
      <button type="submit" className="signup-btn primary">
        Sign up
      </button>
    </form>
  );
}
