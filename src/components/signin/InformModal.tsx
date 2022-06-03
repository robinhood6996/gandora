import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const InformModal = (props: any) => {

  const navigate = useNavigate()
  const openSigin=()=>{
    props.openSignin();
    props.onHide(); 
  }
  return (
    <Modal
      {...props}
      size="w640"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     {props.logPopup? 
     (
       <>
     <div className='pt-20 flex justify-end'>
  <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
      </div>
      <div className="">
        <h1 className="text-center text-42 font-poppins mb-4 text-success">
          User Already Existing
        </h1>
        {/* <p className="text-center text-16 leading-24 font-poppins">
          please go to Login
        </p> */}
        <Button 
          variant="outline-dark" 
          className='d-block mx-auto my-4 font-poppins'
          onClick={openSigin}
        >
          Go to login page
        </Button>
      </div>
      </>):
      (
        <>
      <div className='pt-20 flex justify-end'>
   <FontAwesomeIcon icon={faClose} className="w-20 h-20 cursor-pointer mr-20" onClick={props.onHide}></FontAwesomeIcon>
       </div>
       <div className="">
         <h1 className="text-center text-42 font-poppins mb-4 text-success">
           We have received your information.
         </h1>
         <p className="text-center text-16 leading-24 font-poppins">
           please Login
         </p>
         <Button 
           variant="outline-dark" 
           className='d-block mx-auto my-4 font-poppins'
           onClick={() => {
             props.onHide(); 
             navigate('/')
           }}
         >
           Back to home page
         </Button>
       </div>
       </>)
      }
    </Modal>
  )
}

export default InformModal
