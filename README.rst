Not So Weak Passwords
=====================

No So Weak Passwords (nswp) is a very simple Google Chrome extension to generate (not so weak) passwords for the casual web site
requiring authentication you surf to not so often.

It is well known that *reusing the same passowrd* on different site is very dangerous, as well as using *weak passwords*; on the
other hand, is *quite difficult to remember* many different good passwords.

The idea behind this extension is very easy: to **generate** a password concatenate a (*unique* and *strong*) secret to the web site
URL (or something derived from it) and then take the SHA1 of it.

In more detail, once you've set your secret in the extension options, by clicking on the extension icon you get a dialog with two
fields: the first contains the host portion of the current tab (omitting the 'www.' prefix, if present) and the second one the
generated password that will be automatically copied to the clipboard. If you want to edit the first field (for instance, to add a
prefix to identify different accounts), just do it and the password will be automatically re-generated (an copyed to the clipboard).
