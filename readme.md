<div align="center">
  <img src="https://via.placeholder.com/1200x300/000000/ffffff?text=LegalKlarity" alt="LegalKlarity Banner">
</div>

# LegalKlarity

> **Simplifying legal complexity in seconds. Understand contracts, detect risks, and protect yourself with AI.**

[![Gen AI Exchange](https://img.shields.io/badge/Hackathon-Gene%20AI%20Exchange%2025-7000FF?style=for-the-badge&logo=google&logoColor=white)](#)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Online-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://legalklarity.netlify.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Prototype-orange?style=for-the-badge)](#)

---

## Preview

<div align="center">
  <img src="https://via.placeholder.com/800x400/111111/ffffff?text=Legal+Document+Analysis" alt="Dashboard Preview">
  <p><i>Instant semantic analysis of complex legal jargon.</i></p>
</div>

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Core Features](#core-features)
- [System Architecture](#system-architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation Guide](#installation-guide)
- [Environment Variables](#environment-variables)
- [AI/ML/LLM Pipeline](#aimlllm-pipeline)
- [Performance Optimization](#performance-optimization)
- [Security Measures](#security-measures)
- [Roadmap](#roadmap)

---

## Problem Statement

**Legal Jargon = Risk.**
The average person signs dozens of Terms of Service agreements, employment contracts, and NDAs without reading them. Why? Because legal documents are purposefully dense, lengthy, and written in legalese that requires a law degree to decode. This asymmetry of information leaves individuals exposed to predatory clauses, hidden fees, and compromised data rights.

---

## Solution Overview

**LegalKlarity** leverages advanced Generative AI to democratize legal comprehension. Users upload any legal document, and the platform instantly translates it into plain English. 

It highlights critical obligations, flags hidden risks (like auto-renewals or data sharing), and provides an interactive chat interface to interrogate the document.

- **Instant Summarization**: Distills 50-page contracts into 5 key points.
- **Risk Flagging**: Autonomously detects predatory clauses.
- **Document Q&A**: Ask specific questions ("Can they sell my data?").

---

## Core Features

### 📄 Semantic Contract Summarization
- **What it does**: Converts complex legal text into grade 8 reading level summaries.
- **Why it matters**: Saves hours of reading and ensures true consent.
- **Technical implementation**: Chunking large PDFs and running map-reduce summarization via LLM APIs.

### 🚩 Automated Risk Detection
- **What it does**: Scans for standard predatory clauses against a known vector database of legal risks.
- **Why it matters**: Protects users from signing away crucial rights.
- **Technical implementation**: Similarity search against a Pinecone index of known bad clauses.

### 💬 Conversational Interrogation
- **What it does**: A chat interface bound strictly to the document's context.
- **Why it matters**: Allows users to dynamically query edge cases in the contract.
- **Technical implementation**: RAG system with strict temperature limits to prevent hallucination.

---

## System Architecture

<div align="center">
  <img src="https://via.placeholder.com/800x400/000000/ffffff?text=LegalKlarity+Architecture" alt="Architecture Diagram">
</div>

### Data Flow
1. **Document Upload**: PDF parsed via OCR / text extraction on the edge.
2. **Chunking & Embedding**: Text is split into semantic nodes and embedded.
3. **Risk Analysis**: Embeddings compared against Risk Vector DB.
4. **LLM Synthesis**: RAG pipeline synthesizes summaries and answers.

---

## Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React, Netlify | Seamless user experience |
| **Backend** | Node.js, Express | PDF parsing & orchestration |
| **AI/LLM** | Google Gemini API | Deep contextual reasoning |
| **Database** | MongoDB | User histories & document metadata |
| **Vector DB** | Pinecone | Semantic search |

---

## Project Structure

```bash
src/
 ┣ client/         # React SPA
 ┣ backend/        # Express API
 ┃ ┣ parsers/      # OCR and PDF text extraction
 ┃ ┣ ai/           # LLM chains and prompts
 ┃ ┣ routes/       # API endpoints
 ┃ ┗ utils/        # Error handlers, middlewares
 ┗ shared/         # Common types
```

---

## Installation Guide

### 1. Prerequisites
- Node.js (v18+)

### 2. Clone & Install
```bash
git clone https://github.com/oyelurker/LegalKlarity.git
cd LegalKlarity

# Install backend
cd backend
npm install

# Install frontend
cd ../client
npm install
```

### 3. Run Development Server
```bash
# Terminal 1: Backend
npm run start:dev

# Terminal 2: Frontend
npm run start
```

---

## Environment Variables

| Variable | Description | Required |
| -------- | ----------- | -------- |
| `GEMINI_API_KEY` | Google GenAI API access | Yes |
| `MONGO_URI` | Database connection string | Yes |
| `PINECONE_API_KEY` | Vector database access | Yes |

---

## AI/ML/LLM Pipeline

LegalKlarity uses a precision-tuned LLM pipeline designed to **eliminate hallucinations**, as legal advice requires high fidelity.
- **Strict Grounding**: The LLM is given system prompts that force it to quote directly from the provided text. If an answer isn't in the document, it must output "Not stated".
- **Multi-Shot Prompting**: Risk detection uses few-shot examples of predatory clauses to guide the model's anomaly detection.

---

## Security Measures

- **Zero Data Retention**: Uploaded documents are processed in memory and immediately purged post-analysis unless the user explicitly saves them.
- **Encryption in Transit**: Strict TLS enforcing.
- **Rate Limiting**: Prevent abuse of expensive LLM endpoints.

---

## Roadmap

- [x] PDF Parsing & Summarization
- [x] Basic Risk Flagging
- [x] Interactive Q&A
- [ ] Multi-document cross-reference (e.g., comparing two versions of a contract)
- [ ] Browser Extension for live ToS scanning

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
<i>Built for the Gen AI Exchange Hackathon '25</i>
</div>
