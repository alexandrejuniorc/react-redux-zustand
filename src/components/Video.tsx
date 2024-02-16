import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { useCurrentLesson } from "../hooks/use-current-lesson.hook";
import { next } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  const { currentLesson } = useCurrentLesson();

  function handlePlayNext() {
    dispatch(next());
  }

  if (!currentLesson) return null;

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        controls
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}
