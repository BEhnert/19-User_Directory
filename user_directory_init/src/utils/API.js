// import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob";

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
