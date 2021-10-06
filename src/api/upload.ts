import request from './request';
export function getFiles() {
  return request.get('/getList/file');
}

export function uploadFile(data: any) {
  return request.post('/upload/file');
}

export function createUser(json: any) {
  return request.post('/user/addUser', json);
}
