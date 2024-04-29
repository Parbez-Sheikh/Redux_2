import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const About = () => {

    const items=useSelector((state)=>state.parbez.value)

   
    return (
        <div className="bg-amber-400 py-10">
        <h2 className="text-center text-4xl font-bold mb-10">About Page</h2>
        <div className="container mx-auto flex justify-between flex-wrap mb-4">
            {
                items.map((item,i)=>{
                    return(
                        <div key={i} className="w-[22%] h-[400px]">
                            <img className=" h-[300px] rounded-xl" src={item.image} alt="picture" />
                            <h2>{item.title}</h2>
                            <Link to={`/details/${item.id}`} className="bg-red-600 py-2 px-5 rounded-2xl">details{item.id}</Link>
                        </div>
                    )
                })
            }

        </div>
       </div>
    );
};

export default About;