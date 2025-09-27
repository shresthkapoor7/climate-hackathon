# Gemini SDK Setup Guide

## 1. Get Your API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key or use an existing one
3. Copy your API key

## 2. Set Environment Variable
Create a `.env.local` file in your project root and add:
```
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_api_key_here
```

## 3. Available Functions

The Gemini integration provides these functions:

### `generateClimateContent(prompt: string)`
Generate climate-related content based on a prompt.

### `generateClimateAnalytics(data: any)`
Analyze climate data and provide insights.

### `generateSustainabilityRecommendations(context: string)`
Get actionable sustainability recommendations.

### `chatWithGemini(message: string, conversationHistory?: string[])`
Have a conversation with Gemini about climate topics.

## 4. Example Usage

```typescript
import { generateClimateContent, chatWithGemini } from '@/lib/gemini';

// Generate content
const content = await generateClimateContent("Explain carbon footprint reduction");

// Chat with Gemini
const response = await chatWithGemini("What are the best renewable energy sources?");
```

## 5. Security Note
- Never commit your actual API key to version control
- Use environment variables for production
- Consider rate limiting for production use
