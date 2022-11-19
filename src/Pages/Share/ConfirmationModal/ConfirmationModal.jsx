import React from "react";

const ConfirmationModal = ({title, message,successButtonName,modalData,closeModal,successAction}) => {
  return (
    <>
      {/* The button to open modal */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
           {message}
          </p>
          <div className="modal-action">
            <label htmlFor="confirmation"
            onClick={() => successAction(modalData)} 
            className="btn btn-primary">
            {successButtonName}
            </label>
            <button onClick={closeModal} className='btn btn-outline'>cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
