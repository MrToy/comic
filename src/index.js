import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route,browserHistory,IndexRedirect} from 'react-router'

injectTapEventPlugin()

const routes=(
	<Router history={browserHistory}>
		<Route path="/" component={require('react-router!./main')} />
		<Route path="/admin" component={require('react-router!./admin')}>
			<IndexRedirect to="commic" />
			<Route path="analysis" component={require('react-router!./admin/analysis')} />
			<Route path="commic" component={require('react-router!./admin/commic')} />
			<Route path="users" component={require('react-router!./admin/users')} />
		</Route>
	</Router>
)

const App=()=>(
	<MuiThemeProvider>
		{routes}
	</MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))