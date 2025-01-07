import React from "react";
import BottomEdit from "./bottomEdit";
import  BottomDelete  from "./bottomDelete";
interface CardCourseProps { 
  name: string;
  price: string;
  category: string;
  author: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CardCourse: React.FC<CardCourseProps> = ({ name, price, category, author}) => {
  return (
    <div className="card-course p-4 border rounded-lg shadow-lg bg-white text-gray-800">
      <h2 className="text-xl font-bold mb-2 text-red-500">{name}</h2>
      <p className="text-black mb-1">
        <span className="font-semibold">Price:</span> {price}
      </p>
      <p className="text-black mb-1">
        <span className="font-semibold">Category:</span> {category}
      </p>
      <p className="text-black">
        <span className="font-semibold">Author:</span> {author}
      </p>
       <div className="bottoms flex justify-end mt-4 p-2 space-x-2">
        <BottomEdit />

        <BottomDelete />
        </div>
        
    </div>
  );
};

export default CardCourse;
