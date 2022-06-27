import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import classnames from "classnames";

type SidebarProps = {
  isVisible: boolean;
};

export const Sidebar = ({ isVisible }: SidebarProps) => {
  const { data } = useGetLessonsQuery();
  return (
    <aside
      className={classnames(
        "bg-gray-700 lg:w-[348px] p-8 border-l border-gray-600 fixed inset-x-0 top-[4.5rem] bottom-0 z-50 lg:static overflow-scroll",
        {
          "hidden lg:block": !isVisible,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};
