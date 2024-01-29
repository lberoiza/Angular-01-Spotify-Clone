export function secondsToTimeFormat(timeInSeconds: number): string {
  if (timeInSeconds == 0) return '0:00';
  let minutes: number = Math.floor(timeInSeconds / 60);
  let seconds: number = Math.floor(timeInSeconds % 60);
  return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
}

export function timeFormatToSeconds(timeFormat: string): number {
  const [seconds, minutes, hours] = timeFormat.split(':').reverse();
  let totalSeconds: number = 0;
  totalSeconds += hours ? parseInt(hours) * 3600 : 0;
  totalSeconds += minutes ? parseInt(minutes) * 60 : 0;
  totalSeconds += seconds ? parseInt(seconds) : 0;
  return totalSeconds;
}
