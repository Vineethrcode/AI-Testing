# Lakshya QA Functional Requirements and Feature Map

## Purpose

This document is a QA-oriented functional feature map for the Lakshya application used as the System Under Test (SUT) for the QA RAG project.

Important: This is **not an internal PRD from the product owner**. It is a test-oriented requirements/feature document reconstructed from:
1. The real test cases and observations in the Lakshya QA workbook.
2. Publicly available product information from Splink's official website.

Where a behavior is inferred from test coverage rather than an explicit product specification, it is labeled accordingly.

## Product Context

Public Splink product information describes Lakshya as a parent-facing product for discovering a child's strengths, aspirations, and pathways, with a personalized development/blueprint experience. Public product information also describes physical, cognitive, and wellness/development insights as part of the broader Splink platform.

For QA purposes, the exact expected behavior of individual UI controls should be taken from the test artifacts and observed application behavior rather than assumed from marketing content.

## Functional Areas

### Homepage / Navigation

The application provides a homepage with navigation to major sections such as About, How It Works, Experts, Pricing, and authentication-related flows. Navigation and browser-back behavior are part of the tested surface.

**Observed test coverage:**
- Homepage
- Checking full name
- giving Full name as single char
- Testing Password length

### About

The About section is reachable from navigation and contains informational content, including a 'Why Parents Trust Lakshya' area and slide/transition behavior. Tests cover scrolling, readability, responsiveness, and navigation.

**Observed test coverage:**
- "About" Section from Navigation bar
- About Section
- About -> Why Parents Trust Lakshya
- About -> Why Parents Trust Lakshya -> slide transition

### How It Works / Sample Report

The How It Works section provides access to a Sample Report. The sample report contains tabs and visual information such as graphs/charts. Tests cover opening, refreshing, tab interaction, rapid interaction, responsiveness, zoom levels, and visual readability.

**Observed test coverage:**
- How it Works -> Nav Bar
- Under How it Works section -> See Sample Report
- See Sample Report

### Experts

The Experts section is reachable through navigation and presents expert information. Tests cover smooth navigation, readability of expert details, images, designations/achievements, and left/right navigation controls.

**Observed test coverage:**
- Experts -> Navbar

### Pricing

The Pricing section is reachable from navigation and includes navigation/back-to-home behavior. Browser back behavior and internal navigation are explicitly tested.

**Observed test coverage:**
- Pricing -> Nav Bar
- Login -> Forgot Password -> back -> signin -> pricing

### Authentication / Login

The application provides login functionality using email/password credentials. Tests cover valid and invalid credentials, empty/invalid inputs, and navigation behavior around authentication.

**Observed test coverage:**
- Login

### Forgot Password

The login flow provides a forgot-password/reset-password path. Tests cover returning to sign-in, editing the email field, email-format validation, domains/special characters, browser-back behavior, and sending a reset link.

**Observed test coverage:**
- Login -> Forgot Password

### Sign Up

The application provides account creation. Tests cover the sign-up flow, full-name validation, password length, missing password handling, and password masking.

**Observed test coverage:**
- Login -> Don’t have an Account Sign up for free
- Account creation without password
- Password masking option in sign up

### Payments / Checkout

The application contains a payment flow with multiple payment methods and payment success/failure/cancellation paths. Tests cover payment continuation, cancellation, retries, redirection after successful payment, and payment identifiers.

**Observed test coverage:**
- Payments
- Redirecting to Dashboard after successful payment
- Trying to pay or to make the payment success after cancelling the payment in the previous attempt
- Checking payments through netbamking
- Selecting a bank which is currently facing issues and could not process payments
- Cancelling the payment by clicking failure and again making the payment success through same option in the second attempt
- QR code timer in payment failure message window

### UPI

The payment flow supports UPI. Tests cover UPI interaction, session timers, QR scanning behavior, timeout handling, failure states, and subsequent payment options.

**Observed test coverage:**
- Payments -> UPI
- Payments -> UPI -> Session Timer
- Payments -> UPI -> Scan -> after session time out

### Card Payments

The payment flow supports card payments. Tests cover Visa/Mastercard behavior, card details, month/year, CVV, card-network detection, supported cards, currency conversion, payment success/failure paths, secure-card messaging, and dashboard redirection after successful payment.

**Observed test coverage:**
- Card Payment Success -> VISA
- Card Payment -> VISA -> Amount Check
- Card Payment -> Month and year
- Card Payment -> CVV
- Card Payment -> Automatic Payment network gateway displayed when entered card number
- All Cards are accepted by the Payment gateway
- Card Payment -> Mastercard -> Currency Conversion
- Card Payment -> Mastercard -> Currency Conversion -> More Options for more currency
- Card Payment -> Mastercard -> Details -> Continue -> Choosing to make the payment success or not -> Failure button
- Card Payment -> Mastercard -> Details -> Continue -> Choosing to make the payment success or not -> Success button
- Card Payment -> Mastercard -> Details -> Continue -> Secure your Card.
- Payments -> Card Payment -> Name on Card
- Payments -> Card Payment -> Continue -> Loading bank Page

### Netbanking

The payment flow supports netbanking. Tests cover bank selection, bank-search behavior, unavailable/failed bank scenarios, cancellation, OTP handling, resend/timer behavior, and retry/payment outcomes.

**Observed test coverage:**
- Search Bar in Netbanking

### OTP / Wallet / Other Payment Flows

Payment-related flows include OTP and wallet scenarios, cancellation/retry behavior, payment ID copying, and verification of alternative payment methods after a failed or cancelled attempt.

**Observed test coverage:**
- Cancelling Payment while the payment process is going on by clicking on cancel button
- Leaving the OTP field Empty
- Random alphabets, special chars, in OTP field
- Resend OTP, and timer restart
- filling OTP field with invalid or fake OTP's
- Cancelling the payment by clicking failure through wallet payment method
- Verifying other payment options if one payment gets cancelled
- Copying the payment ID after successful payment from the razorpay green succes window

## QA Traceability Notes

The test workbook is the authoritative source for the observed test scenarios and recorded expected/actual behavior. This document should be used as a higher-level feature/requirement context document, while the detailed test-case and defect documents provide the lower-level evidence.

The intended relationships for the QA RAG are:

Requirement / Feature
→ Test Case
→ Test Execution Result
→ Defect / Observation
→ Automation Script (to be added in a later phase)

## Known Limitation

Because an internal PRD was not provided, this document must not be treated as the product owner's formal specification. Future iterations can replace or supplement it with an actual requirements document if one becomes available.
