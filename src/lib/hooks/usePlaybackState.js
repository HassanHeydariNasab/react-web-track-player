import player from '../Player';
import useInterval from './helpers/useInterval';
import { useState } from 'react';

const usePlaybackState = () => {
  const initialState = player.getState();

  const [state, setState] = useState(initialState);

  const getProgress = () => {
    const playbackState = player.getState();

    setState(playbackState);
  };

  useInterval(() => {
    getProgress();
  }, 1000);

  return state;
};

export default usePlaybackState;
