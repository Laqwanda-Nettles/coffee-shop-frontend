import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import Button from "@/components/Button";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function AdminProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { token } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const response = await fetch(`${BACKEND_URL}/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }

        const product = await response.json();
        setName(product.name);
        setDescription(product.description);
        setCategory(product.category);
        setPrice(product.price);
        setStock(product.stock);
      } catch (error) {
        console.error("Error fetching product: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id, token]);

  async function editProduct(productData) {
    console.table(productData);
    try {
      const response = await fetch(`${BACKEND_URL}/products/${id}`, {
        method: "PUT",
        body: productData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          "Failed to edit product. Server responded with: " + response.status
        );
      }

      const data = await response.json();
      console.log("Product updated successfully: ", data);
      alert("Product update successfully!");

      router.push("/admin/products"); //Redirect to products page after edit
    } catch (error) {
      console.error("Error editing product: ", error);
      alert("Failed to update product. Please try again.");
    }
  }

  //form submit function
  function handleSubmit(e) {
    e.preventDefault();

    alert("Form Submitted! Product edited: " + name);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("description", description.trim());
    formData.append("category", category.trim());
    formData.append("price", parseFloat(price));
    formData.append("stock", parseInt(stock, 10));
    if (image) {
      formData.append("image", image);
    }

    editProduct(formData);
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      {loading && <Loading />}
      <h1 className="text-primary text-center text-4xl font-bold m-4">
        Edit Product:
      </h1>
      <div className="bg-neutral-content dark:bg-primary-content p-5 m-5 flex justify-center rounded-xl shadow-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg"
        >
          <label className="flex flex-col gap-2 text-lg font-semibold">
            Name:
            <input
              type="text"
              placeholder="Cold Brew.."
              name="name"
              className="input input-bordered input-md w-full font-normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold">
            Description:
            <textarea
              type="text"
              placeholder="Cold pressed coffee..."
              name="description"
              className="textarea textarea-bordered textarea-md w-full font-normal"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold">
            Category:
            <input
              type="text"
              placeholder="beverages"
              name="category"
              className="input input-bordered input-md w-full font-normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold">
            Price:
            <input
              type="number"
              placeholder="5.99"
              name="price"
              className="input input-bordered input-md w-full font-normal"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold">
            Stock:
            <input
              type="number"
              placeholder="100"
              name="stock"
              className="input input-bordered input-md w-full font-normal"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2 text-lg font-semibold">
            Product Image:
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          <Button label={"Edit Product"} />
        </form>
      </div>
      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
