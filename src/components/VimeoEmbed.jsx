import React from "react";
import styled from "styled-components";

const StyledVimeoEmbed = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const VimeoEmbed = ({ videoId, vimeoH, videoTitle }) => {
  return (
    <>
      <StyledVimeoEmbed className="vimeo-embed">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=${vimeoH}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title={videoTitle}
        ></iframe>
      </StyledVimeoEmbed>
      <script src="https://player.vimeo.com/api/player.js" />
    </>
  );
};

export default VimeoEmbed;
