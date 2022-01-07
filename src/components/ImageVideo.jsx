import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import Player from "@vimeo/player";
import respond from "../styles/abstracts/mediaqueries";

import { MdClose } from "react-icons/md";
import playIcon from "../images/icons/play-icon.svg";

const Wrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8rem;
    transform: translate(-50%, -50%);
    cursor: pointer;
    opacity: 0.8;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
`;

const VideoOverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  z-index: 200;
  #video-iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: max-content;
  }
  iframe {
    width: 100%;
    height: 50vh;
  }
  .close-icon {
    position: absolute;
    top: 6rem;
    right: 8rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    ${respond(
      "phone-land",
      css`
        font-size: 5rem;
        right: 5rem;
        top: 5rem;
      `
    )}
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const VideoOverlay = ({ videoId, _, setPlaying, vimeoH }) => {
  const [player, setPlayer] = useState(undefined);

  useEffect(() => {
    const newPlayer = new Player("video-iframe", {
      videoId: parseInt(videoId),
      h: vimeoH,
    });
    setPlayer(newPlayer);
  }, [videoId, vimeoH]);

  async function handleClick() {
    await player.destroy();
    setPlaying(false);
  }

  return (
    <VideoOverlayWrapper>
      <MdClose color="white" fontSize="8rem" className="close-icon" onClick={handleClick} />
      <div id="video-iframe" data-vimeo-id={videoId}></div>
    </VideoOverlayWrapper>
  );
};

const ImageVideo = ({ image, alt, video, noVideo, vimeoH }) => {
  const [playing, setPlaying] = useState(false);

  console.log(image);

  return (
    <Wrapper className="video-wrapper">
      <GatsbyImage image={image} alt={alt} />
      {/* eslint-disable-next-line */}
      {!noVideo && <img src={playIcon} alt="Play icon" className="play-icon" onClick={() => setPlaying(true)} />}
      {playing && <VideoOverlay {...{ videoId: video, playing, setPlaying, vimeoH }} />}
    </Wrapper>
  );
};

export default ImageVideo;
