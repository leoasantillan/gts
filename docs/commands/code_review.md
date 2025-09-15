# Code Review

We just implemented the feature described in the attached plan. Please perform a **comprehensive code review** with the following objectives:

## 1. Plan Compliance
- Confirm the implementation matches the requirements in the plan.  
- Flag any missing or incomplete functionality.  

## 2. Bug Detection
- Identify obvious logic or runtime errors.  
- Note risky assumptions that could lead to failures.  

## 3. Data Alignment
- Check for mismatches in expected vs. actual data structures.  
  - Example: snake_case vs camelCase  
  - Example: flat object expected but receiving `{ data: {} }`  

## 4. Code Quality & Maintainability
- Spot over-engineering or unnecessary complexity.  
- Flag files/components that are too large and may need refactoring.  
- Suggest simplifications where possible.  

## 5. Consistency & Style
- Look for syntax, naming, or style patterns that don’t match the codebase.  
- Ensure consistency with conventions and formatting.  

---

## Output Instructions
- Document findings in `docs/features/<N>_REVIEW.md` (unless another filename is specified).  
- Organize feedback under the categories above.  
- Provide **actionable recommendations** for each issue.  