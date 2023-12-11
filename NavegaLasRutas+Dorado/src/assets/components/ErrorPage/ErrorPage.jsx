import React from 'react';

const ErrorPage = () => {
  const imageUrl = 'https://cdn.dribbble.com/users/2480087/screenshots/7009361/media/5be4690e38762fd53647912018e86189.gif';

  return (
    <div className='col-12 mx-auto'>
        <img src={imageUrl} alt="Error" />
    </div>
  );
}

export default ErrorPage;
