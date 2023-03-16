export function fetchJSON<T>(url: string): Promise<T> {
  return fetch(url).then(r => r.json()).catch(e => {
    console.error(`Fetching ${url} failed`);
    throw e;
  });
}