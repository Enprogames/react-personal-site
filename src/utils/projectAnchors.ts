export const getProjectAnchorId = (title: string) =>
  encodeURIComponent(title.toLowerCase().trim().replace(/\s+/g, '-'));
