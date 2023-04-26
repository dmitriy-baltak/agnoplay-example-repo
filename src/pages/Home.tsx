// @ts-nocheck
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import useScript from '../hooks/useScript';

import logo from '../logo.svg';

import { AppContext } from '../contexts';
import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';
import CustomVideoPlayer from '../components/CustomVideoPlayer';

export const Home = () => {
	const context = useContext(AppContext);
	const status = useScript(
		"https://player.agnoplay.com/static/agnoplay/js/agnoplay.js"
	  );

	return (
		<>
			<Helmet>
				<title>
					{PAGE_TITLE_HOME} | {APP_TITLE}
				</title>
			</Helmet>
			{status === 'ready' && <CustomVideoPlayer
				videoUrl={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
				videoId={null}
				license_key={"9cbb7cfe-4aa2-4e0f-974e-f4fd487b9723"} />}
		</>
	);
};
