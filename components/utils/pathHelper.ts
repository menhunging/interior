export function getAssetPath(relativePath:string) {
  const basePath =
    process.env.NODE_ENV === "production" ? process.env.BASE_PATH : "/";
  if (relativePath.startsWith("/")) {
    relativePath = relativePath.slice(1);
  }
  return `${basePath}${relativePath}`;
}
