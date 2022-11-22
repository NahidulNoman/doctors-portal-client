import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imageHost;
  const navigate = useNavigate();

//   console.log(imageHostKey)
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["appOptionsName"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-liart.vercel.app/appOptionsName");
      const data = await res.json();
      return data;
    },
  });
  //   console.log(specialties)

  /**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/


  const handlerAddDoctor = (data) => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
    //   console.log(data)
      const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
      fetch(url,{
        method : 'POST',
        body : formData
      })
      .then(res => res.json())
      .then(imgData => {
        if(imgData.success){
            // console.log(imgData.data.url);
            const doctor = {
                doctorName: data.name, 
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url
            };
            fetch('https://doctors-portal-server-liart.vercel.app/doctors', {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body : JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(data => {
               if(data.acknowledged){
                toast.success(`Doctor is added successfully`);
                navigate('/dashboard/manageDoctors')
               }
            })
            // console.log(doctor)
        }
      })
    //   console.log(image);

  };
  if (isLoading) {
    return <h3>loading now</h3>;
  }

  return (
    <div className="w-96 p-4">
      <h2 className="text-3xl font-semibold">Add Doctor</h2>
      <form onSubmit={handleSubmit(handlerAddDoctor)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input
            type="text"
            required
            {...register("name", {
              required: "name is required",
            })}
            placeholder="Your name"
            className="input input-bordered w-full"
          />{" "}
          {errors.name && (
            <p className="text-sm text-red-700">{errors.name?.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Email Address</span>
          </label>
          <input
            type="email"
            required
            {...register("email", {
              required: "email is required",
            })}
            placeholder="Email address"
            className="input input-bordered w-full "
          />{" "}
          {errors.email && (
            <p className="text-sm text-red-700">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Add Specialty</span>
            </label>
            <select
              {...register("specialty")}
              className="select select-bordered"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-2">
          <label className="block mb-2 text-sm">Select Image:</label>
          <input
             {...register("image", {
                required: "Photo is Required"
            })}
          required type="file" name="image" />
          {errors.image && <p className='text-red-500'>{errors.image.message}</p>} 
        </div>

        <input
          className="btn btn-accent w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
