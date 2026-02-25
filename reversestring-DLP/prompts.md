Act as a senior frontend engineer designing production-ready code (2026 standards).

Refactor the reverse string solution following clean architecture and maintainability principles, keeping it runnable by opening index.html directly (file://) without requiring a local server.

Requirements:

Architecture:

- Keep HTML and JS in separate files.
- Avoid polluting the global scope as much as possible for a small vanilla JS exercise.
- Separate concerns (DOM handling vs business logic).
- Make the reverse function pure and easily testable.
- Keep the solution minimal, readable, and maintainable.

Implementation:

- Unicode-safe reverse implementation.
- Reverse the string in real time while typing.
- Enable the button only when input length > 3 (do not hide it).
- No inline styles.
- Clean semantic HTML.
- Minimal DOM queries (cache elements).
- Use modern ES2022+ syntax.
- Add concise, meaningful comments.

Code quality:

- Defensive programming.
- Readable naming.
- Avoid unnecessary complexity.
- Follow current frontend best practices (2026).
