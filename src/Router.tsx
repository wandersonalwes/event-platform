import { Routes, Route } from "react-router-dom";
import { Event } from "./pages";
import { Subscriber } from "./pages/Subscriber";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscriber />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};
