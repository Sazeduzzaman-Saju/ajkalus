"use client";
import React from "react";
import { FacebookEmbed } from "react-social-media-embed";

const FacebookEmbedCode = () => {
  return (
    <div>
      <FacebookEmbed
        url="https://www.facebook.com/photo/?fbid=979852766901979"
        width={305}
      />
    </div>
  );
};

export default FacebookEmbedCode;