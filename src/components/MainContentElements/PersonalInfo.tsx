export const PersonalInfo = () => {
  return (
    <main className='main-content-container'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='e.g. Stephen King' />
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='e.g. stephenking@lorem.com'
          />
        </div>
        <div>
          <label htmlFor='tel'>Phone Number</label>
          <input type='tel' id='tel' placeholder='e.g. +1 234 567 890' />
        </div>
      </div>
    </main>
  );
};
