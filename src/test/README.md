What is unit testing?
It is about testing the smallest piece of units of your application in isolation.

Testing in isolation is the key.

Web applications often connect to the database, talk to external services, and touch the file system. Unit testing ensures that each one of those units works as expected in isolation.

But unit testing is not enough. It only checks for individual pieces. It should be followed with integration testing to make sure all the units work as expected in unison.

Why is unit testing important?
Unit tests are often the first level of testing done in a web application. For most projects, it is the last one too. Integration and end-to-end tests come after it.

Writing unit tests early in the development cycle helps identify bugs before they creep into the later stages of development.

Why do we need unit tests if they can't guarantee a functional web application?

There are some valid reasons:

Since you can't have integration or end-to-end tests during development, unit testing is the best way to catch bugs as they arise.
It serves as good documentation for the codebase.
Adopting Test Driven Development (more on this later) helps set the expectations.
