import Image from "next/image";

export default function PhotoDetailView({
  photos = [],
  selectedIndex = 0,
  onClose,
}) {
  const photo = photos[selectedIndex];
  if (!photo) return null;

  return (
    <>
      <section>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </section>

      <section>
        <Image
          src={photo.imageUrl}
          alt="Memory photo"
          width={200}
          height={200}
        />
      </section>
    </>
  );
}
