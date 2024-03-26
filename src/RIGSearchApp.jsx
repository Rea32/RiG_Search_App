
import './styles.css'

import { RiGSearchPage } from './pages/RiGSearchPage'
import { RiGLayout } from './layout/RiGLayout'
import { AppTheme } from './theme/AppTheme'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { SearchRoutes } from './routes/SearchRoutes'

export const RIGSearchApp = () => {

  return (
    <Provider store={ store }>
      <AppTheme>
        <RiGLayout>
          <SearchRoutes/>
        </RiGLayout>
      </AppTheme>
    </Provider>
  )
}


