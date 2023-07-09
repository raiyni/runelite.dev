import accountReducer from './account'
import appReducer from './app'
import bootstrapReducer from './bootstrap'
import configReducer from './config'
import gitReducer from './git'
import itemReducer from './item'
import sessionReducer from './session'
import tagReducer from './tag'
import pricesReducer from './prices'
import externalPluginsReducer from './plugin-hub'
import tileReducer from './tile'

// Combine all redux reducers into one root reducer
export default {
  account: accountReducer,
  app: appReducer,
  bootstrap: bootstrapReducer,
  config: configReducer,
  externalPlugins: externalPluginsReducer,
  git: gitReducer,
  item: itemReducer,
  session: sessionReducer,
  tag: tagReducer,
  prices: pricesReducer,
  tile: tileReducer
}
