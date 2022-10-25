export function prefixUrl(filename: string): string {
  return process.env.baseUrl + filename;
}
