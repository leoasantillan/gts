# QA Test Plan Generator

Given a feature description, technical plan, and review notes, generate a **QA checklist** that a QA engineer can use to manually test the feature in **staging**.

---

## QA Checklist Requirements
1. **Test Scenarios**  
   - List the main user flows that must be tested.  
   - Include happy path, edge cases, and error states.  

2. **Test Data / Preconditions**  
   - Specify any accounts, roles, configs, or data setup needed before testing.  

3. **Steps to Test**  
   - Write step-by-step instructions for executing each test scenario.  
   - Keep steps clear and concise.  

4. **Expected Results**  
   - Define what the QA engineer should expect at each step.  
   - Note both success criteria and error handling.  

5. **Out-of-Scope**  
   - List anything explicitly not covered in this round of QA.  

---

## Output
- Write the QA checklist into: docs/features/_QA.md where `<N>` matches the feature number from its plan and review.  

The document should include:  
- ✅ Feature name/ID  
- ✅ Test scenarios with steps + expected results  
- ✅ Any required test data or setup  
- ✅ Notes on limitations or TODOs if unclear  