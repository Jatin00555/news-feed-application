export const config = Object.freeze({
  NEWS_API: {
    KEY: import.meta.env.VITE_NEWS_API_KEY || "",
    BASE_URL: import.meta.env.VITE_NEWS_API_BASE || "",
  },
  GUARDIAN_API: {
    KEY: import.meta.env.VITE_GUARDIAN_API_KEY || "",
    BASE_URL: import.meta.env.VITE_GUARDIAN_API_BASE || "",
  },
  NY_TIMES_API: {
    KEY: import.meta.env.VITE_NY_TIMES_API_KEY || "",
    BASE_URL: import.meta.env.VITE_NY_TIMES_API_BASE || "",
  },
});
