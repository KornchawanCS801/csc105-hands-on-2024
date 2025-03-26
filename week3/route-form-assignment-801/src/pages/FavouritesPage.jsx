import React from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function FavouritesPage() {

  const navigate = useNavigate();

  const schema = z.object({
    number: z.coerce
      .number()
      .min(1, { message: "Number must be at least 1" })
      .max(100, { message: "Number must be at most 100" }),
      q: z.enum(["love", "like"], { message: "Select either 'love' or 'like'" }),
      size: z.enum(["small", "medium", "large"], { message: "Select a valid size" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    navigate(`/favorite/${data.number}?q=${data.q}&size=${data.size}`);
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Favourites Page</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Number:</label>
            <input
              type="number"
              {...register("number", { valueAsNumber: true })}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Q:</label>
            <select {...register("q")} className="border border-gray-300 rounded-lg p-2 w-full">
              <option value="">Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.q && <p className="text-red-500 text-sm">{errors.q.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Size:</label>
            <select {...register("size")} className="border border-gray-300 rounded-lg p-2 w-full">
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-lg w-full py-2 font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default FavouritesPage