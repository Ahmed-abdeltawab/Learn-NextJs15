import Modal from "@/components/modal";

import { pharaonicImages } from "../../photos";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const selectedPhoto = pharaonicImages.find(
    (photo) => photo.id === parseInt(id)
  );

  return (
    <Modal>
      <div className="bg-white p-4 rounded-lg max-w-md">
        {selectedPhoto ? (
          <>
            <h2 className="text-xl font-bold mb-2">{selectedPhoto.title}</h2>
            <Image
              src={selectedPhoto.imgUrl}
              alt={selectedPhoto.title}
              className="w-full h-auto mb-2 rounded"
              width={500}
              height={300}
            />
            <p>{selectedPhoto.desc}</p>
          </>
        ) : (
          <p>Photo not found.</p>
        )}
      </div>
    </Modal>
  );
}
