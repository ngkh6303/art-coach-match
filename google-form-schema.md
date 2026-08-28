# Google Form Blueprint — Studio Field Notes Art Coach Match

Use this blueprint to create the live Google Form in the account that will receive applications. The website currently keeps the form URL as a single constant and shows a transparent setup card until a public `/viewform` URL is connected.

## Form title

**Studio Field Notes — Art Coach Match Intake**

## Form description

Tell us a little about the child, family or art-coaching practice you have in mind. We use these details only to understand the request and make an initial introduction. Completing this form does not guarantee a match, a student placement or a coaching outcome.

## Questions

| # | Question | Type | Required | Options / notes |
|---:|---|---|:---:|---|
| 1 | Your name / preferred name | Short answer | Yes | For a parent/guardian or coach contact. |
| 2 | WhatsApp / phone number | Short answer | Yes | Add response validation for a sensible phone number if needed. |
| 3 | Email address | Short answer | Yes | Enable email validation. |
| 4 | I am completing this form as… | Multiple choice | Yes | Parent / guardian; Art coach; Other |
| 5 | Child’s age range | Multiple choice | No | 4–6; 7–9; 10–12; 13–15; 16+; Not applicable — I am a coach |
| 6 | What would they most enjoy exploring? | Checkboxes | No | Drawing + illustration; Painting + colour; Making + sculpture; Digital art; Portfolio / exam support; Not sure yet; Other |
| 7 | What kind of art-coaching experience are you looking for? | Checkboxes | No | One-to-one lessons; Small group; Holiday workshop; Portfolio guidance; Confidence-building; Parent + child session; Other |
| 8 | Which level best describes the learner or your coaching level? | Multiple choice | Yes | New to it; Some experience; Confident / advanced |
| 9 | Which days and times usually work? | Checkboxes | No | Weekday mornings; Weekday afternoons; Weekday evenings; Saturday morning; Saturday afternoon; Sunday; Flexible; Other |
| 10 | Where would sessions ideally take place? | Checkboxes | No | Online; At-home; Studio / school; Hong Kong Island; Kowloon; New Territories; Other |
| 11 | What is the approximate budget per one-to-one session? | Multiple choice | No | HK$150 / session; HK$300 / session; HK$450 / session; HK$500 or above / session; To discuss |
| 12 | Tell us anything useful about the child, family or your teaching practice. | Paragraph | No | Encourage context, interests, goals, experience, qualifications or safeguarding considerations. Do not request sensitive information that is not needed for an initial introduction. |
| 13 | How would you prefer us to follow up? | Multiple choice | Yes | WhatsApp / phone; Email; Either is fine |
| 14 | Consent to initial matching contact | Checkbox | Yes | “I understand that my details will be used to review this enquiry and, where appropriate, make an initial introduction. I understand that a match or outcome is not guaranteed.” |

## Recommended settings

Collect email addresses only if that suits the receiving account and the intended follow-up process. Do not make the form public with “edit after submit” enabled. Add a short confirmation message such as: “Thanks — we’ve received your details. We’ll review the brief and contact you if an initial introduction looks relevant.” Avoid promising a response time until the operating process is confirmed.

## Embed steps

After creating the form, use **Send → Embed HTML** or copy the public responder URL ending in `/viewform`. In `client/src/pages/Home.tsx`, replace the empty `GOOGLE_FORM_URL` value with that public URL. Do not use the `/edit` URL in the website. Test the public responder view on mobile and desktop before publishing.

## Privacy and child-safety note

Before launch, confirm the data-retention period, who can access responses, how parent/guardian consent is handled and what safeguarding process applies to coach introductions. This blueprint intentionally avoids collecting a child’s full name or sensitive personal details at the first step.
