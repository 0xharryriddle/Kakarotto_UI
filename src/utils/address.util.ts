/**
 * Truncates an hash with the startlength and endlength
 * @param hash Hash to truncate
 * @param startLength Length of the start
 * @param endLength Length of the end
 * @returns Truncated hash
 */
export function truncateHash(
  hash: string,
  startLength: number = 6,
  endLength: number = 4
): string {
  return `${hash.slice(0, startLength)}...${hash.slice(-endLength)}`;
}
