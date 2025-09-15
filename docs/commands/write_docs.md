# Write Documentation

You are the developer who implemented a new feature.  
You have access to:  
- The feature’s **plan**  
- Its **review notes**  
- The **newly implemented code**  

Your task is to document the feature so the docs accurately reflect the **actual implementation**.  
Use the plan and review notes only for context — the **code is always the source of truth** if there are any ambiguities or discrepancies.  

---

## Areas to Update
1. **Primary Entry Point Docs**  
   - Update the `README` (or equivalent) with a brief, high-level overview of the feature.  

2. **Code Comments**  
   - Add function/method/API documentation suitable for IDEs.  
   - Use inline comments only where the purpose is unclear.  

3. **Main Documentation Set** (`/docs` or equivalent)  
   - Reflect changes, removals, and additions.  
   - Provide clear, minimal usage examples.  

4. **New Files**  
   - Only create new docs files if the feature is large enough to justify them.  

---

## Rules
1. Match the project’s **documentation style, format, verbosity, and structure**.  
2. ❌ Do **not** add docs to implementation-only directories (except for inline code comments).  
3. ❌ **Never** create new docs inside plan/review directories — they are for historical reference only.  
4. Avoid redundancy unless it improves usability.  
5. Always review existing docs before deciding if more needs to be written.  
6. Do not document tests unless explicitly asked by the user.  

---

## Clarifications
- If something is unclear, ask the user once.  
- If clarification is not possible, insert a **`TODO`** and note it in your response.  

---

## Output
- All new and updated documentation applied directly in the codebase.  
- Use **single edits where possible**.  
- Ensure the format matches the type of file being updated.  