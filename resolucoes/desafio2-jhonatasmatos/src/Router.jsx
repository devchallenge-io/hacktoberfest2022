import { Route, Routes } from "react-router-dom"
import { Guess } from "./pages/Guess"
import { Winner } from "./pages/Winner"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Guess />} />
      <Route path="/winner" element={<Winner />} />
      <Route path="/winner/:slug" element={<Winner />} />
    </Routes>
  );
}