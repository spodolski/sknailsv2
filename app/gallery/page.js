import { getGalleryPhotos } from "../_lib/data-service";
import GallerySet from "../_components/GallerySet";

export const metadata = {
  title: "Gallery",
};
export default async function Page() {
  const url =
    "https://utjfaspanvjuqdpwbwwg.supabase.co/storage/v1/object/public/sknailsphotos/";
  const photos = await getGalleryPhotos();
  const imgList = photos.map((img) => ({
    name: img.name,
    url: `${url}${img.name}`,
  }));

  return (
    <div>
      <h1 className="text-center font-extrabold text-accent-100 text-xl md:text-2xl lg:text-4xl mt-2 mb-4">
        Gallery
      </h1>
      <GallerySet imgList={imgList} />
    </div>
  );
}
