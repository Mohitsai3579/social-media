let BASE_URL = "https://social-media-8t2v.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
