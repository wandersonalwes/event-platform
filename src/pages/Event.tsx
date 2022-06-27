import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Sidebar, Video } from "../components";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsVisibleSidebar(!isVisibleSidebar);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isVisibleSidebar={isVisibleSidebar}
        toggleSidebar={toggleSidebar}
      />
      <main className="flex flex-1 pt-[4.5rem]">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar isVisible={isVisibleSidebar} />
      </main>
    </div>
  );
};
