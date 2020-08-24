FROM cypress/included:5.0.0 as cypress-demo

RUN mkdir -p /e2e
COPY ./ /e2e/
WORKDIR /e2e
RUN npm install