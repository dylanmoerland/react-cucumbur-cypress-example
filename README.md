# React cucumber cypress example
An example showcasing how to use cucumber in combination with cypress to test a react app automatically.

## References
[Cucumber](https://github.com/cucumber/cucumber) is a tool that supports behavior driven development. A software development process that aims to enhance software quality and reduce maintenance costs.
[cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) allows us to use cucumber in combination with cypress.
[step-definition-generator](https://github.com/dylanmoerland/step-definition-generator) is an Atom plugin that generates the step definitions for your feature files.

## Running it locally
1.  Clone the project
```
$ git clone https://github.com/dylanmoerland/react-cucumbur-cypress-example.git
```
2. Install dependencies
```
$ cd react-cucumber-cypress-exmaple
$ npm install
```
3. Run the web app
```
$ npm start
$ open http://localhost:3000
```
4. Open cypress
```
$ npm run cypress:open
```
5. Click `Run all tests`

## Result
`Scenario: Adding`
![Cypress result](https://github.com/dylanmoerland/react-cucumbur-cypress-example/blob/master/example/adding.gif?raw=true)
`Scenario: Subtracting`
![Cypress result](https://github.com/dylanmoerland/react-cucumbur-cypress-example/blob/master/example/subtracting.gif?raw=true)
