export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

export function firstUpperCase(str: string) {
  return str.toLowerCase().replace(/^\S/g, function (s) {
    return s.toUpperCase();
  });
}
