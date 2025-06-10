import axios from "axios";
import ENDPOINTS from "../config/endpoints";

interface GetRandomWordOptions {
  hasDictionaryDef: boolean;
  maxLength: number;
  minLength: number;
}

interface GetRandomWordResponse {
  word: string;
  id: number;
}

const getRandomWord = async (options: GetRandomWordOptions) => {
  const response = await axios.get<GetRandomWordResponse>(
    ENDPOINTS.WORDNIK_RANDOM_WORD,
    {
      params: options,
    }
  );

  const splitWord = response.data.word.split("");
  return splitWord;
};

export default getRandomWord;
