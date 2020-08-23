FROM cypress/included:5.0.0 as cypress-demo

COPY package.json /tmp/package.json
RUN mkdir -p /e2e
COPY ./ /e2e/
WORKDIR /e2e
RUN npm install
#RUN CI=true /tmp/node_modules/.bin/cypress install
#RUN mkdir -p /e2e && cp -a /tmp/node_modules /e2e/


# Copy files for config
#COPY cypress.json /e2e

# Run tests
#CMD npx cypress run --reporter mochawesome --spec "cypress/integration/interview/gobear.test.js" --browser chrome --headless