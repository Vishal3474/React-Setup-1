import React from "react";

function Embed() {
  return (
    <div>
      <div className="p-10  border-2 border-blue-500">
        <div className="flex shadow-lg space-x-5 ">
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/rpWNNjV5D6A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/VrQgmNY96wo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/vU3dL1cNqgQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex mt-20 space-x-5 shadow-lg">
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/QGK7aTGHeIQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/6mbwJ2xhgzM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/1vKiPwEYbyk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Embed;
