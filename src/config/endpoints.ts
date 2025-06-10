import CONFIG from "./config";

const ENDPOINTS = {
  WORDNIK_RANDOM_WORD: `${CONFIG.WORDNIK_API_URL}/randomWord?api_key=${CONFIG.WORDNIK_API_KEY}`,
};

export default ENDPOINTS;
