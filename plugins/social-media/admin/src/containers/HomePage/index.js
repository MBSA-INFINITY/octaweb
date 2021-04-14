import { Button, Padded, Text } from "@buffetjs/core";
import { Header } from "@buffetjs/custom";
import { LoadingBar } from "@buffetjs/styles";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useState, useEffect, useRef } from "react";
import { useGlobalContext, request } from "strapi-helper-plugin";

// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  const { formatMessage } = useGlobalContext();
  return (
    <Padded size="md" top left bottom right>

      <h1>Social Media Management</h1>
      This is currently only an idea: this page would serve as point through which the Social Media Managers would automatically be able to post to Twitter, LinkedIn, Facebook, Instagram and our IET-NITK Telegram channel, and get links (or even shortened links) to share through Whatsapp as well. If you like this idea, please inform Nirmal Khedkar.
    </Padded>
  );
};

export default memo(HomePage);
