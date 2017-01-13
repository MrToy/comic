import React from 'react'
import style from './index.styl'
import {ImageAddAPhoto} from 'material-ui/svg-icons'


export default class extends React.Component{
	onFile(e){
		var files = e.target.files
		var reader = new FileReader()
		reader.readAsDataURL(files[0])
		reader.onload = e=>{
			this.refs.img.src = reader.result
		}
	}
	render(){
		return(
			<div ref='box' className={style.box}>
				<ImageAddAPhoto />
				<img className={style.img} ref='img' />
				<input type='file' onChange={::this.onFile} />
			</div>
		)
	}
}