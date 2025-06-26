import { GoogleGenAI, GenerateContentResponse, Content, Part } from "@google/genai";
import { GEMINI_API_KEY, GEMINI_TEXT_MODEL } from '../constants';

// Ensure API_KEY is handled securely and ideally through environment variables.
// The constant GEMINI_API_KEY already tries to use process.env.API_KEY.
// If process.env.API_KEY is not available (e.g., in some client-side only bundlers without .env setup),
// it falls back to the placeholder. For a real app, ensure process.env.API_KEY is set.
if (GEMINI_API_KEY === "YOUR_API_KEY_HERE" && !process.env.API_KEY) {
  console.warn(
    "Gemini API key is not configured. Please set the API_KEY environment variable."
  );
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const generateChatResponse = async (prompt: string, history: string[] = []): Promise<string> => {
  if (GEMINI_API_KEY === "YOUR_API_KEY_HERE" && !process.env.API_KEY) {
    // Simulate a delay and provide a mock response if API key is not set.
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Thank you for your question! AI responses are currently unavailable as the API key is not configured. This is a placeholder response.";
  }
  
  try {
    const contents: Content[] = [];

    // Construct history for the model
    // Assuming history is an array of previous AI responses. For a more robust chat, you'd alternate user/model turns.
    history.forEach((prevResponse, index) => {
        // This is a simplified history. For true conversational context, you'd need to distinguish user/model turns.
        // For this example, we'll treat all history as previous AI parts to guide the next response.
        contents.push({ role: "model", parts: [{ text: prevResponse }] });
        // if you want to add user messages too:
        // contents.push({ role: "user", parts: [{ text: userMessageAssociatedWithThisResponse }] }); 
    });
    
    // Add current user prompt
    contents.push({ role: "user", parts: [{ text: prompt }] });

    const systemInstructionText = `You are Krishi Mitra, an AI assistant built specifically to help Indian farmers.
    Your role is to provide short, practical, and easy-to-understand answers on topics such as:
    
    - Crop cultivation practices
    - Soil health and preparation
    - Fertilizers and pesticides
    - Weather-related advice
    - Government schemes or subsidies for agriculture
    - Animal husbandry
    - Modern farming technologies (e.g., sensors, AI, IoT)
    - Organic and sustainable farming
    - Local market prices and harvesting
    
    ⚠️ Important Rules:
    - Do NOT answer questions unrelated to agriculture, farming, or rural livelihood. Politely decline them.
    - Respond in the language the user uses (English and Hindi). If unsure, default to Hindi.
    - Keep answers short and actionable — no long paragraphs.
    - Prefer local Indian context in all answers (e.g., crops like wheat, rice, sugarcane, millet, etc.).
    
    You are friendly and helpful but always stay on-topic.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: contents,
      config: {
        systemInstruction: systemInstructionText,
        temperature: 0.7, // A bit creative but still factual
        topK: 40,
        topP: 0.95,
      }
    });
    
    return response.text.trim();

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
             return "Error: The API key is not valid. Please check your configuration.";
        }
    }
    return "Sorry, I encountered an issue while processing your request. Please try again later.";
  }
};

// Example for image-based queries (not implemented in UI but shows capability)
export const analyzeImageWithPrompt = async (base64Image: string, mimeType: string, prompt: string): Promise<string> => {
  if (GEMINI_API_KEY === "YOUR_API_KEY_HERE" && !process.env.API_KEY) {
    return "Image analysis unavailable without API key.";
  }
  try {
    const imagePart: Part = {
      inlineData: {
        mimeType: mimeType, 
        data: base64Image,
      },
    };
    const textPart: Part = { text: prompt };

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_TEXT_MODEL, // Or a vision-capable model if specified
        contents: { parts: [imagePart, textPart] },
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API with image:", error);
    return "Sorry, I couldn't analyze the image.";
  }
};
    