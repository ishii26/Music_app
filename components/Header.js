import React from "react";
import { BsSpotify, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Howler } from "howler";

export default function Header({ selectedHowl, playing, setPlaying }) {
  const handleVolumeChange = (e) => {
    Howler.volume(parseInt(e.target.value, 10) / 100);
  };

  const togglePlay = () => {
    if (!selectedHowl) return;

    if (playing) {
      selectedHowl.pause();
      setPlaying(false);
    } else {
      selectedHowl.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-header w-full p-4 flex items-center justify-between">
      <div className="flex items-center">
        <BsSpotify className="text-textLight" size="30px" />
        <h1 className="text-textLight ml-2 font-bold text-2xl">Musique</h1>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          max="100"
          defaultValue="100"
          onChange={handleVolumeChange}
          className="cursor-pointer volume-slider"
          style={{
            // Change these values to adjust the appearance of the slider thumb
            WebkitAppearance: "none",
            width: "100%",
            height: "5px",
            background: "#D3D3D3",
            outline: "none",
            opacity: "0.7",
            transition: "opacity .2s",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        />
        <button
          className="text-textLight bg-brand p-2 rounded-full ml-4"
          onClick={togglePlay}
        >
          {playing ? <BsPauseFill size="24px" /> : <BsPlayFill size="24px" />}
        </button>
      </div>
    </div>
  );
}
