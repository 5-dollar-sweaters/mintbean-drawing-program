const LoginToLoadFiles = () => {
  return (
    <div>
      Please{' '}
      <a
        className='text-blue-600 hover:scale-125 '
        href='/api/auth/login?returnTo=/draw'
      >
        login
      </a>{' '}
      to load your saved drawings
    </div>
  );
};

export default LoginToLoadFiles;
