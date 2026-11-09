import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { LoginPage } from "./pages/LoginPage";
import { RecipesPage } from "./pages/RecipesPage";
import {RecipePage} from "./pages/RecipePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

function App() {
  return (
     <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<MainLayout />}>
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<RecipesPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/recipe/:id" element={<RecipePage />} />
              </Route>
            <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
