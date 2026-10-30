# E-3 Android onboarding audit

How long does it take, and how many steps, to go from the Play Store to a first successful dictation?
About 15 minutes.

## Before you start

- Note your phone model, Android version and network (Wi-Fi or mobile data) in the table below.
- Turn on **Do Not Disturb**, so no notification or message appears in the recording.
- Dictate into a **WhatsApp chat with yourself** or a notes app, never a real chat.
- Uninstall Flow. Your account and dictionary live in your account, so signing back in restores them.
  If you'd rather not, use a family member's phone with their OK instead (E-3b below).

## Run

1. Start Android's built-in screen recorder.
2. Open the Play Store, search "Wispr Flow", install, open it.
3. Sign in **with your challenge email**. Grant whatever it asks for, set up whatever it asks for.
4. Stop at the **first dictated sentence that appears correctly** in the chat. Say: "This is my first
   message with Flow on this phone."
5. Stop recording. Save it to `recordings/` (gitignored) and tell Claude the file name.
6. For comparison, record starting Gboard voice typing in the same chat: tap the mic, say the same
   sentence.

Claude watches the recording and fills in the step log. You only fill in the setup table.

## Setup

| | Flow (E-3a) | Gboard |
|---|---|---|
| Phone and Android version | | |
| Network | | |
| Recording file | | |

## Step log (Claude fills this from the recording)

| # | Screen or step | Seconds | Permission prompt? | Hesitated or confused? |
|---|---|---|---|---|
| 1 | | | | |

**Totals:** Flow ___ steps, ___ permission prompts, ___ min ___ s · Gboard ___ steps, ___ s

## E-3b (optional): a family member's phone

The same run on a parent's or relative's phone, with their OK. They do the tapping and you only
answer their questions. This is the "onboarded by younger family members" pattern TechCrunch
describes. No names in the repo: write "family member, ~50s".
