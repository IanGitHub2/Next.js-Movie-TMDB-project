import Image from "next/image";

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = 'https://image.tmdb.org/t/p/original/';
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 0}});
    const res = await data.json();

    return(
        <div>
            {res.production_companies.map((pc) => (
                <h1 key={pc?.id}>{pc?.name}</h1>
            ))}
            <h1 className="p-0 text-6xl">{res?.title}</h1>
            <h3 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md ">{res?.status}</h3>
            <Image className="my-8 w-4/5 rounded-md" src={imagePath + res?.backdrop_path} width={2000} height={2000} alt={res?.title} priority />
            <h2 className="text-2xl my-2">Release: <div className="bg-blue-600 inline-block px-2 rounded-md"> {res?.release_date}</div></h2>
            <h2 className="text-2xl">Runtime: <div className="bg-purple-600 inline-block px-2 rounded-md"> {res?.runtime} minutes </div></h2>
            <h2 className="my-4">
                <span className="m-1">Budget: <div className="bg-red-600 inline-block px-2 rounded-md"> ${res?.budget}</div></span> 
                <span className="m-1">Revenue: <div className="bg-green-600 inline-block px-2 rounded-md"> ${res?.revenue}</div></span>
            </h2>
            <h3 className="my-4"><div className="bg-slate-600 inline-block px-2 rounded-md">{res?.overview}</div></h3>
        </div>
    )
}