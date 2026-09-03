# Lakshya Defects and Observations

Source: 21b44601-88e1-4eed-b991-658533b6c674.md (manually prepared Test Cases document).

Only test cases whose recorded Status indicates an observation or issue are included. Original Test Case IDs and source wording are retained.

## Test Case ID: 12
**Test Case Name:** See Sample Report - 2

**Test Data:** N/A

**Expected Result:** Child Image should load and display correctly everytime the sample report is re-opened.

**Actual Result:** Child image disappears after reopening report in browser mobile responsive mode, but works correctly on real mobile device.

**Status:** Pass with Observation

**Severity:** Low

**Priority:** Low

## Test Case ID: 13
**Test Case Name:** See Sample Report - 3

**Test Data:** N/A

**Expected Result:** Graph lines, labels, and background should have sufficient contrast for proper visibility and readability.

**Actual Result:** The Grid lines are not properly visible in the intelligence profile under overview tab.

**Status:** UI clarity issue

**Severity:** Low

**Priority:** Medium

## Test Case ID: 17
**Test Case Name:** Experts -> Navbar - 3

**Test Data:** N/A

**Expected Result:** By clicking on right nav arrow upon reaching the end it should be disabled and when clicked on left which directs us to start the left nav arrow should be disabled

**Actual Result:** Right navigation arrow remains active after reaching the last expert card, even though no additional content is available. Same applies to left.

**Status:** Pass with Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 18
**Test Case Name:** Pricing -> Nav Bar - 1

**Test Data:** N/A

**Expected Result:** Upon clicking the back button the page should go back or display the home page or whatever the page is embedded in the code  before the pricing page

**Actual Result:** After testing it was observed that when clicked on back button, the back button is getting disabled and the page stays the same which is the pricing page instead of going back,

**Status:** Navigation issue

**Severity:** Medium

**Priority:** Medium

## Test Case ID: 26
**Test Case Name:** Login -> Forgot Password - 3

**Test Data:** abcdefghijklmnopqr@gmail.com

**Expected Result:** should display a error message telling the user that they entered a wrong email or email does not exist

**Actual Result:** Not showing any error message and says Reset Link Sent check "abcdefghijklmnopqr@gmail.com for reset link. It expires in 1 hour

**Status:** Observation

**Severity:** Medium

**Priority:** High

## Test Case ID: 28
**Test Case Name:** Login -> Forgot Password - 5

**Test Data:** MaheshBabu@facebook.com, Maheshbabu@twitter.com

**Expected Result:** Should not accept and should display an error message

**Actual Result:** Not showing any error message and says Reset Link Sent check "MaheshBabu@facebook.com" for reset link. It expires in 1 hour

**Status:** Observation

**Severity:** Not Specified

**Priority:** Not Specified

## Test Case ID: 29
**Test Case Name:** Login -> Forgot Password -> back -> sign-in -> pricing

**Test Data:** N/A

**Expected Result:** If we click on browser back button it should probably go to sign in page

**Actual Result:** It actually showed the pricing page where it showed all the pricing plans instead of sign in page

**Status:** Observation

**Severity:** Not Specified

**Priority:** Not Specified

## Test Case ID: 36
**Test Case Name:** Login -> Don’t have an Account Sign up for free - 2

**Test Data:** N/A

**Expected Result:** After clicking the back arrow button, it should redirect us to the sign in page.

**Actual Result:** After testing it was observed that when we click on the back navigation arrow of the browser, it is heading towards the pricing section rather than the sign-in page.

**Status:** Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 44
**Test Case Name:** Pricing -> Nav Bar

**Test Data:** vinithr2@gmail.com mobile number:984803291

**Expected Result:** Should not accept incorrect details or invalid details and should throw an error or should not allow the user to click on the "Proceed to Pay" button.

**Actual Result:** After giving an invalid email ID and an invalid phone number and clicking on "Proceed to Pay", it accepts and redirects us to the payment gateway

**Status:** Observation

**Severity:** Medium

**Priority:** High

## Test Case ID: 45
**Test Case Name:** Pricing -> Nav Bar - 2

**Test Data:** vinithr2@gmail.com  mobile number:984803291

**Expected Result:** should clear or prevent invalid customer details from being prefilled after cancelling payment.

**Actual Result:** It is concluded that the details are pre-filled even after cancelling the payment and again pressing the Pay Now button.

**Status:** Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 46
**Test Case Name:** Pricing -> Nav Bar - 3

**Test Data:** 123456 7899874322

**Expected Result:** The application should reject invalid or long phone numbers and prevent redirecting the user to the payment gateway.

**Actual Result:** It was observed that after entering the invalid long mobile number, the application is accepting that mobile number and redirecting the user to the payment gateway.

**Status:** Observation

**Severity:** Medium

**Priority:** High

## Test Case ID: 48
**Test Case Name:** Payments

**Test Data:** Card Name:34353453

**Expected Result:** If the card name is entered in the numerical format, the payment process should rejected.

**Actual Result:** After giving the numerical values in the card name field and clicking on continue, the payment got processed.

**Status:** Observation

**Severity:** Medium

**Priority:** High

## Test Case ID: 66
**Test Case Name:** Card Payment -> Month and year

**Test Data:** MM/YY: 12/53
MM/YY: 12/99

**Expected Result:** When the user enters month and year, the application should accept only up to the 12th month and the user should be restricted to enter 13, 14, or 15 etc.. And coming to the year part, if the user enters 53 70 99, the application should not accept future expiry years and display a validation error message.

**Actual Result:** After testing it was observed that the month field is not accepting 1.3 or 1.4 but it is accepting up to 1.2. When it comes to the year, it is accepting 53, 70, 99, which are very far-future expiry days.

**Status:** Observation

**Severity:** Low

**Priority:** High

## Test Case ID: 69
**Test Case Name:** All Cards are accepted by the Payment gateway

**Test Data:** VISA: 4111 1111 1111 1111
Mastercard: 5555 5555 5555 4444; 5105 1051 0510 5100
RuPay: 6521 5000 0000 0002 6073 8400 0000 6705; 6080 0140 5406 5294; 6521 5000 0000 0002; 6522 3456 7890 1234
Amex: 3782 822463 10005

**Expected Result:** After entering all the payment network card numbers, the payment gateway should accept all the card numbers.

**Actual Result:** After testing it was observed that while entering Visa, Mastercard, and Amex cards, the application did not throw any error but while entering with different card numbers with the same RuPay payment network, it is throwing an error. Saying "please enter a valid card number"

**Status:** Observation

**Severity:** Low

**Priority:** High

## Test Case ID: 70
**Test Case Name:** Card Payment -> Mastercard -> Currency Conversion

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/32
CVV: 123
card name: dvgds

**Expected Result:** According to the UI-displayed conversion rate (1 INR = 0.077 BRL including currency conversion fee), the converted BRL amount should be calculated consistently based on the displayed exchange rate.

**Actual Result:** The application displays the conversion rate as 1 INR = 0.077 BRL including currency conversion fee. Based on this displayed rate, the calculated BRL amount is approximately consistent with the displayed value of BRL 68.88.

**Status:** Observation

**Severity:** Low

**Priority:** High

## Test Case ID: 71
**Test Case Name:** Card Payment -> Mastercard -> Currency Conversion

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/32
CVV: 123
card name: dvgds

**Expected Result:** The application should display exchange rate and converted BRL amount consistently according to the configured gateway conversion rate and included currency conversion fee.

**Actual Result:** The application displays BRL 68.88 for INR 899 using the configured conversion rate and included currency conversion fee. The displayed conversion differs from current market exchange values, which may be due to gateway-configured exchange rates or additional currency conversion charges.

**Status:** Observation

**Severity:** Low

**Priority:** High

## Test Case ID: 73
**Test Case Name:** Card Payment -> Mastercard -> Details -> Continue -> Choosing to make the payment success or not -> Failure button

**Test Data:** N/A

**Expected Result:** The application should stop the payment process if clicked on failure

**Actual Result:** Application crashed or closed when clicked on failuer option while payment

**Status:** Observation

**Severity:** High

**Priority:** High

## Test Case ID: 76
**Test Case Name:** Card Payment -> Mastercard -> Details -> Continue -> Choosing to make the payment success or not -> Success button

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/32
CVV: 123
card name: dvgds

**Expected Result:** After the Payment is completed and when clicked on “Done” button it should redirect to some other page or confirmation page or to anywhere according to the requirements.

**Actual Result:** Payment was successful but after the payment when trying to click on "Done" the button is not working

**Status:** Observation

**Severity:** Medium

**Priority:** Medium

## Test Case ID: 78
**Test Case Name:** Redirecting to Dashboard after successful payment

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/32
CVV: 123
card name: dvgds

**Expected Result:** Should redirect to dashboard or assessment

**Actual Result:** After successful payment the application says payment successful "you're all set! Your plan is active and says taking you to the assessments and Redirecting please wait but it never redirects to that pages and keeps the user waitng for long time and when clicked on back button it is showing pricing section and done button is not working

**Status:** Observation

**Severity:** Medium

**Priority:** Medium

## Test Case ID: 79
**Test Case Name:** Card Payment -> Mastercard -> Details -> Continue -> Secure your Card.

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/42
CVV:123
Card Name: sfgdsghrher

**Expected Result:** When secure card authentication/login fails, the application should gracefully handle the failure by allowing user to retry authentication, or allowing payment continuation without card-saving,or resetting the payment without letting the user fall in the loop of login failure pop-ups (but there's an option where the user can uncheck the checkbox and continue payment but the user might not be focusing or getting an idea of unchecking the checkbox instead a message can be displayed from the application side to the user to uncheck the checkbox )

**Actual Result:** After selecting “Yes, secure my card,” the application displayed a “Login Failed” error popup. Upon dismissing the popup, the Continue button remained active; but, clicking Continue repeatedly triggered the same Login Failed popup again, causing the payment flow to become stuck in a repeated failure state without recovery or alternate progression.

**Status:** Observation

**Severity:** Medium

**Priority:** Medium

## Test Case ID: 80
**Test Case Name:** Card Payment -> Mastercard -> Details -> Continue -> Choosing to make the payment success or not -> Failure button

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/42
CVV:123
Card Name: sfgdsghrher

**Expected Result:** If the user clicks on browser refresh button the page should get refreshed or redirect to somewhere or to corresponding site.

**Actual Result:** Upon clicking the refresh button multiple nothing is happening

**Status:** Observation

**Severity:** Medium

**Priority:** Medium

## Test Case ID: 81
**Test Case Name:** Payments -> Card Payment -> Name on Card

**Test Data:** Card Number: 4111 1111 1111 1111

**Expected Result:** The Name on Card field should display during the card payment so that users should be aware of all the requuired fields

**Actual Result:** The name on Card is not initially not visible and the field only appears when a user enters their card number

**Status:** Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 82
**Test Case Name:** Payments -> Card Payment -> Continue -> Loading bank Page

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/42
CVV:123
Card Name: sfgdsghrher

**Expected Result:** When the bank page is trying to take more time to load the application should give other options of payment

**Actual Result:** The payment processing screen displayed the message “You can either wait or change the payment method,” but no visible option, button, or navigation control was provided to allow the user to change the payment method.

**Status:** Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 84
**Test Case Name:** Trying to pay or to make the payment success after cancelling the payment in the previous attempt

**Test Data:** Card Number: 5555 5555 5555 4444
MM/YY: 12/42
CVV:123
Card Name: sfgdsghrher

**Expected Result:** If the user cancels the payment during transaction confirmation/processing stage, the system should completely cancel the transaction and allow fresh retry successfully, or indicate the payment was already completed if backend payment succeeded

**Actual Result:** After initiating a successful payment flow and cancelling during the “Confirming your payment” stage, the application redirected back to payment methods. On retrying the payment using the same order/session, the application displayed the message “Your payment has been declined as the order is already paid,” despite the previous flow appearing cancelled from the user perspective.

**Status:** Observation

**Severity:** Medium to high

**Priority:** High

## Test Case ID: 87
**Test Case Name:** Selecting a bank which is currently facing issues and could not process payments

**Test Data:** N/A

**Expected Result:** The application should not process any transaction or payment, or should disable the bank selection,

**Actual Result:** Dhanlaxmi bank is displaying the message “Bank is currently busy or facing issues. Please try again later” was still selectable for payment. After selecting the bank and choosing the success flow, the payment completed successfully despite the displayed availability warning.

**Status:** Observation

**Severity:** Medium

**Priority:** Medium

## Test Case ID: 92
**Test Case Name:** QR code timer in payment failure message window

**Test Data:** N/A

**Expected Result:** The timer should actually end at 00:00 and only after 00:00 a New QR should be generated

**Actual Result:** the timer starts at 11:55 and somewhere around 9 or 8 minutes countdown the timer is getting vanished and a new QR is getting generated, ( Refresh QR option on QR code) (this does not happen everytime)

**Status:** Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 93
**Test Case Name:** filling OTP field with invalid or fake OTP's

**Test Data:** 000000
111111
123456
999999

**Expected Result:** As these are fake OTP's the system should not accept them

**Actual Result:** The system is accepting fake OTP's like mentioned in the test data, and as it is a demo website it might be OK but in real testing this might be an issue

**Status:** Pass with Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 96
**Test Case Name:** Copying the payment ID after successful payment from the razorpay green succes window

**Test Data:** N/A (if wallet or netbanking chosen)

**Expected Result:** The payment ID should be copied to clipboard if clicked on copy button

**Actual Result:** We are not able to copy the payment ID even though the cursor symbol changes

**Status:** Observation

**Severity:** Low

**Priority:** Medium

## Test Case ID: 98
**Test Case Name:** giving Full name as single char

**Test Data:** Full Name: A
Email Id: bojihi2066@5nek.com
password: Lakshya@123456

**Expected Result:** IF the application says min name length must be 2 or 3 then if the user enters a single char "a" or anything like this then this might be an issue or else we can consider this as working or partial working

**Actual Result:** Working but with conditions

**Status:** Pass with observation

**Severity:** Low

**Priority:** Low

## Test Case ID: 101
**Test Case Name:** Password masking option in sign up

**Test Data:** Full name: Priya
Email: dimap22397@5nek.com
password: Cars@12`3456

**Expected Result:** the password should be visible to the user if clicked on masking option

**Actual Result:** Masking option works and the password is also visible if clicked, but when tried in edge browser it showed two password masking options but the functionality works

**Status:** Pass with observation

**Severity:** Low

**Priority:** Low
