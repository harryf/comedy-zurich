import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { scheduledPublishing } from "@sanity/scheduled-publishing";
import {media} from 'sanity-plugin-media'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'comedy-zurich',

  projectId: 'xzb2k2bw',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    scheduledPublishing(),
    media(),
    ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: schemaTypes,
  },
})

