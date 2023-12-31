import React from 'react'

function Register({ onRouteChange }){

    return(
        <main className="ma2 pa4 black-80">
<div className="measure center">
<fieldset
  id="sign_up"
  className="ba b--transparent ph0 mh0"
>
<legend className="f2 fw6 ph0 mh0">
Register
</legend>

<div className="mt3">
<label
  className="db fw6 lh-copy f6"
  
>
First Name
</label>
<input
  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
  type="text"
  name="first-name"
  id="first-name"
/>

<label
  className="db fw6 lh-copy f6"
  
>
Last Name
</label>
<input
  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
  type="text"
  name="last-name"
  id="last-name"
/>



<label
  className="db fw6 lh-copy f6"
 
>
Email
</label>
<input
  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
  type="email"
  name="email-address"
  id="email-address"
/>
</div>
<div className="mv3">
<label
  className="db fw6 lh-copy f6"
  
>
Password
</label>
<input
  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
  type="password"
  name="password"
  id="password"
/>
</div>
<label className="pa0 ma0 lh-copy f6 pointer">
<input type="checkbox" />
 Remember me
</label>
</fieldset>
<div className="">
<input
  onClick = {() => onRouteChange('home')}
  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
  type="submit"
  value="Register"
/>
</div>
<div className="lh-copy mt3">
<a
  href="#0"
  className="f6 link dim black db"
>
Sign In
</a>
<a
  href="#0"
  className="f6 link dim black db"
>
Forgot your password?
</a>
</div>
</div>
</main>
    )
}

export default Register;
