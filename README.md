Not So Weak Passwords
=====================

[![Chrome Web Store](https://img.shields.io/chrome-web-store/d/hflhgljplfoljnanaackikeflkooodfj.svg)]()

No So Weak Passwords (nswp) is a very simple
[Google Chrome extension](https://chrome.google.com/webstore/detail/not-so-weak-passwords/hflhgljplfoljnanaackikeflkooodfj)
to generate (not so weak) passwords for the casual web site requiring
authentication you surf to not so often.

It is well known that *reusing the same passowrd* on different site is
very dangerous, as well as using *weak passwords*; on the other hand, is
*quite difficult to remember* many different good passwords.

The idea behind this extension is very easy (and not new at all, see the
similar software\_ section below): to **generate** a password
concatenate a (*unique* and *strong*) **secret**, or "master password",
to the web site URL (or something derived from it) and then take the
SHA1 of it.

In more detail, once you've set your secret in the extension's options,
by clicking on the extension icon you get a dialog with two fields: the
first contains the host portion of the current tab (omitting the 'www.'
prefix, if present) and the second one the generated password that will
be automatically copied to the clipboard. If you want to edit the first
field (for instance, to add a prefix to identify different accounts),
just do it and the password will be automatically re-generated (an
copyed to the clipboard).

Security
--------

The security of this extension depends on several facts:

-   the secret is remembered by [Web
    Storage](http://dev.w3.org/html5/webstorage/), nothing is ever sent
    over the network: not the secret, the visited sites URLs, or
    passwords;

-   the [SAH1 secure hashing
    algorithm](http://csrc.nist.gov/groups/ST/toolkit/secure_hashing.html)
    is NIST approved, the implementation used is the one by [Chris
    Veness](http://www.movable-type.co.uk/scripts/sha1.html); thanks to
    [this
    advice](https://twitter.com/#!/__eMMe/status/141059942873444352),
    the hash is applied ten times (unless you set "Use 1-pass only SHA1"
    in extension's options);

-   the code of the extension is very simle, publicily available, and
    can be inspected (and understood) by anyone with a basic
    undestanding of Javascript and HTML.

Other implementations
---------------------

One can implement the same approach (albeit with a less pleasant user
experience) using a web server and a couple of web pages, that can be
hence used with **any web browser**, even **mobile** ones. For an
example of such implementation feel free to use
<http://santini.di.unimi.it/extras/pw/> (on my web site directly –
nothing will be ever stored by it), or use the code in
[alternatives/web](http://github.com/mapio/nswp/tree/master/alternatives/web)
directory of this repository. In principle, one can develop a
bookmarklet to improve the user experience (by pre-filling the url
field, for excample).

Similarly, one can implement a simple command line tool and use the
generated passwords not only for web browsing, but for authentication in
general. Have a look to the
[alternatives/cli](http://github.com/mapio/nswp/tree/master/alternatives/cli)
directory of this repository for a very simple Python implementation.

Similar software
----------------

As I said, the approach is not new at all. Similar (and for many aspect
more complete, or better) alternatives are (among others):

-   [SuperGenPass](http://supergenpass.com/)
-   [Cryptnos](http://www.cryptnos.com/)
