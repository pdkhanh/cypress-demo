FROM cypress/included:5.0.0 as cypress-demo
CMD mkdir -p /e2e
COPY ./ /e2e/
WORKDIR /e2e
RUN npm install --save-dev