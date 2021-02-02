import { newRequest } from './request';

export function getDetail(iid) { // eslint-disable-line
  return newRequest({
    url: '/detail',
    params: {
      iid,
    },
  });
}
