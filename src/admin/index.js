import React from 'react'
import {AppBar} from 'material-ui'
import cs from 'classnames'
import style from './index.styl'
import {Link} from 'react-router'

const NavItem=(props,ctx)=>(
	<Link to={props.to} className={cs(style.item,{[`${style.active}`]:props.to&&ctx.router.isActive(props.to)})}>
		{props.icon&&<props.icon />}
		<span>{props.children}</span>
	</Link>
)
NavItem.contextTypes={router: React.PropTypes.object}
const Nav=()=>(
	<nav className={style.nav}>
		<NavItem to='/admin/commic' icon={require('material-ui/svg-icons/communication/import-contacts').default}>本子库存</NavItem>
		<NavItem to='/admin/users' icon={require('material-ui/svg-icons/action/supervisor-account').default}>成员列表</NavItem>
		<NavItem to='/admin/analysis' icon={require('material-ui/svg-icons/action/trending-up').default}>网站统计</NavItem>
	</nav>
)



export default class extends React.Component{
	render(){
		return(
			<div>
				<AppBar title="本子社の储物室" iconClassNameRight="muidocs-icon-navigation-expand-more" />
				<div className={style.wrapper}>
					<aside>
						<Nav />
					</aside>
					<div className={style.content}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}