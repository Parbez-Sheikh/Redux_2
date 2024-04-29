import { useLoaderData } from "react-router-dom";


const Details = () => {

    const data=useLoaderData()
    console.log(data)

    return (
        <div className="w-[30%] mx-auto">
            <img  src={data.image} alt="image" />
            <h2>{data.title}</h2>
        </div>
    );
};

export default Details;