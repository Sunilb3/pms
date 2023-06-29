import React, { useState } from "react";
import UserForm from "../../../components/Form/UserForm";

const EditPatient = ({ patient, onCloseEditModal }) => {
  const [showEditModal, setShowEditModal] = useState(true);

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleUpdatePatient = () => {
    closeEditModal();
  };
  return (
    <>
      {showEditModal && (
        <UserForm
          onSubmit={handleUpdatePatient}
          user={patient}
          onCancel={onCloseEditModal}
        />
      )}
    </>
  );
};

export default EditPatient;
