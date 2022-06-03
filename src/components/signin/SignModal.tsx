import { useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useMetaMask } from "metamask-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import SignInModal from './SignInModal';
import RegisterModal from './RegisterModal';
import InformModal from './InformModal'
import useAuth from '../../hooks/useAuth';
import facebookregis from "../../assets/images/social/fbregis.svg";
import twitterregis from "../../assets/images/social/twitterregis.svg";
import googleregis from "../../assets/images/social/googleregis.svg";
import metamask from "../../assets/images/social/matamask.svg";
import iconregis from "../../assets/images/social/iconregis.svg";



const SignModal = (props: any) => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const [siginShow, setSigninShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [socialEmail,setSocialEmail]=useState({email:'',read:false});
  const [openInform, setOpenInform] = useState(false)
  const [logPopup,setLogPopup]= useState(false)

  const [googleId, setGoogleId] = useState('')
  const [facebookId, setFaceBookId] = useState('')
  const [twitterId, setTwitterId] = useState('')
  const [walletId, setWalletId] = useState('')

  const redirectURL = '/';
  const navigate = useNavigate();
  const { googleSingIn, facebookSignin, signInWithTwitter, setUser } = useAuth();

  const showRegisterModal = () => {
    setRegisterShow(true);
  }
  const openSignin=()=>{
    setSigninShow(true);
  }

  //Google signin function
  const handleGoogleSignIn = () => {

    googleSingIn()
      .then((user: any) => {
        console.log(user)
        axios.get(`http://13.215.214.34:8080/player-services/email-check/${user.email}`).then((res) => {
          if (res.data.result) {
            // setUser({
            //   ...user,
            //   name: user.displayName,
            //   photo:user.photoURL
            // })
            
            props.onHide()
            setOpenInform(true)
            setLogPopup(true)
            //navigate(redirectURL);
          } else {
            setSocialEmail({email:user.email,read:true});
            setGoogleId(user.uid)
            props.onHide();
            setRegisterShow(true);
          }
        })
      })
  }

  //Facebook Signin function
  const handleFacebookLogin = () => {
    facebookSignin()
      .then((user: any) => {
        console.info(JSON.stringify(user));
       // navigate(redirectURL);
       // setRegisterShow(true);
       // setSigninShow(false);
       axios.get(`http://13.215.214.34:8080/player-services/email-check/${user.email}`).then((res) => {
          if (res.data.result) {
            //alert("User Already Exist");
            // setUser({
            //   ...user,
            //   name: user.displayName,
            //   photo:user.photoURL
            // })
            props.onHide()
            setOpenInform(true)
            setLogPopup(true)
            // navigate(redirectURL);
          } else {
             setSocialEmail({email:user.email,read:true});
            setFaceBookId(user.uid)
            props.onHide();
            setRegisterShow(true);
          }
        })
      })
  }
  //Facebook Signin function
  const handleTwitterLogin = () => {
    signInWithTwitter()
      .then((user: any) => {
        axios.get(`http://13.215.214.34:8080/player-services/twitter-check/${user.uid}`).then((res) => {
          if (res.data.result) {
            // setUser({
            //   ...user,
            //   name: user.displayName,
            //   photo:user.photoURL
            // })
            props.onHide()
            setOpenInform(true)
            setLogPopup(true)
            // navigate(redirectURL);
          } else {
            setSocialEmail({email:user.email,read:true});
            setTwitterId(user.uid)
            props.onHide();
            setRegisterShow(true);
          }
        })
      }).catch((error:any)=>{
        console.log(JSON.stringify(error));
      })
  }

  const handleConnect = async () => {
    connect().then(res => {
      console.info("data",res)
      if (res) {
        axios.get(`http://13.215.214.34:8080/player-services/wallet-check/${res[0]}`).then((response) => {
          if (response.data.result) {
            props.onHide()
            setOpenInform(true)
            setLogPopup(true)
            //navigate(redirectURL);
          } else {
            setWalletId(res[0])
            props.onHide();
            setRegisterShow(true);
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    })
    // props.onHide();
  }

  return (
    <div>
      <Modal
        {...props}
        size="w640"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className='py-20p font-Rajdhani text-center tracking-10'>
          <p className="uppercase text-35 leading-45">sign in or create account</p>
          <p className="uppercase text-16 leading-20">User May Login With Metamask</p>
          <p className="uppercase text-16 leading-20">General Registration Or Other Social Media</p>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">

            <div className="ml-0p sm:ml-22p">
              <p className="text-14 leading-18 text-left mt-5p">SOCIAL</p>
              <div className="bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center cursor-pointer hover:border">
                <div className=" flex items-center justify-center ml-5p ">
                <img src={facebookregis} width={100} height={100} style={{marginTop:20}}  />
                </div>
                <div className="uppercase ml-5p me-2 flex flex-col"
                  onClick={() => {
                    handleFacebookLogin()
                  }}
                >
                  <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                  <label className="text-20 leading-26 text-brightBlue">facebook</label>
                </div>
              </div>

              <div className="bg-clearBlue bg-opacity-10 rounded-10 h-75p my-11p flex items-center cursor-pointer hover:border">
                <div className=" rounded-full  flex items-center justify-center ml-5p ">
                <img src={twitterregis} width={100} height={100} style={{marginTop:20}} />
                </div>
                <div className="uppercase ml-5p me-2 flex flex-col"
                  onClick={() => {
                    handleTwitterLogin()
                  }}
                >
                  <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                  <label className="text-20 leading-26 text-brightBlue">twitter</label>
                </div>
              </div>
              <div className="bg-[#d1cfcf] bg-opacity-10 rounded-10 h-75p my-11p flex items-center cursor-pointer hover:border">
                <div className=" flex items-center justify-center ml-5p ">
                <img src={googleregis} width={100} height={100} style={{marginTop:20}} />
                </div>
                <div className="uppercase ml-5p me-2 flex flex-col"
                  onClick={() => {
                    handleGoogleSignIn()
                  }}
                >
                  <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                  <label className="text-20 leading-26 text-[#text-#ED8000]">google</label>
                </div>
              </div>
            </div>
           <div className="ml-0p sm:ml-22p">
            <div className="mr-0p sm:mr-22p">
                <p className="text-14 leading-30 text-left mt-12p sm:leading-18 uppercase">WEB3</p>
                <div
                  className="bg-[#FFF3E9] rounded-10 h-75p flex items-center sm:flex-col sm:my-6p sm:h-135p sm:justify-center cursor-pointer hover:border"
                  key="2"
                  onClick={handleConnect}
                >
                  <div className=" flex items-center justify-center ml-5p mx-auto-sm">
                  <img src={metamask} width={100} height={100} className="mt-20 sm:mt-0" />
                  </div>
                  <div className="uppercase ml-5p sm:ml-11p  mx-auto-sm sm:mt-2p flex flex-col ">
                    <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                    <label className="text-20 leading-26 text-[#ED8000]">metamasks</label>
                  </div>
                </div>
              </div>
              {/* <div className="mr-22p hidden sm:block">
                <p className="text-14 leading-18 text-left mt-5p">WEB3</p>
                <div className="bg-[#FFF3E9] rounded-10 h-135p my-6p flex flex-col justify-center cursor-pointer hover:border">
                  <div className="  flex items-center justify-center ml-5p  mx-auto">
                  <img  src={metamask} width={100} height={100}/>
                  </div>
                  <div className="uppercase ml-11p flex flex-col mx-auto mt-2p" onClick={handleConnect}>
                    <label className="text-10 leading-12 opacity-75">continue with</label>
                    <label className="text-20 leading-26 text-[#ED8000]">metamasks</label>
                  </div>
                </div>
              </div> */}


              <div className="mr-0p sm:mr-22p">
                <p className="text-14 leading-30 text-left mt-12p uppercase">General register</p>
                <div
                  className="bg-[#653E9D] bg-opacity-10 rounded-10 h-75p flex items-center cursor-pointer hover:border"
                  key="2"
                  onClick={() => {
                    showRegisterModal();
                    props.onHide();
                  }}
                >
                  <div className=" flex items-center justify-center ml-5p">
                  <img src={iconregis} width={100} height={100} style={{marginTop:20}} />
                  </div>
                  <div className="uppercase ml-5p pe-2 flex flex-col">
                    <label className="text-10 leading-12 opacity-75 text-left">continue with</label>
                    <label className="text-20 leading-26 text-[#8235F1]">Register</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Button
              variant="outline-dark"
              className='d-block font-Rajdhani ml-auto mr-22p'
              onClick={() => {
                setSigninShow(true);
                props.onHide();
              }}
            >
              have account
            </Button>
          </div>

        </Modal.Body>
      </Modal>
      <SignInModal show={siginShow}
        onHide={() => setSigninShow(false)}></SignInModal>
      <RegisterModal 
        show={registerShow}
        onHide={() => setRegisterShow(false)} 
        socialEmail={socialEmail}
        googleId={googleId}
        walletId={walletId}
        twitterId={twitterId}
      />
       <InformModal
        show={openInform}
        logPopup={logPopup}
        onHide={() => setOpenInform(false)}
        openSignin={()=>setSigninShow(true)}
      />
    </div>
  );
}

export default SignModal;
