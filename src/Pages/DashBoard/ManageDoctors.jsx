import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../Share/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    };

  const { data: doctors , refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://doctors-portal-server-liart.vercel.app/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
//   console.log(doctors);

  const handleDeleteDoctor = doctor => {
    // console.log(id);
    fetch(`https://doctors-portal-server-liart.vercel.app/doctors/${doctor._id}`, {
        method : 'delete',
        headers : {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
        }})
        .then(res => res.json())
        .then(data => {
                    if(data.deletedCount > 0){
                    toast.success('Doctor delete successfully.')
                    refetch();
                }
        })
  }

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-4">
        Manage Doctors are {doctors?.length}
      </h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
              </th>
              <th>AVATAR</th>
              <th>NAME</th>
              <th>SPECIALTY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
                doctors?.map((doctor,i) => <tr key={doctor._id}>
                    <th>
                      <label>
                        {i+1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={doctor.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {doctor.doctorName}
                    </td>
                    <td>{doctor.specialty}</td>
                    <th>
                      <label 
                      htmlFor="confirmation"
                      onClick={() => setDeletingDoctor(doctor)}
                      className="btn btn-primary bg-red-600 text-white btn-xs">DELETE</label>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingDoctor.doctorName}. It cannot be undone.`}
        successAction = {handleDeleteDoctor}
        successButtonName="Delete"
        modalData = {deletingDoctor}
        closeModal = {closeModal}
        ></ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
