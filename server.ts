import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";


async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Solution Architect & Project Scope Recommendation Endpoint
  app.post("/api/ai-consultant", async (req, res) => {
    try {
      const { projectType, businessGoal, keyFeatures, techPreferences, budgetRange } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // High quality fallback solution breakdown when API Key is not set yet
        return res.json({
          recommendedArchitecture: `Enterprise Full-Stack Architecture (${projectType || "Enterprise System"})`,
          summary: `SRI REAL TIME recommended architecture tailored for ${businessGoal || "digital transformation and operational scaling"}.`,
          recommendedTechStack: {
            frontend: ["React.js", "Tailwind CSS", "Vite / Next.js"],
            backend: ["Node.js / Express.js", "FastAPI (Python)"],
            database: ["PostgreSQL", "Redis"],
            aiAutomation: ["Intelligent Process Automation", "Gemini AI Chatbot / Document Processing"],
            cloud: ["AWS (EC2, S3, RDS)", "Docker & CI/CD Pipeline"]
          },
          milestones: [
            { phase: "01. Discovery & Requirement Workshops", duration: "1-2 Weeks", deliverables: "PRD, System Blueprint & Tech Stack Map" },
            { phase: "02. Architecture & Interactive UI/UX Design", duration: "2-3 Weeks", deliverables: "High-fidelity Figma Wireframes, Component Architecture" },
            { phase: "03. Core Development & AI Integration", duration: "4-6 Weeks", deliverables: "Agile Sprints, REST/GraphQL APIs, AI Modules, Database Schemas" },
            { phase: "04. Quality Assurance & Security Audits", duration: "1-2 Weeks", deliverables: "Performance Testing, Penetration Tests, Accessibility Check" },
            { phase: "05. Cloud Deployment & 24/7 SLA Handover", duration: "1 Week", deliverables: "Zero-Downtime Launch, DevOps Pipelines, Documentation" }
          ],
          estimatedTimelineWeeks: "8 - 12 Weeks",
          aiInsight: "Integrating SRI REAL TIME custom AI workflow modules can reduce operational manual data entry by up to 65% while enhancing customer response speeds."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Lead Systems Architect at SRI REAL TIME, a full-service technology company specializing in enterprise digital solutions (ERP, CRM, SCM, Inventory, MIS, Mobile Apps, Web Development, and AI Integration).

Client Inquiry:
- Project Type: ${projectType || "Enterprise System"}
- Business Goal: ${businessGoal || "Automate operations and expand digital footprint"}
- Key Features Requested: ${keyFeatures || "Unified dashboard, real-time analytics, mobile accessibility"}
- Preferred Tech Stack: ${techPreferences || "Modern Web & Mobile Stack"}
- Estimated Budget Range: ${budgetRange || "Standard Enterprise"}

Please provide a structured JSON response with exact keys:
{
  "recommendedArchitecture": "string title",
  "summary": "2-3 sentences executive summary",
  "recommendedTechStack": {
    "frontend": ["array of strings"],
    "backend": ["array of strings"],
    "database": ["array of strings"],
    "aiAutomation": ["array of strings"],
    "cloud": ["array of strings"]
  },
  "milestones": [
    { "phase": "string", "duration": "string", "deliverables": "string" }
  ],
  "estimatedTimelineWeeks": "string",
  "aiInsight": "1-2 sentence recommendation on where AI or automation provides maximum ROI for this project"
}
Return ONLY valid raw JSON with no markdown formatting around it if possible or plain JSON format.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const responseText = response.text || "";
      let jsonResult;
      try {
        const cleanedText = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        jsonResult = JSON.parse(cleanedText);
      } catch (e) {
        jsonResult = {
          recommendedArchitecture: `Custom Enterprise Architecture for ${projectType}`,
          summary: responseText.slice(0, 300),
          recommendedTechStack: {
            frontend: ["React.js", "Tailwind CSS"],
            backend: ["Node.js", "Express.js"],
            database: ["PostgreSQL"],
            aiAutomation: ["Workflow Automation"],
            cloud: ["AWS Cloud"]
          },
          milestones: [
            { phase: "Requirement & Architecture", duration: "2 Weeks", deliverables: "Blueprint" },
            { phase: "Development & AI", duration: "6 Weeks", deliverables: "Full System" },
            { phase: "QA & Deployment", duration: "2 Weeks", deliverables: "Live Launch" }
          ],
          estimatedTimelineWeeks: "8-10 Weeks",
          aiInsight: "Leverage automated workflows and real-time data analytics to streamline operations."
        };
      }

      res.json(jsonResult);
    } catch (error: any) {
      console.error("AI Consultant API error:", error);
      res.status(500).json({
        error: "Failed to generate AI solution recommendation",
        details: error?.message || "Internal server error"
      });
    }
  });

  // Vite middleware setup for dev / static for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SRI REAL TIME Server] running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
