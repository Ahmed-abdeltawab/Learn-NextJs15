export async function fetchLogged(url: string, options?: RequestInit) {
  console.log("FETCHING URL:", url);
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
}
