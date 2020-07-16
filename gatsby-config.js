module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "1pdF1ZfvCVdWxlGhPpkBc2_XygkJT4VLEqXny_z0u2yU",
        worksheetTitle: "Vendedores",
        credentials: require("./google-credentials.json"),
      },
    },
  ],
};
