"use client";
import { useActionState } from "react";
import { createProductAction, FormState } from "./actions";

const initialState: FormState = {
  errors: {},
};
const ProductsDBCreatePage = () => {
  const [state, formAction, isPending] = useActionState(
    createProductAction,
    initialState
  );
  return (
    <form action={formAction} className="p-4 space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          name="title"
          className="w-full border p-2 rounded text-black"
          required
        />
        {state.errors.title && (
          <p className="text-red-600 text-sm mt-1">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          name="price"
          type="number"
          step="0.01"
          min="0"
          className="w-full border p-2 rounded text-black"
          required
        />
        {state.errors.price && (
          <p className="text-red-600 text-sm mt-1">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          rows={4}
          className="w-full border p-2 rounded text-black"
        />
        {state.errors.description && (
          <p className="text-red-600 text-sm mt-1">
            {state.errors.description}
          </p>
        )}
      </div>
      {state.errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {state.errors.general}
        </div>
      )}
      {/* <SubmitButton /> */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isPending ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};
export default ProductsDBCreatePage;
