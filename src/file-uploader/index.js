import React from 'react'
import style from './index.styl'
import {ImageAddAPhoto} from 'material-ui/svg-icons'


export class Controller{
	mode='waiting'//'waiting','uploading','uploaded'
	value=0 //0~100
	constructor(src,onChange){
		this.onChange=onChange
		this.src=src
	}
	upload(){
		
	}
}

export default class extends React.Component{
	onSelect(e){
		var file = e.target.files[0]
		//console.log(e.target.files)
		this.props.controller.upload(file)
		// var reader = new FileReader()
		// reader.readAsDataURL(files[0])
		// reader.onload = ()=>{
		// 	this.refs.img.src = reader.result
		// }
	}
	render(){
		return(
			<div ref='box' className={style.box}>
				<ImageAddAPhoto />
				<img className={style.img} ref='img' />
				<input type='file' multiple onChange={::this.onSelect} directory />
			</div>
		)
	}
}