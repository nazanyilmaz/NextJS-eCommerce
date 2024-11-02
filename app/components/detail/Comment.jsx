import { Rating } from "@mui/material";
import Avatar from "../general/Avatar";
import Heading from "../general/Heading";

const Comment = (product) => {
  return (
    <div>
      <Heading text="Reviews" />
      {product?.reviews?.map((item) => (
        <div key={item.id} className="my-4 border p-3 shadow-md">
          <div className="flex gap-4">
            <Avatar image={item?.user?.image} />
            <div className="font-bold text-lg md:text-2xl">{item.name}</div>
          </div>
          <div className="text-sm md:text-lg text-slate-500">{item.review}</div>
          <Rating name="read-only" value={item.rating} readOnly />
        </div>
      ))}
    </div>
  );
};

export default Comment;
