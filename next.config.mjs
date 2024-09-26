import path from 'path'
import {fileURLToPath} from 'url'
import createNextIntlPlugin from 'next-intl/plugin'

// Set up directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configure next-intl plugin
const withNextIntl = createNextIntlPlugin()

// Combine configurations
/** @type {import('next').NextConfig} */
const nextConfig = {
   sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
      prependData: `
        @import "functions.scss";
        @import "mixins.scss";
        @import "_variables.scss";
      `,
   },
}

// Export combined configuration
export default withNextIntl(nextConfig)
