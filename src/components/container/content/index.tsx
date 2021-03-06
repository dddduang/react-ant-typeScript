import React, { lazy, Suspense } from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom'

const Home = lazy(() => import('../../../pages/home'))
const DataBase = lazy(() => import('../../../pages/dataBase'))
const ExcelShow = lazy(() => import('../../../pages/excel'))
const ShowData = lazy(() => import('../../../pages/show'))

const Content: React.FC<RouteComponentProps> = () => {
  return (
    <div style={{height: 'calc(100vh - 141px)'}}> {/** background: 'rgb(67, 73, 86)', */}
      <div style={{
        // margin: '24px 16px',
        // padding: 24,
        width: '90%',
        height: '90%',
        margin: 'auto',
        background: 'rgb(58, 62, 65, 0.03)',
      }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={`/`} exact component={Home} />
            <Route path={`/dataBase`} component={DataBase} />
            <Route path={`/excel`} component={ExcelShow} />
            <Route path={`/show`} component={ShowData} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default Content