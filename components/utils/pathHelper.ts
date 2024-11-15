export function getAssetPath(relativePath: String) {
  const basePath =
    process.env.NODE_ENV === "production" ? process.env.BASE_PATH : "/";

  return `${basePath}${relativePath}`;
}
