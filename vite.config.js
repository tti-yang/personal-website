import { resolve } from "node:path";

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        research: resolve(import.meta.dirname, "research.html"),
        publications: resolve(import.meta.dirname, "publications.html"),
        experience: resolve(import.meta.dirname, "experience.html"),
        cv: resolve(import.meta.dirname, "cv.html")
      }
    }
  }
};
