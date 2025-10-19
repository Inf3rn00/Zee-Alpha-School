import React from "react";
import { type GalleryImage, type ImageFormData } from "./types";

interface ImageModalProps {
  showImageModal: boolean;
  editingItem: GalleryImage | null;
  imageForm: ImageFormData;
  setImageForm: (form: ImageFormData) => void;
  handleImageFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageSubmit: () => void;
  resetImageForm: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  showImageModal,
  editingItem,
  imageForm,
  setImageForm,
  handleImageFileChange,
  handleImageSubmit,
  resetImageForm,
}) => {
  if (!showImageModal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleImageSubmit();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-100 flex items-center justify-center p-4 "
      onClick={resetImageForm}
    >
      <div
        className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {editingItem ? "Edit Image" : "Upload Image"}
          </h2>

          {!editingItem && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image File *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                required={!editingItem}
              />
            </div>
          )}

          {imageForm.imagePreview && (
            <div className="mb-4">
              <img
                src={imageForm.imagePreview}
                alt="Preview"
                className="w-full h-48 object-contain rounded-lg border border-gray-200"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={imageForm.title}
              onChange={(e) =>
                setImageForm({ ...imageForm, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter image title"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={imageForm.category}
              onChange={(e) =>
                setImageForm({ ...imageForm, category: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>General</option>
              <option>STEM</option>
              <option>Student Life</option>
              <option>Achievements</option>
              <option>Sports</option>
            </select>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={resetImageForm}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!imageForm.title.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200 shadow-md"
            >
              {editingItem ? "Update" : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageModal;
