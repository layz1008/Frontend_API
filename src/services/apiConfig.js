import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://riot-api-project-production.up.railway.app/champions",
  development: "https://riot-api-project-production.up.railway.app/champions",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;


// import axios from "axios";

// let apiUrl;

// const apiUrls = {
//   production: "https://riot-api-project-production.up.railway.app/champions",
//   development: "https://riot-api-project-production.up.railway.app/champions",
// };

// if (window.location.hostname === "localhost") {
//   apiUrl = apiUrls.development;
// } else {
//   apiUrl = apiUrls.production;
// }

// const api = axios.create({
//   baseURL: apiUrl,
// });

// export default api;