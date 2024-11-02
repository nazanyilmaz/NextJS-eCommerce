"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineComputer } from "react-icons/md";
import { GiBallerinaShoes, GiPirateCoat, GiSofa } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Heading from "../general/Heading";
import Input from "../general/Input";
import CheckBox from "../general/CheckBox";
import ChoiceInput from "../general/ChoiceInput";
import Button from "../general/Button";
import firebaseApp from "@/libs/firebase";
import { rejects } from "assert";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const router = useRouter();
  const [img, setImg] = useState<File | null>(null);

  const categoryList = [
    {
      name: "computer",
      icon: MdOutlineComputer,
    },
    {
      name: "mobile",
      icon: FaMobileRetro,
    },
    {
      name: "shoes",
      icon: GiBallerinaShoes,
    },
    {
      name: "bag",
      icon: FaShoppingBag,
    },

    {
      name: "coat",
      icon: GiPirateCoat,
    },
    {
      name: "machine",
      icon: CgSmartHomeWashMachine,
    },
    {
      name: "sofa",
      icon: GiSofa,
    },
  ];
  const {
    reset,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      inStock: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("product data", data);
    let uploadedImg = "";

    const handleChange = async () => {
      //toast.success("Image Uploaded");
      try {
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, "images/shopDB.jpg");

        const uploadTask = uploadBytesResumable(storageRef, img);
        await new Promise<void>((resolve, rejects) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              rejects(error); // Reject the promise with the error
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                uploadedImg = downloadURL; // Assign the URL to the variable
                resolve();
              });
            }
          );
        });
      } catch (error) {
        console.log(error);
        toast.error("Failed to upload the image");
      }
    };
    await handleChange();

    let newData = {
      ...data,
      image: uploadedImg,
    };
    axios
      .post("/api/product", newData)
      .then(() => {
        console.log("New Dataa>>>", newData);
        toast.success("Product Created");
        router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("Failed to create product");
        console.log(error);
      });
  };
  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value),
      {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      };
  };
  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };
  // console.log("img", img);

  return (
    <div>
      <Heading center text="Create a New Product" />
      <Input
        placeholder="product name"
        type="text"
        id="name"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="product description"
        type="text"
        id="description"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="product brand"
        type="text"
        id="brand"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="product price $"
        type="number"
        id="price"
        register={register}
        errors={errors}
        required
      />
      <CheckBox id="inStock" label="InStock?" register={register} />
      <div className="flex flex-wrap gap-3 ">
        {categoryList.map((cat, index) => (
          <ChoiceInput
            key={index}
            selected={category == cat.name}
            text={cat.name}
            icon={cat.icon}
            onClick={(category) => {
              setCustomValue("category", category);
            }}
          />
        ))}
      </div>
      <input type="file" onChange={onChangeFunc} className="my-3" />
      <Button text="Create" onClick={handleSubmit(onSubmit)} type="submit" />
    </div>
  );
};

export default CreateForm;
