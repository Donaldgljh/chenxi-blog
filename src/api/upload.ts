import request from './request';
export function getLists() {
  return request.get('/upload/listLogistic');
}

export function uploadFile(data: any) {
  return request.post('/upload/file');
}

export function createUser(json: any) {
  return request.post('/user/addUser', json);
}
