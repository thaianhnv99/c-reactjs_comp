import { http, HttpResponse } from 'msw';

const appHandler = [
  http.get('/user', () => {
    return HttpResponse.json({ a: 1, b: 2 }, { status: 401 });
  }),
  http.get('/user1', () => {
    return HttpResponse.json({ a: 1, b: 2 }, { status: 401 });
  }),
  http.post('/authorization/refresh', async (req) => {
    console.log(req);

    return HttpResponse.json(
      {
        authorizationToken: '111111111111111111',
        refreshToken: '222222222222222',
      },
      {
        status: 200,
      }
    );
  }),
];

export default appHandler;
