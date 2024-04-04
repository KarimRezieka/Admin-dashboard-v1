export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? {} : {}),
  },
});
