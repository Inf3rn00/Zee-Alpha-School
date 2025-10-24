import React from "react";
import { type NewsEvent, type NewsFormData } from "./types";
import { Upload, X } from "lucide-react";

interface NewsModalProps {
  showNewsModal: boolean;
  editingItem: NewsEvent | null;
  newsForm: NewsFormData;
  setNewsForm: (form: NewsFormData) => void;
  handleNewsSubmit: () => void;
  resetNewsForm: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({
  showNewsModal,
  editingItem,
  newsForm,
  setNewsForm,
  handleNewsSubmit,
  resetNewsForm,
}) => {
  if (!showNewsModal) return null;

  // Calculate word count and remaining words
  const wordCount = newsForm.description.trim() ? newsForm.description.trim().split(/\s+/).length : 0;
  const maxWords = 20;
  const wordsLeft = maxWords - wordCount;
  const isOverLimit = wordsLeft < 0;

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewsForm({
          ...newsForm,
          imageFile: file,
          imagePreview: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (): void => {
    setNewsForm({
      ...newsForm,
      imageFile: null,
      imagePreview: null,
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim() ? text.trim().split(/\s+/) : [];
    
    if (words.length <= maxWords) {
      setNewsForm({ ...newsForm, description: text });
    } else {
      // If over limit, truncate to max words
      const truncatedText = words.slice(0, maxWords).join(' ');
      setNewsForm({ ...newsForm, description: truncatedText });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOverLimit) {
      alert("Description exceeds the 30-word limit. Please shorten your description.");
      return;
    }
    handleNewsSubmit();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={resetNewsForm}
    >
      <div
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {editingItem ? "Edit Event" : "Add Event"}
          </h2>

          {/* Image Upload Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Image
            </label>
            {newsForm.imagePreview ? (
              <div className="relative">
                <img
                  src={newsForm.imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                <p className="text-sm text-gray-600 mb-2">
                  Click to upload an image
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 5MB
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={newsForm.title}
                onChange={(e) =>
                  setNewsForm({ ...newsForm, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter event title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={newsForm.category}
                onChange={(e) =>
                  setNewsForm({ ...newsForm, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="General">General</option>
                <option value="Cultural">Cultural</option>
                <option value="Academic">Academic</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={newsForm.date}
                onChange={(e) =>
                  setNewsForm({ ...newsForm, date: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time
              </label>
              <input
                type="text"
                value={newsForm.time}
                onChange={(e) =>
                  setNewsForm({ ...newsForm, time: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="9:00 AM - 3:00 PM"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={newsForm.location}
              onChange={(e) =>
                setNewsForm({ ...newsForm, location: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Event location"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className={`text-xs font-medium ${
                isOverLimit ? 'text-red-600' : 
                wordsLeft <= 10 ? 'text-amber-600' : 'text-gray-500'
              }`}>
                {wordsLeft} word{wordsLeft !== 1 ? 's' : ''} left
              </div>
            </div>
            <textarea
              value={newsForm.description}
              onChange={handleDescriptionChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${
                isOverLimit 
                  ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300'
              }`}
              placeholder="Event description (max 20 words)"
              rows={4}
            />
            {isOverLimit && (
              <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                <X size={12} />
                Description exceeds 20-word limit. Please shorten your text.
              </p>
            )}
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={resetNewsForm}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!newsForm.title.trim() || isOverLimit}
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200 shadow-md"
            >
              {editingItem ? "Update Event" : "Add Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;