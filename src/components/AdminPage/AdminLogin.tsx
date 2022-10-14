import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { userLogin } from '../../services/LoginService'

import { control, encrypt } from '../../utils/util'
import NavBar from '../NavBar'

function Admin() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const sendFnc = (evt: React.FormEvent) => {
    evt.preventDefault()
    if (email === '' || email !== 'admin@mail.com') {
      toast.error('E-mail Failed!')
      toast.error('Go To User Login panel!')
    } else if (password === '') {
      toast.error('Password Empty!')
    } else {
      userLogin(email, password).then(res => {
        if (res.status === 200) {
          const dt = res.data
          const stData = JSON.stringify(dt)
          sessionStorage.setItem('user', encrypt(stData))
          if (remember === true) {
            localStorage.setItem('user', encrypt(stData))
          }
          window.location.href = '/dashboard'
        }
        else {
          toast.error("Username or Password Fail!")
        }
      })
    }
  }
  useEffect(() => {
    const jwt = control()
    if (jwt) {
      console.log(jwt.result.authorities[0].authority);
    }
  }, [])


  return (
    <>
      <NavBar />
            <div className="row d-flex justify-content-center align-items-center mt-5">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 mt-5">
                <div className="card p-lg-5">
                  <div className="card-body p-5">
                    <h2 className="text-center fw-bold fs-2 modal-title mb-2">Admin Login</h2>
                    <form onSubmit={sendFnc} method='post'>
                      <div className="form-outline mb-2">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input value={email} onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="email" />
                      </div>
                      <div className="form-outline mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={password} onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="password" />
                      </div>
                      <div className="form-outline mb-2 form-check mt-2">
                        <input onClick={(evt) => setRemember(!remember)} type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Remember</label>
                      </div>
                      <div className='d-grid gap-2 mt-4'>
                        <button type="submit" className="btn btn-outline-success"><i className="bi bi-person " ></i> Login</button>&nbsp;
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Admin