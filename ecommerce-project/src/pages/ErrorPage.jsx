import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
export function ErrorPage() {
  return (
    <>
      <title>Error Page</title>
      <Header />
      <div className="error-page">
        <div className="error-message">
          Oops! The page you are looking for does not exist.
        </div>
        <div className="error-suggestion">
          Please check the URL or return to the <Link to="/">home page</Link>.
        </div>
      </div>
    </>
  );
}
