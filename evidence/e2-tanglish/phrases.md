# E-2 Tanglish self-test: phrases

**Claude drafted these. Before you test, fix any line that isn't how you'd really say it.** The
wording you would actually use matters more than mine. Once you've tested, don't change a phrase;
add a new one instead.

Key tokens are the words a message can't do without. They're scored as correct or wrong.

| ID | Category | Phrase (say it naturally) | Key tokens |
|---|---|---|---|
| A1 | English with Tamil words | Machan, I'll be late by ten minutes, wait pannu. | machan · late · ten minutes · wait pannu |
| A2 | English with Tamil words | Da, did you finish the DBMS assignment or not? Sollu da. | da · DBMS · assignment · sollu |
| A3 | English with Tamil words | Bro, canteen la idli is over, so I'm getting dosa. | canteen la · idli · dosa |
| B1 | Tamil with English nouns | Naan library la irukken, assignment submit pannitu varen. | library la · irukken · assignment · submit pannitu · varen |
| B2 | Tamil with English nouns | Indha semester attendance romba kammiya irukku, OD apply pannanum. | semester · attendance · romba kammiya · OD · apply pannanum |
| B3 | Tamil with English nouns | Naalaikku exam irukku, naan seekiram thoonganum. | naalaikku · exam · seekiram · thoonganum |
| C1 | Campus names | The bus from Potheri to Kattankulathur is late again. | Potheri · Kattankulathur · late |
| C2 | Campus names | Meet me at Tech Park, fourth floor, after the lab. | Tech Park · fourth floor · lab |
| C3 | Campus names | Tomorrow is day order four, so first hour is free. | day order four · first hour · free |
| D1 | Numbers and times | Naalaikku 8 mani class cancel aayiduchu. | naalaikku · 8 mani · class · cancel · aayiduchu |
| D2 | Numbers and times | Send me 250 rupees on GPay, naan apram tharen. | 250 rupees · GPay · apram tharen |
| D3 | Numbers and times | Hostel fees last date is November 15th, marakkaadha. | hostel fees · November 15th · marakkaadha |

## How to run it (15 minutes, once)

1. **Setup.** Quiet room, your usual phone. Note the phone model and Flow's language setting (whatever
   a new user gets; don't tune it first). Gboard voice typing: English (India).
2. **Where to dictate.** Into a WhatsApp chat with yourself, or a notes app. Say each phrase once in
   Flow and once in Gboard. No retries; the first attempt is the result.
3. **Record the output.** Paste each output, exactly as written, into `scoring.csv`.
4. **Rate it.** For each output, is it **send_as_is**, **small_edit** or **retype**? Rate it as if you
   were really sending it to a friend.
5. **Scoring.** Claude counts the key tokens. A Tamil word written in a different but readable spelling
   counts as correct; a word that's missing or replaced does not.
