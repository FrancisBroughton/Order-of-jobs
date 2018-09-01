# Order of Jobs

Order of jobs is a tech test for On The Beach.  The aim is to build and test a function, that takes an object which contains jobs/tasks, of which some of these jobs rely on other jobs/tasks to be completed first before itself can be completed and so will return the correct order of jobs to be completed.

For example '{"a": "", "b": "c", "c": ""}' will return the correct order of jobs as ["a", "c", "b"]

<br />

### Getting started

You will need the latest version of [Node](https://nodejs.org/en/) installed. 
To check if you have Node already installed by running the command:

```
node -v
```
If node is already installed your command line will return a version number. eg v8.0.0

You will need to clone the repositary. To do this copy the link, navigate to your local directory on the terminal and run command:

```
git clone ${https://github.com/FrancisBroughton/order-of-jobs.git}
```

Then run:
```
npm install
```

This project uses Chai and Mocha for testing purposes. To install these dependencies run the following command:

```
npm install chai mocha
```

To run the tests in this repositary:

```
npm test
```

<br>

### Author

Francis Broughton





