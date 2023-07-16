import AppFrame from "@components/re_usables/app_frame/AppFrame";
import ResourceCard from "@components/re_usables/resource_card/ResourceCard";
import { getAllResources } from "@network/functions";
import Link from "next/link";

export default async function Resources({ searchParams }: any) {
  const RESOURCES = await getAllResources(searchParams?.page ?? 1);
  const ALL_RESOURCES = RESOURCES.data;
  const { pagination: PAGINATION } = RESOURCES.meta;
  return (
    <AppFrame>
      <div className="flex flex-col gap-10 px-4 py-10">
        <h1 className="text-lg">Resources ({PAGINATION.total})</h1>
        {/* <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id="books"
              className="accent-[#FFA800] w-15 h-15 scale-150"
            />
            <label htmlFor="books" className="cursor-pointer">
              Books
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id="podcasts"
              className="accent-[#FFA800] w-15 h-15 scale-150"
            />
            <label htmlFor="podcasts" className="cursor-pointer">
              Podcasts
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id="websites"
              className="accent-[#FFA800] w-15 h-15 scale-150"
            />
            <label htmlFor="websites" className="cursor-pointer">
              Websites
            </label>
          </div>
        </div> */}
        <div className="flex flex-col flex-wrap gap-10 md:flex-row">
          {ALL_RESOURCES.map((resource: any) => {
            const { id } = resource;
            const { title, link, featuredImageUrl } = resource.attributes;
            return (
              <ResourceCard
                key={id}
                link={link}
                image={featuredImageUrl}
                title={title}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-4">
          {PAGINATION.page > 1 && (
            <Link href={`/resources?page=${PAGINATION.page - 1}`}>prev</Link>
          )}
          {PAGINATION.page} of {PAGINATION.pageCount}
          {PAGINATION.page < PAGINATION.pageCount && (
            <Link href={`/resources?page=${PAGINATION.page + 1}`}>next</Link>
          )}
        </div>
      </div>
    </AppFrame>
  );
}
