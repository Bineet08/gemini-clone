const apiKey = "AIzaSyDbTd4WP2_pjDwS5WXhk7hGs9OnqQpD4Kc";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDbTd4WP2_pjDwS5WXhk7hGs9OnqQpD4Kc" });

async function mainR(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default mainR;