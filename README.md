# [Ukio 🌍](https://ukio-olive.vercel.app/)

This app consists of a `react` frontend built with `vite`, `typescript` and `tailwind`. Deployed to `vercel` with a simple serverless api endpoint.

Tests can be run with `npm run tests`. Development is done with the vercel cli command `vercel dev` (account needed)

Considerations about my solution:

- The strategy I used is URL to store the filter state, which is sufficient for this case. While React context or Redux state are more powerful, they are also more complex.
- For simplicity, I chose to use the native fetch function for API requests instead of a library like axios or react-query.
- The deliberately minimalist design and style were due to time constraints. An improved UX can be achieved given more time.
- Through minor design adjustments and a responsive layout, I implemented a basic user-friendly experience.
  Support for both light and dark themes is included.
- The app is deployed on Vercel with a simple API endpoint.
- I've written only a few tests, including smoke and unit tests in some components.

## 📝 Possible improvements

- Pagination should reset when the filters are changed, behaviour can be erratic sometimes.
- Add basic CI/CD through github actions to deploy only when tests pass.
- Cover more corner cases with testing
- i18n
- Versioning, changelog, semantic-release
- Manifest.json (PWA)
