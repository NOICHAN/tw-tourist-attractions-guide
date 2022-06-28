import axios from 'axios';

export default async () => {
  try {
    const parameter = {
      grant_type: 'client_credentials',
      client_id: 'aa8139106-649b6929-be19-47a5',
      client_secret: '836fcc67-985a-4b3f-92b2-00f671f6bb85',
    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const authUrl = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
    const body = Object.keys(parameter).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(parameter[key])}`).join('&');

    const res = await axios.post(authUrl, body, { headers });
    const { access_token: accessToken, token_type: tokenType, expires_in: expiresIn } = res.data;
    document.cookie = `accessToken=${`${tokenType} ${accessToken}`}; max-age=${expiresIn};`;
  } catch (error) {
    throw new Error(`[getAuthorizationHeader] error : ${error.message}`);
  }
};
