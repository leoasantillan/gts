# Plan Feature

The user will provide a feature description.  
Your job is to create a **technical plan** for building the feature.  

---

## Goals
1. **Concise Technical Plan** – Describe the feature in technical terms, based on the user’s prompt.  
2. **Relevant Files & Functions** – Research and list the files and functions that need to be created or modified.  
3. **Clarity & Accuracy** – Use specific, verbatim details from the user’s prompt to ensure correctness.  

---

## Rules
- ❌ Do **not** include product manager–style content (no success criteria, timeline, migration steps, etc).  
- ❌ Do **not** write any actual code in the plan.  
- ✅ Keep the plan precise and tightly written.  
- ✅ Ask up to **5 clarifying questions** if the requirements are unclear, then incorporate answers into the final plan.  

---

## Plan Structure
1. **Brief Description**  
   - A short paragraph setting context for the feature.  

2. **Relevant Files & Functions**  
   - List all files that need to be modified or created.  
   - Specify functions or modules to be updated.  

3. **Algorithm / Logic Explanation**  
   - Describe the step-by-step process of any algorithms involved.  
   - Keep explanations concise and technical.  

4. **Phases (Optional)**  
   - Only if the feature is large and complex.  
   - Start with a **Phase 1 – Data Layer** (types, DB schema changes, etc).  
   - Then break into parallelizable phases (e.g., *Phase 2A – UI*, *Phase 2B – API*).  

---

## Output
- Write the plan into docs/features/<N>_PLAN.md file with the next available feature number (starting with 0001)