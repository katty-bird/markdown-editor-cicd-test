module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(rehype-prism-plus|react-md-editor)/)",
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  extensionsToTreatAsEsm: [".jsx", ".js", ".mjs"],
  testEnvironment: "jsdom",
};