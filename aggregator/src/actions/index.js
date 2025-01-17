import axios from 'axios';
import { FETCH_USER, FETCH_TOPICS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTopics = () => async dispatch => {
  const res = await axios.get('api/topics?api-key=frontend_application');

  dispatch({ type: FETCH_TOPICS, payload: res.data });
};
