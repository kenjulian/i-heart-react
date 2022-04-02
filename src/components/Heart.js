import HeartLogo from '../assets/heart.svg';

const Heart = (props) => {
    return (
      <div className='heart'>
        <img className='heart-img' src={HeartLogo} alt='heart' />
        <p className='heart-message'>{props.msg}</p>
        {/* props.msg initialized in HeartsList.js and accessed here */}
      </div>
    )
  }

export default Heart;