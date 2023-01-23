import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages";
import MoviesPage from "./pages/movies";
import DetailsPage from "./pages/details";
import LoginPage from "./pages/auth/login";
import AdminPageIndex from "./pages/admin";
import { AdminLayout } from "./components/layouts/admin";
import NotFoundPage from "./pages/404";
import { PrivateRoute } from "./components/private-route";
import LoggedInRedirect from "./components/loggedIn-redirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<DetailsPage />} />
        <Route
          path="/login"
          element={
            <LoggedInRedirect>
              <LoginPage />
            </LoggedInRedirect>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="movies" element={<AdminPageIndex />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
