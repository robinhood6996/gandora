import { useState, FC, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas,faClose} from '@fortawesome/free-solid-svg-icons';

import InformModal from './InformModal'

import useAuth from '../../hooks/useAuth'

const RegisterModal = (props: any) => {

  const { setUser } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [openInform, setOpenInform] = useState(false)
  const [logPopup,setLogPopup]=useState(false)
  const handleRegister = async (e: any) => {
    e.preventDefault();
    let postBody: any = {
      name: `${firstName} ${lastName}`,
      email: props.socialEmail.email ?  props.socialEmail.email:email,
      password: password
    }
    if (props.googleId !== "") {
      postBody.google_id = props.googleId
    }
    if (props.walletId !== "") {
      postBody.wallet_id = props.walletId
    }
    if (props.twitterId !== "") {
      postBody.twitter_Id = props.twitterId
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'} ,
  };
    axios.post('http://13.215.214.34:8080/player-services/signup',postBody, requestOptions)
        .then(res =>{
           //setUser(res.data.player_info)
           props.onHide();
           setOpenInform(true)
        })
        .catch(error => {
            alert(JSON.stringify(error.response.data));
        });
   
    
      
      // setUser(res.data.player_info)
      // props.onHide();
      // setOpenInform(true)
   
  }

  return (
    <>
      <Modal
        {...props}
        size="w640"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
        <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
      </Modal.Header> */}
        <div className='pt-20 flex justify-end'>
          <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
        </div>
        <div className='text-center font-poppins text-42 text-iridium leading-63 tracking-5p'>REGISTER</div>
        <div className='text-center text-16 leading-24 font-poppins'>Welcom new Joiner. Just a few steps to apply</div>
        <Modal.Body className='py-20p font-Rajdhani text-center tracking-10'>
          <div className="w-300 mx-auto">
            {/* <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Enter your first name" /> */}
            {/* <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Enter your name" onChange={(e) => {
            setName(e.target.value)
          }}/> */}
            <input
              className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
            <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border mb-20p" readOnly={props.socialEmail.email} placeholder="Email"  value={props.socialEmail.email ? props.socialEmail.email:email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border-1 mb-20p active:border-lovelyPurple" placeholder="Password" onChange={(e) => {
              setPassword(e.target.value)
            }} />
            <input className="h-30 w-full rounded-default text-iridium indent-15 bg-white bg-opacity-50 mr-5 border" placeholder="Confirm password" />
            <div className="flex flex-col items-center">
              <button className='w-230 h-40 text-default border-1 border-davygrey bg-davygrey rounded-8 px-32p py-8p my-15p' onClick={(e) => {
                handleRegister(e)
              }}
              >
                Register
              </button>
              <div className='h-1p border-dashed border-1 w-full border-davygrey'></div>
              <button className='w-230 h-40 text-davygrey border-1 border-davygrey bg-default rounded-8 px-32p py-8p my-15p'>Back to sign in option</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <InformModal
        show={openInform}
        logPopup={logPopup}
        onHide={() => setOpenInform(false)}
      />
    </>
  );
}

export default RegisterModal;
