const LoginToSave = () => {
  return (
    <div>
      Please{' '}
      <a
        className='text-blue-600 hover:scale-125 '
        href='/api/auth/login?returnTo=/draw'
      >
        login
      </a>{' '}
      to save your drawings
    </div>
  );
};

export default LoginToSave;
