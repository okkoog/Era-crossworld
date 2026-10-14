# Gameplay save fixtures

These four compressed `.sav` files and `global.sav` were created through the unchanged erauma game's own menus in the compatibility host. They contain a test trainer named `Trainer`; they are regression fixtures, not a user's personal saved games. The original `sources/erauma/` tree is not modified.

- `save1.sav`: week 1, Teio (character 3) selected after training. Speed is 121.6 and player energy is 810; the scenario performs another speed training action from this baseline.
- `save2.sav`: an intermediate progression checkpoint, retained to make the fixture sequence reproducible.
- `save3.sav`: week 24, Teio's debut race (race 0) registered and ready. The scenario enters the original race preview, pre-race event, result statistics and post-race event through their enabled buttons.
- `save4.sav`: a later checkpoint from the same exploratory session, retained with the original fixture set.
- `global.sav`: original language and save-slot metadata for those checkpoints.

`VerificationScenario.Run` copies these files into a separate test save directory on a fresh run. It never changes these fixtures or the original source. The scenario drives the original title/load, training, save, race and load menus and checks state changes, result charts, race registration and history. A fixed pseudorandom stream is installed only in test sessions so the regression is repeatable; production game randomness is unchanged. Debut losses need not be recorded: the original game writes debut history only for a win, and the assertion respects that rule.

The scenario saves trained state to slot 5 and completed race state to slot 6. `checkpoint.json` is read from the actual persisted slot-6 bytes, and `checkpoint-metrics.json` records the persisted attributes and history. This avoids comparing a snapshot taken before the original save menu finishes its own state changes. A `restoreOnly` run consumes those files without copying fixtures again, checks complete state restoration in a fresh JavaScript engine, then uses the original title/load menus and performs a rest action. The same helper is callable from the console test runner and from the Emuera plugin; running it in a second Emuera process provides process-restart evidence.

Reports include check names, numeric state metrics and a checkpoint hash. Story transcripts are not retained. The fixture scenario covers this training and debut-race path; it is not an assertion that every character, event and ending has been exercised.
