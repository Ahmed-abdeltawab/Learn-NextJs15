import Image from "next/image";
import { pharaonicImages } from "../photos";

export default async function PhotoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const selectedPhoto = pharaonicImages.find(
    (photo) => photo.id === parseInt(id)
  );
  return (
    <div className="bg-white p-4 rounded-lg max-w-md">
      {selectedPhoto ? (
        <div>
          <h2 className="text-xl font-bold mb-2">{selectedPhoto.title}</h2>
          <Image
            src={selectedPhoto.imgUrl}
            alt={selectedPhoto.title}
            className="w-full h-auto mb-2 rounded"
            width={500}
            height={300}
            loading="lazy"
          />
          <p>{selectedPhoto.desc}</p>
        </div>
      ) : (
        <p>Photo not found.</p>
      )}
    </div>
  );
}
