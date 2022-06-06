FROM mcr.microsoft.com/playwright:v1.21.0-focal

RUN mkdir /playwright_api_test_framework
WORKDIR /playwright_api_test_framework
COPY . /playwright_api_test_framework

# Install dependencies
RUN npm install

# Install browsers
RUN npx playwright install

## Expose the port of the playwright report
#EXPOSE 9323

# Run playwright test
RUN ["npx","playwright","test"]