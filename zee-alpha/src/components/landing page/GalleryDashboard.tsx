import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Plus,
  Pencil,
  Trash2,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface GalleryDashboardProps {
  onNavigate?: (page: string) => void;
}

interface GalleryImage {
  id: string;
  url: string;
  name: string;
  description: string;
  category: string;
  dateAdded: string;
}

const categories = [
  "Campus & Facilities",
  "Students & Learning",
  "Events & Activities",
  "Sports",
  "Arts & Culture",
  "Staff & Team",
  "Other",
];

export function GalleryDashboard({ onNavigate }: GalleryDashboardProps) {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: "1",
      url: "/images/boy in green waistcoat.jpeg",
      name: "School Campus",
      description: "Beautiful view of our main campus building",
      category: "Campus & Facilities",
      dateAdded: new Date().toISOString().split("T")[0],
    },
    {
      id: "2",
      url: "/images/class picture with teachers.jpeg",
      name: "Students in Class",
      description: "Students engaged in interactive learning",
      category: "Students & Learning",
      dateAdded: new Date().toISOString().split("T")[0],
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState<string | null>(null);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Form state
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    description: "",
    category: "Campus & Facilities",
  });

  const resetForm = () => {
    setFormData({
      url: "",
      name: "",
      description: "",
      category: "Campus & Facilities",
    });
  };

  const handleAddImage = () => {
    if (!formData.url || !formData.name) {
      alert("Please provide at least a URL and name for the image");
      return;
    }

    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: formData.url,
      name: formData.name,
      description: formData.description,
      category: formData.category,
      dateAdded: new Date().toISOString().split("T")[0],
    };

    setImages([...images, newImage]);
    setIsAddDialogOpen(false);
    resetForm();
  };

  const handleEditImage = () => {
    if (!editingImage) return;

    setImages(
      images.map((img) =>
        img.id === editingImage.id
          ? {
              ...editingImage,
              url: formData.url,
              name: formData.name,
              description: formData.description,
              category: formData.category,
            }
          : img
      )
    );
    setIsEditDialogOpen(false);
    setEditingImage(null);
    resetForm();
  };

  const handleDeleteImage = () => {
    if (!deleteImageId) return;
    setImages(images.filter((img) => img.id !== deleteImageId));
    setDeleteImageId(null);
  };

  const openEditDialog = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData({
      url: image.url,
      name: image.name,
      description: image.description,
      category: image.category,
    });
    setIsEditDialogOpen(true);
  };

  const filteredImages =
    filterCategory === "all"
      ? images
      : images.filter((img) => img.category === filterCategory);

  return (
    <section id="gallery" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => onNavigate && onNavigate("home")}
            className="gap-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl mb-4">Gallery Management</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Manage your school's photo gallery. Add, edit, or remove images to
            showcase your vibrant community.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Label htmlFor="category-filter">Filter by category:</Label>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger id="category-filter" className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Add Image Dialog */}
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus size={20} className="mr-2" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Image</DialogTitle>
                <DialogDescription>
                  Add a new image to your gallery. Provide an image URL and
                  details.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="add-url">Image URL *</Label>
                  <Input
                    id="add-url"
                    placeholder="https://example.com/image.jpg"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="add-name">Image Name *</Label>
                  <Input
                    id="add-name"
                    placeholder="e.g., School Building"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="add-description">Description</Label>
                  <Textarea
                    id="add-description"
                    placeholder="Brief description of the image"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="add-category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger id="add-category">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAddDialogOpen(false);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={handleAddImage}
                >
                  Add Image
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Image Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredImages.length} of {images.length} images
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <Card className="p-12 text-center">
            <ImageIcon
              className="mx-auto mb-4 text-muted-foreground"
              size={48}
            />
            <h3 className="mb-2">No Images Found</h3>
            <p className="text-muted-foreground mb-6">
              {filterCategory === "all"
                ? "Start by adding your first image to the gallery"
                : "No images found in this category"}
            </p>
            {filterCategory === "all" && (
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => setIsAddDialogOpen(true)}
              >
                <Plus size={20} className="mr-2" />
                Add Your First Image
              </Button>
            )}
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group">
                <div className="aspect-square relative bg-gray-200">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => openEditDialog(image)}
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setDeleteImageId(image.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="mb-2">{image.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {image.description || "No description"}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="px-2 py-1 bg-red-100 text-red-600 rounded">
                      {image.category}
                    </span>
                    <span className="text-muted-foreground">
                      {image.dateAdded}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Image</DialogTitle>
              <DialogDescription>
                Update the image details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-url">Image URL *</Label>
                <Input
                  id="edit-url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.url}
                  onChange={(e) =>
                    setFormData({ ...formData, url: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Image Name *</Label>
                <Input
                  id="edit-name"
                  placeholder="e.g., School Building"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  placeholder="Brief description of the image"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger id="edit-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false);
                  setEditingImage(null);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={handleEditImage}
              >
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog
          open={deleteImageId !== null}
          onOpenChange={(open) => !open && setDeleteImageId(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                image from your gallery.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-700"
                onClick={handleDeleteImage}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}
