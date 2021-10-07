export function formatImageUrl(url?: string) {
  if (!url) return "";
  const formattedUrl = url.replace("t_thumb", "t_original");
  return `https:${formattedUrl}`;
}
