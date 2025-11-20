import Link from "next/link";
import { pharaonicImages as photos } from "./photos";
import Image from "next/image";

export default function Feed() {
  // can you provide photos data here?

  return (
    <div className="p-4">
      <h1>Photo Feed</h1>
      <div className="grid grid-cols-3  gap-4 mb-4">
        {photos.map((photo) => (
          <Link key={photo.id} href={`/feed/${photo.id}`} className="block ">
            <Image
              src={photo.imgUrl}
              alt={photo.title}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
              // priority // to preload important images
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
