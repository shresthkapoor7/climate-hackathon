import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
// Make sure to set your GEMINI_API_KEY in your environment variables
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Get the Gemini Pro model
export const getGeminiModel = () => {
  return genAI.getGenerativeModel({ model: "gemini-pro" });
};

// Generate climate-related content
export async function generateClimateContent(prompt: string) {
  try {
    const model = getGeminiModel();
    const result = await model.generateContent([
      "You are a climate expert providing information for Climate Week. ",
      "Please provide accurate, actionable climate information. ",
      "Prompt: ",
      prompt
    ].join(""));

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating content with Gemini:', error);
    throw new Error('Failed to generate content');
  }
}

// Generate climate analytics insights
export async function generateClimateAnalytics(data: Record<string, unknown>) {
  try {
    const model = getGeminiModel();
    const prompt = `As a climate analytics expert, analyze this data and provide insights: ${JSON.stringify(data)}.
    Focus on trends, recommendations, and actionable insights for climate action.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating analytics with Gemini:', error);
    throw new Error('Failed to generate analytics');
  }
}

// Generate sustainability recommendations
export async function generateSustainabilityRecommendations(context: string) {
  try {
    const model = getGeminiModel();
    const prompt = `Based on this context: "${context}", provide 5 specific, actionable sustainability recommendations.
    Focus on practical steps that can be implemented immediately.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating recommendations with Gemini:', error);
    throw new Error('Failed to generate recommendations');
  }
}

// Chat with Gemini for climate questions
export async function chatWithGemini(message: string, conversationHistory: string[] = []) {
  try {
    const model = getGeminiModel();
    const context = conversationHistory.length > 0
      ? `Previous conversation: ${conversationHistory.join('\n')}\n\n`
      : '';

    const prompt = `${context}You are a helpful climate assistant for Climate Week.
    Answer this question about climate, sustainability, or environmental topics: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error chatting with Gemini:', error);
    throw new Error('Failed to get response from Gemini');
  }
}
