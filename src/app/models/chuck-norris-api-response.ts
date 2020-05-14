
export interface ChuckNorrisApiResponse {
  type: string;
  value: ChuckNorrisJoke;
}

interface ChuckNorrisJoke {
  id: string;
  joke: string;
}
