import React, { lazy, Suspense } from 'react';
import { Route, RouteComponentProps,Switch } from 'react-router-dom'

// import DataBase from '../../../pages/dataBase'

const DataBase = lazy(() => import('../../../pages/dataBase'))
const ExcelShow = lazy(() => import('../../../pages/excel'))
const ShowData = lazy(() => import('../../../pages/show'))

const Content: React.FC<RouteComponentProps> = ({match, location}) => {
  return (
    <div style={{background: 'rgb(67, 73, 86)', height: '88vh'}}>
      <div style={{
        margin: '24px 16px',
        padding: 24,
        background: 'rgb(58, 62, 65)',
        height: '94%'
      }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={`${match.url}/dataBase`} component={DataBase} />
            <Route path={`${match.url}/excel`} component={ExcelShow}/>
            <Route path={`${match.url}/show`} component={ShowData}/>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default Content