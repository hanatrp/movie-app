"use client";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-4">
        <button
          onClick={handleVideoPlayer}
          className="float-right transition pb-1"
        >
          <XCircle size={32} />
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event: { target: { pauseVideo: () => void } }) =>
            event.target.pauseVideo()
          }
          opts={option}
          onError={() => alert("video is broken, please try another")}
        />
      </div>
    );
  };

  const ButtonPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="p-2 fixed bottom-1.5 right-4 sm:right-6 rounded-md float-right my-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 sm:text-xl font-bold text-light bg-primary hover:bg-opacity-70 hover:text-opacity-75 duration-300"
      >
        watch trailer here
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonPlayer />;
};

export default VideoPlayer;
