# RepDay Privacy & Support Site

Static pages for RepDay's App Store and Google Play listings.

## Published routes

- `/privacy/` — Privacy Policy URL
- `/support/` — Support URL and local data-deletion instructions

The pages support English, Turkish, and Spanish, follow the browser language when
possible, and do not use analytics, advertising, cookies, or a build process.

## Publish with GitHub Pages

1. Push these files to the `main` branch of a public GitHub repository.
2. Open **Settings → Pages** in that repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish and verify that both routes open over HTTPS.

If the repository is named `repday-site`, the URLs will normally be:

```text
https://YOUR-GITHUB-USERNAME.github.io/repday-site/privacy/
https://YOUR-GITHUB-USERNAME.github.io/repday-site/support/
```

Replace `YOUR-GITHUB-USERNAME` only in the store metadata; no placeholder in the
site files needs to be changed.

## Before store submission

- Open both public URLs in a private/incognito browser window.
- Confirm they do not require a GitHub login.
- Enter the privacy URL and support URL in App Store Connect and Google Play Console.
- Keep the policy aligned with the app whenever data practices or third-party SDKs change.
- Review the text with a qualified legal professional if the app's business model,
  data handling, target audience, or distribution regions change.
