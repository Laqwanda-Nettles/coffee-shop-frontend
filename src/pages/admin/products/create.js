import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const createUrl = `${BACKEND_URL}/products`;

export default function CreateProduct() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);

  const { token } = useAuth();

  //form submit function
  function handleSubmit(e) {
    e.preventDefault();

    setAlertMessage("Submitting product...");
    setAlertType("alert-info");

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("description", description.trim());
    formData.append("category", category.trim());
    formData.append("price", parseFloat(price));
    formData.append("stock", parseInt(stock, 10));
    if (image) {
      formData.append("image", image); // Attach the image file
    }

    console.log("FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    createProduct(formData);
  }

  async function createProduct(product) {
    console.table(product);

    try {
      const response = await fetch(createUrl, {
        method: "POST",
        body: product,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.message ||
          `Failed to create product. Server responded with: ${response.status}`;
        setAlertMessage(errorMessage);
        setAlertType("alert-error");
        return;
      }

      const data = await response.json();

      if (data._id) {
        setAlertMessage("Product successfully created!");
        setAlertType("alert-success");
        router.push("/admin/products");
      }
    } catch (error) {
      console.error("Error creating product: ", error);
      setAlertMessage("An error occurred while creating the product.");
      setAlertType("alert-error");
    } finally {
      setTimeout(() => {
        setAlertMessage(null);
        setAlertType(null);
      }, 5000);
    }
  }

  return (
    <>
      <Navbar title={"Jazzed Up Coffee"} />
      {alertMessage && (
        <div className={`alert ${alertType} m-4`}>
          <span className="text-lg font-semibold">{alertMessage}</span>
        </div>
      )}
      <h1 className="text-primary text-center text-4xl font-bold m-4">
        Create a Product:
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

          <Button label={"Create Product"} />
        </form>
      </div>

      <Footer info={"Jazzed Up Coffee"} />
    </>
  );
}
