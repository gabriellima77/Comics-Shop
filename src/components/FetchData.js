import md5 from 'md5';
import axios from 'axios';

export default function getData(content, lastValue, search) {
  const currentTime = Number(new Date());
  const publicKey = '4b42edd3e51dfc3af5ec95678cb1f7ff';
  const privateKey = '1b93b3c9e4f1462ffb18f156ecc4a2edf26ac7c2';
  const hash = md5(currentTime + privateKey + publicKey);
  const baseURL = 'http://gateway.marvel.com/v1/public/';

  let url = `${baseURL}${content}?ts=${currentTime}&apikey=${publicKey}&hash=${hash}`;
  if (search && content === 'characters') url += `&nameStartsWith=${search}`;
  else if (search && content === 'comics') url += `&titleStartsWith=${search}`;
  if (lastValue) url += `&offset=${lastValue}`;
  return axios.get(url);
}
