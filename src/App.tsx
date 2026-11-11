import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { LoginPage } from "./pages/LoginPage";
import { RecipesPage } from "./pages/RecipesPage";
import {RecipePage} from "./pages/RecipePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoutes } from "@/components/auth/ProtectedRoutes";
import { PublicRoutes } from "@/components/auth/PublicRoutes";

function App() {
  return (
     <BrowserRouter>
          <Routes>
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
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
