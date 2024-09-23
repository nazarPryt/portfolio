import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
   sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
      prependData: `
      @import "functions.scss";
      @import "mixins.scss";
      @import "_variables.scss";
    `,
   },
}
