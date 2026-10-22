---
name: findskills
description: Helps users discover, evaluate, and install agent skills from the open skills ecosystem (skills.sh). Use when user asks to find skills, install skills, search capabilities or extend the agent.
---

# Find Skills (findskills)

This skill enables the agent to search, vet, and install agent skills using the Skills CLI (`npx skills`).

## CLI Commands Reference

- **Search skills:**
  `npx -y skills find <query>`
- **Install skill globally:**
  `npx -y skills add <owner/repo> --skill <skill-name> -g -y`
- **Install skill locally:**
  `npx -y skills add <owner/repo> --skill <skill-name> -y`
- **List installed skills:**
  `npx -y skills list`

## Recommended Quality Criteria

1. Install count > 1,000 installs.
2. Verified authors (e.g. `vercel-labs`, `anthropics`, `google`).
3. Clear `SKILL.md` structure with clear trigger conditions and examples.
