FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set working directory
WORKDIR /app

ARG TEST_SUITE
ENV TEST_SUITE=$TEST_SUITE
# Copy package files first (better caching)
COPY package.json package-lock.json  playwright.config.js ./

# Install dependencies
RUN npm ci

# Copy entire project
COPY . .

# Install Playwright browsers (already included, but safe)
RUN npx playwright install chromium

# Default command
CMD ["npx", "playwright", "test", "--grep", @$TEST_SUITE]