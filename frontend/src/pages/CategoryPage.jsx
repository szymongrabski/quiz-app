import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";

const CategoryPage = () => {
    const { category_id } = useParams();
    return (
        <div>
            <Header/>
            <div className="flex mt-[20%] justify-center">
                <Link to={`/${category_id}/quiz`} className="text-white bg-purple-700 py-2 px-4 rounded-lg text-center block hover:bg-purple-800 hover:shadow-md">
                    Start quiz!
                </Link>
            </div>
        </div>
    );
};

export default CategoryPage;
