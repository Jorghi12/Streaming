import cors from "cors";
import express from "express";
import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

type BuyerType = "Creator / agency" | "Commerce / shopping" | "Media / podcast" | "Community / education";
type Stack = "OBS Studio" | "Streamlabs" | "Ecamm Live" | "StreamYard" | "Restream" | "Custom / other";
type Need =
  | "Live camera transforms"
  | "AI co-hosts"
  | "Clipping + highlights"
  | "Translation + moderation"
  | "Audience-triggered moments";

type AccessRequest = {
  id: string;
  email: string;
  brandName: string;
  url: string;
  buyerType: BuyerType;
  stack: Stack;
  need: Need;
  createdAt: string;
};

const productName = "Liveplane";
const validBuyerTypes = [
  "Creator / agency",
  "Commerce / shopping",
  "Media / podcast",
  "Community / education"
] satisfies BuyerType[];
const validStacks = [
  "OBS Studio",
  "Streamlabs",
  "Ecamm Live",
  "StreamYard",
  "Restream",
  "Custom / other"
] satisfies Stack[];
const validNeeds = [
  "Live camera transforms",
  "AI co-hosts",
  "Clipping + highlights",
  "Translation + moderation",
  "Audience-triggered moments"
] satisfies Need[];

const app = express();
const port = Number(process.env.PORT || 8787);
const clientDir = path.resolve(process.cwd(), "dist/client");
const accessFile = path.resolve(process.cwd(), "data", "access-requests.jsonl");

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: productName });
});

app.post("/api/beta-signup", async (req, res) => {
  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const brandName = typeof req.body?.brandName === "string" ? req.body.brandName.trim() : "";
  const url = typeof req.body?.url === "string" ? req.body.url.trim() : "";
  const buyerType =
    typeof req.body?.buyerType === "string"
      ? (req.body.buyerType as BuyerType)
      : "Creator / agency";
  const stack = typeof req.body?.stack === "string" ? (req.body.stack as Stack) : "OBS Studio";
  const need =
    typeof req.body?.need === "string"
      ? (req.body.need as Need)
      : "Live camera transforms";

  const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!hasValidEmail) {
    res.status(400).json({ error: "Add a valid email address." });
    return;
  }

  if (brandName.length < 2) {
    res.status(400).json({ error: "Add your company, show, or creator name." });
    return;
  }

  if (url.length < 3) {
    res.status(400).json({ error: "Add your website, channel, or product URL." });
    return;
  }

  if (!validBuyerTypes.includes(buyerType)) {
    res.status(400).json({ error: "Choose the type of live business you run." });
    return;
  }

  if (!validStacks.includes(stack)) {
    res.status(400).json({ error: "Choose the current live stack you use." });
    return;
  }

  if (!validNeeds.includes(need)) {
    res.status(400).json({ error: "Choose the capability you want first." });
    return;
  }

  const accessRequest: AccessRequest = {
    id: randomUUID(),
    email,
    brandName,
    url,
    buyerType,
    stack,
    need,
    createdAt: new Date().toISOString()
  };

  try {
    await mkdir(path.dirname(accessFile), { recursive: true });
    await appendFile(accessFile, `${JSON.stringify(accessRequest)}\n`, "utf8");
    res.status(201).json({ ok: true, id: accessRequest.id });
  } catch {
    res.status(500).json({ error: "Could not save the access request." });
  }
});

if (existsSync(clientDir)) {
  app.use(express.static(clientDir));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientDir, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`${productName} backend listening on http://localhost:${port}`);
});
