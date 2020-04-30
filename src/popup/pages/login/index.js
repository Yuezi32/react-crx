import React from 'react'
import { Button, Input } from 'antd'
import carrot from './carrot.svg'
import { apiReqs } from '@/api'
import './login.styl'

function Login(props) {

	const login = () => {
		apiReqs.signIn({
			success: (res) => {
				console.log(res)
				alert(res.data.nickname)
				props.history.push('/home')
			},
			fail: (res) => {
				alert(res)
			}
		})	
	}

	return (
		<div className="P-login">
			<img src={carrot} alt="" className="carrot" />
			<div className="login-con">
				<div className="ipt-con">
					<Input
						placeholder="请输入账号"
						size="large"
					/>
				</div>
				<div className="ipt-con">
					<Input.Password
						placeholder="请输入密码"
						size="large"
					/>
				</div>
				<Button type="primary" size="large" onClick={login}>登录</Button>
			</div>
		</div>
	);
}

export default Login
