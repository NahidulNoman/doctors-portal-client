import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data: allUser = [] , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });
//   console.log(allUser);

  // put api from server site
  const handlerMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
        method : 'PUT'
    })
    .then(res => res.json())
    .then(data => {
       if(data.modifiedCount) {
        toast.success('Make Admin Successfully!');
        refetch();
       }
    })
  };

  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">All User</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user?.role !== 'admin' && <button 
                    onClick={()=>handlerMakeAdmin(user._id)}
                    className="btn btn-primary btn-xs">Admin</button>
                  }
                </td>
                <td>
                  <button className="btn btn-accent btn-xs">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
