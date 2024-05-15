import React, { useEffect, useState } from "react";
import { getAllCategories } from "../utils/quizApi";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(getAllCategories());
    }, []);

    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-cyan-500",
        "bg-teal-500",
        "bg-gray-500",
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold my-4 text-white">Pick a category!</h2>
            <ul className="grid grid-cols-3 gap-4">
                {categories.map((el, index) => (
                    <li key={el.id}>
                        <Link to={`${el.id}`}>
                            <div className={`w-full h-40 ${colors[index % colors.length]} hover:${colors[(index + 1) % colors.length]} rounded-md shadow-md transition duration-300`}>
                                <div className="flex items-center justify-center h-full text-white text-lg">
                                    {el.name}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
