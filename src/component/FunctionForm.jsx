import React from 'react'

function FunctionForm() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [retypePassword, setRetypePassword] = React.useState('');
  
  let handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  let handleLastName = (event) => {
    setLastName(event.target.value)
  };

  let handleEmail = (event) => {
    setEmail(event.target.value)
  };

  let handlePassword = (event) => {
    setPassword(event.target.value)
  };

  let handleRetypePassword = (event) => {
    setRetypePassword(event.target.value)
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(retypePassword);
  };

  
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 bg-pic mt-2 mb-2'>
            <h1 className='display-4 text-success text-center'>Register For Free.!!!</h1>
            <form className='p-2 mt-3' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label><h6 className='text-white'>First Name</h6></label>
                <input type='name' className='form-control' placeholder='First Name' onChange={handleFirstName} value={firstName} />
              </div>
              <div className='form-group'>
                <label><h6 className='text-white'>Last Name</h6></label>
                <input type='name' className='form-control' placeholder='Last Name' onChange={handleLastName} value={lastName}  />
              </div>
              <div className='form-group'>
                <label><h6 className='text-white'>Email</h6></label>
                <input type='email' className='form-control' placeholder='Email@abcd.com' onChange={handleEmail} value={email} />
              </div>
              <div className='form-group'>
                <label><h6 className='text-white'>Password</h6></label>
                <input type='password' className='form-control' placeholder='Enter Password' onChange={handlePassword} value={password} />
              </div>
              <div className='form-group'>
                <label><h6 className='text-white'>Re-type Password</h6></label>
                <input type='password' className='form-control' placeholder='Re-Enter Password' onChange={handleRetypePassword} value={retypePassword} />
              </div>
              <div className='form-group'>
                <button type='submit' className='form-control btn btn-lg btn-primary mt-3'>Submit</button>
              </div>
            </form>
          </div>
        </div>    
      </div>
    </>
  );
};

export default FunctionForm;