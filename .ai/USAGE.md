# Using the CamryHub coding agent

## Files and authority

AGENTS.md is the canonical project definition. CLAUDE.md imports it for compatibility; .github/copilot-instructions.md tells Copilot to read it.
.ai/skills/README.md indexes ten portable workflow files. Open only matching workflows; these are not installed native skills or executable commands.
Keep instruction files in Git with the application. Do not put credentials, personal account tokens, or machine-specific secrets in them.
The requested Next.js 14 baseline differs from this repository's Next.js 16.4 declaration; installed versions win. This configuration does not downgrade dependencies or rename TCEHub code.

## Cursor

1. Open the repository root as the workspace. Cursor supports root AGENTS.md as project instructions.
2. For a workflow, attach the corresponding file through the chat file picker/@-mention if available.
3. Send: "Read .ai/skills/new-page.md and use the new-page skill to add /partners with mock data."
4. Ask the agent to identify the instruction and workflow files it read if loading is uncertain.
   Do not put plain .md workflows in .cursor/rules and expect them to become rules; native project rules use .mdc configuration.

## Claude Code

1. Start Claude Code in the repository root. The supplied CLAUDE.md imports AGENTS.md using a real @AGENTS.md import.
2. Newer Claude Code can also load AGENTS.md directly; keep the import for clients where direct support is unavailable.
3. Use /context (when supported) to inspect loaded memory/instruction files; request a file-read confirmation otherwise.
4. Send: "Read .ai/skills/supabase-query.md and use it to prepare a published-shop accessor."
   Do not import all ten workflows into CLAUDE.md; loading everything defeats on-demand context.

## GitHub Copilot

1. Open the repository using a Copilot client with repository custom instructions enabled.
2. .github/copilot-instructions.md is the repository-wide entry point; AGENTS.md support varies by Copilot feature/client.
3. Attach AGENTS.md and the selected workflow through the file/context picker when they are not loaded automatically.
4. In Copilot Chat, inspect response references to confirm repository instructions were used when that UI is available.
5. Send: "Read AGENTS.md and .ai/skills/code-review.md; review this diff without editing or posting comments."
   The Copilot adapter's references are instructions to read files, not a universal Markdown import mechanism.

## Invoking a workflow

Portable syntax: "Use the <name> skill at .ai/skills/<name>.md to <task>."
Example: "Use the admin-crud skill at .ai/skills/admin-crud.md to build a mock gallery editor; do not enable persistence."
@skill new-page is not a built-in universal command. Use it only if your editor has an explicitly configured dispatcher.
Native /skill-name commands require that editor's supported skill packaging/installation; the requested flat Markdown library does not register them automatically.
For multiple workflows, name their order: new-page for routing, new-component for UI, seo-metadata for discovery, deploy-check for validation.
Loading a workflow does not grant permission to add auth, deploy production, run destructive migrations, or enable unprotected writes.

## Extending the library

1. Create .ai/skills/<verb-noun>.md using lowercase kebab-case; keep its name stable and under 64 characters.
2. Add frontmatter name, description, and version, then all five required sections. Keep the entire file under 150 lines.
3. Put the trigger in When to use, concrete required context in Inputs, ordered behavior in Steps / checklist, and a realistic bounded Example.
4. Register one row in .ai/skills/README.md with a one-line purpose and "Use <name> when …" trigger.
5. Link any dependencies explicitly; avoid cycles and contradictory permission requirements.
6. Review the example against AGENTS.md and installed APIs; check links, line count, and absence of secrets.
7. Commit on a feature branch, review, and merge through the normal repository workflow.
   Only generate native editor adapters if you need native discovery; retain these files as the source of truth and prevent divergent copies.

## Versioning

Use semantic versions in each workflow's frontmatter: patch for clarifications, minor for compatible steps, major for changed inputs/output or permissions.
The version field is repository metadata, not a promise that every editor recognizes it.
Update only changed workflows; do not version-bump the entire library for one fix.
Record the agent version in the root heading. Link behavioral changes in the commit/PR; do not add changelog boilerplate to every skill.

## Quick loading check

Ask: "List the project role, installed Next.js version, data-access location, and rules for real admin writes. Then identify the skill for adding a route."
Expected: senior Next.js/Supabase developer; installed version from package/lockfile; /lib/data/*; authorized boundary required before writes; new-page.
This checks instruction comprehension, not enforcement. Test actual code and permissions separately.

## Official loading references

- Cursor: https://cursor.com/docs/rules
- Claude Code: https://code.claude.com/docs/en/memory
- GitHub Copilot: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
  Verify client behavior against its current documentation if instruction loading differs.
