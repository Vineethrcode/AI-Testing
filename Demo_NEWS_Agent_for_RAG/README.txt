Project Goal

The goal of this project is to build an automated AI-powered daily news briefing system using n8n and integrating with RAG in future.

The system is designed to collect recent news from multiple sources, remove duplicate and outdated articles, use AI to evaluate the importance and relevance of each story, and automatically generate a structured newspaper containing Major, Normal, and Minor stories.

A key objective is to make the system India-focused while still identifying globally significant events, with special consideration for Telangana & Hyderabad.

The final planned output is an AI-generated newspaper that can be:

Generated as a PDF
Archived in Google Drive
Delivered through Email
Eventually used as a knowledge source for a RAG-based system
What Has Been Implemented So Far

The current workflow has progressed through the following stages:

1. News Collection

Configured multiple RSS sources including NDTV, The Guardian, NASA, India Today, Hindustan Times, and Times of India.
Built a scalable RSS ingestion flow using HTTP Request + XML parsing.

2. Data Processing

Flattened RSS feeds into individual articles.
Removed duplicate articles based on URL.
Filtered articles to the last 24 hours.
Cleaned HTML content while preserving article metadata.

3. AI-Based Story Analysis

Added an AI classification stage using Gemini 2.5 Flash.
Each article is evaluated for:
Category
Importance
Priority score
Coverage depth
India relevance
Telangana/Hyderabad relevance
Global significance
Evidence status
Reason for classification

4. Intelligent Story Routing
Articles are automatically classified into:

Major
Normal
Minor

Major and Normal stories receive deeper article retrieval through Firecrawl, while Minor stories use the available RSS content to reduce processing and API usage.

5. AI Newspaper Writing
Separate AI writing stages generate:

Factual headlines
Concise newspaper summaries

The workflow is designed to preserve source attribution and avoid unsupported assumptions or AI-generated speculation.

6. Newspaper Generation
The Major, Normal, and Minor stories are merged and sorted by their priority score before being converted into a newspaper-style HTML document.

7. Output Pipeline
The current workflow has also been prepared for:

HTML → PDF
Google Drive archival
Email delivery
Current Status

Work in Progress

The core workflow architecture has been built up to the newspaper generation and PDF/output stages. End-to-end execution and final validation are still pending.

The next stage is to resolve the current Gemini API rate-limit issue, test the workflow with multiple articles, and verify the complete pipeline from news collection through PDF generation, Google Drive archival, and email delivery.

Planned Future Improvements
Expand the number and diversity of news sources.
Add more Telangana/Hyderabad-specific sources.
Implement fallback handling when Firecrawl/API limits are reached.
Improve newspaper formatting and presentation.
Complete automated scheduling and delivery.
Build the planned RAG layer over archived news.
Improve reliability, error handling, and scalability.


Once this workflow is completed I will gather all the pdf documents in which it has all the news details, and put all these collected bunch of documents into RAG.