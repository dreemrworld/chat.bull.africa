
## Made with :hearts:
These are my handpicked ingredients based on modernity, quality, compatibility, latency, security and cost. 

 - NextJS 15
 - AI SDK 5
 - Assistant-UI
 - Shadcn/UI
 - Radix
 - Cloudflare workers
 - OpenNext

I went through hundreds  of repos and made dozens of iterations so you don't have to.

## Quick set-up 
Fork or clone, and install dependencies
```bash
git clone https://github.com/dreemrworld/chat.bull.africa.git
cd chat.bull.africa 
pnpm install 
```
Open `env.example` and make it `.env` . If you already have Gemini API you can add your own api keys. I use Gemini API because Google is quite generous with free-tier and you don´t need a credit card to get it. Sharing a fork of [Free LLM API Resources](https://github.com/dreemrworld/free-llm-api-resources).  

Alternatively,  you can easily switch to your preferred AI providors like: OpenAI, Anthropic, Azure, AWS, GCP, Groq, Fireworks, Cohere, Ollama, Chrome AI by changing 3-4 lines of code. Just follow these [instructions  Assistant-UI](https://www.assistant-ui.com/docs/getting-started#setup-backend-endpoint).  

Done? Now you can

```bash 
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) and everything should be working!  Localhost should also update automatically  when you save an edit. 

If you already have a Cloudflare account you can instantly deploy with
 
```bash 
pnpm run deploy
```
That's it! You now have your own functioning and modern AI chatbot deployed in 300+ locations. If that wasn't good enough.


## Features 

 - Mobile responsive 
 - FOSS
 - Modern look and feel
 - Instant deployment on cloudlare workers,
 - Light/dark mode
 - Personalized AI answers 
 - Live [demo](https://chat.bull.africa/). Try asking  "who made you?"

## Coming soon

 - Web Search
 - Image generation
 - Voice control
 - Button to switch between different AI models 
 - AuthO with Drizzle
 - R2 bucket for storage 
 - MCP
 - RAG
 
## Many thanks
[Assistant-UI](https://github.com/Yonom/assistant-ui) for the starter project template.


## MIT Licence
Made for the opensource community.  Feel free to clone, fork or contribute. I am also still learning. 


## Contact support
If you have any questions contact me on [carlos@goat.africa](mailto:carlos@goat.africa) and I will reply ASAP. I am not big on social media, my account is x.com/dreemrworld.  

## About me
My name is [Carlos Araújo](https://dev.goat.africa/), I subscribe to Garry Kasparov's vision in [Deep Thinking: Where Machine Intelligence Ends and Human Creativity Begins](https://www.amazon.com/Deep-Thinking-Machine-Intelligence-Creativity/dp/161039786X) . 

I am bullish on Artificial Intelligence in Africa because I am bullish on African Intelligence. My programming journey started only 10 months ago. I experienced first hand the power of accelerated learning thanks to AI example Stockfish taught me how to play chess and now [Deepseek](https://chat.deepseek.com/) ,  [Qwen 3 Coder](https://chat.qwen.ai/) , Kimi and [Gemini](https://gemini.google.com/chat) are teaching me how to make useful webapps. 

I want as many people as possible to become a VICTOR of the AI revolution and not just a victim.  

## Resources 
 1.  Getting started with Assitant-UI https://www.assistant-ui.com/docs/getting-started
 2. Free LLM API Resources
https://github.com/dreemrworld/free-llm-api-resources
 3. Deep Thinking | Garry Kasparov | Talks at Google https://www.youtube.com/watch?v=zhkTHkIZJEc
 4. Get yourself a Cloudflare account if you are conscious about cost, latency and security for your end-users https://www.cloudflare.com/
 5. Live demo of this repo https://chat.bull.africa/
 6. My fork of vercel/ai-chatbot (my first ai project) they look identical but are totally different  https://chat.goat.africa/
 7. My dev profile https://dev.goat.africa/

## Why leave a star? :star2:
Don't star it because it's a free, opensource and modern AI chatbot you can instantly deploy on Cloudflare's global edge network. Star it so more people can find it, use it, save money and time! :rocket::rocket::rocket: :sparkles::sparkles::sparkles:

May the yield be with you! 
