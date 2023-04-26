import { Logo } from "../../components/atoms/Logo/Logo";
import { useAuth } from "../../store/AuthContext/useAuth";

export const Login = () => {
  const { error, handleLogin, setLogin, setPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="vh-100 d-flex justify-content">
      <div className="m-auto p-5 rounded shadow border-opacity-50 form_container custom_form_container ">
        <Logo />
        <h2 className="my-5 fs-5 fw-semibold">
          Podaj prawidłowy login i hasło by zalogować się do aplikacji moodpoint
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <label className="fw-semibold">Login:</label>
            <input
              name="login"
              type="text"
              className={`form-control ${error.login ? "is-invalid" : ""}`}
              onChange={(e) => setLogin(e.target.value)}
            />
            <div className="invalid-feedback">{error.login}</div>
          </div>
          <div className="form-group mt-5">
            <label className="fw-semibold">Hasło:</label>
            <input
              name="password"
              type="password"
              className={`form-control ${error.password ? "is-invalid" : ""}`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="invalid-feedback">{error.password}</div>
          </div>
          <button className="btn btn-success w-50 mt-5" children="Zaloguj" />
        </form>
      </div>
    </div>
  );
};
