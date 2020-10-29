import axios from 'axios';
import Constants from '../Constants';

export default class Api {
  static fetchDataByPOST = async (url, data) => {
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: Constants.MainUrl + url,
         data,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchDataByGET = async (url) => {
    try {
      const response = await axios({
         method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: Constants.MainUrl + url,
      });
      return response.data;
    } catch (error) {
      console.log('érror' +JSON.stringify(error));
      throw error;
    }
  };
}
