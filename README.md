# Barstool Sports Engineering Test

### Task Summary:
Using Ember.js and the Ember CLI, create a “/messages” route that connects to the “messages” API endpoint and display each message in a formatted feed view.

**tl;dr** - Take this: http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages, make a page that looks like this: http://bit.ly/2lVgSru using Ember.

### Specifics:
* Ember.js - http://emberjs.com/
* Ember CLI - http://www.ember-cli.com/
* Messages API Doc - http://docs.jsonapifizzbuzz.apiary.io/
* Messages API endpoint - http://private-227b9-jsonapifizzbuzz.apiary-mock.com/messages

### Suggestions:
You’ll need to define a “/messages” route

You can set the data that you need in your template using the Route’s “model” hook

You’ll want to define a “message” Model which will act as an interface to communicate with the API

In the Route’s “model” hook, you can use the store.findAll function to retrieve all the messages from the API

You will also need to define a custom Adapter, so that ember knows the host to direct the request to: https://guides.emberjs.com/v2.11.0/models/customizing-adapters/#toc_host-customization

In the template for our “/messages” route, iterate over each of the messages to generate the feed. The final product should look like this: http://bit.ly/2lVgSru

You may need to use computed properties for some things in the display

Please use less or sass to style your application.

### Tests:
Please set up some basic tests for your /messages route. We will test them using `ember test`

### Rules:
When you’ve completed the code, upload it to a public git repo and send a link along with your LinkedIn profile to engineering@barstoolsports.com with the subject Front-end Engineer.  

I will clone the repo, run npm and bower install, run “ember server”, navigate to “http://localhost:4200/messages”, and expect to see something like this: http://bit.ly/2lVgSru
