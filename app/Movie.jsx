import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, vote_average, vote_count }) {
    const imagePath = 'https://image.tmdb.org/t/p/original/';

    return (
        <div>
            <Link href={`/${id}`}>
                <Image className="rounded-lg" src={imagePath + poster_path} width={360} height={360} alt={title} />
            </Link>
            <h1>{title}</h1>
            <h2>
                <span className="text-sm m-1">Rating: {vote_average}</span>
                of 
                <span className="text-sm m-1">{vote_count} voters.</span>
            </h2>
        </div>
    )
}