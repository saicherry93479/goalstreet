import React from "react";

const Modal = ({setShowModal,modalText,error=false}) => {
  return (
    <div id="app" className="fixed z-40 w-screen h-screen overflow-hidden">
     
      <div className="flex items-center justify-center absolute h-screen top-0 left-0" />
      <transition
        name="custom"
        enter-active-class="animate__animated animate__bounceInDown"
        leave-active-class="animate__animated animate__bounceOutUp"
      >
        {/* Modal */}
        <div
          v-if="showModal"
          className="w-11/12 lg:w-full max-w-xl z-20 mx-auto bg-white flex flex-col relative self-center shadow-2xl rounded-md "
        >
          {/* Modal header */}
       
          {/* ./Modal header */}
          {/* Modal body */}
          <div className="p-6 text-center font-bold text-[20px] font-outfit">
            {modalText}
          </div>
          {/* ./Modal body */}
          {/* Modal footer */}
          <div className=" p-6 flex justify-end">
            <button onClick={()=>setShowModal(false)} className="bg-green-400 hover:bg-green-500 focus:outline-none transition px-4 py-2 rounded-md text-white transition duration-500 ease-in-out text-white" style={error?{backgroundColor:'red'}:{}}>
              Close Modal
            </button>
          </div>
          {/* ./Modal footer */}
        </div>
        {/* ./Modal */}
      </transition>
      <transition
        name="custom"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        {/* Overlay */}
        <div
          v-if="showModal"
          className="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-500 ease-in-out transfom z-10"
        />
        {/* ./Overlay */}
      </transition>
    </div>
  );
};

export default Modal;
