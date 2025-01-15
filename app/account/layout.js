import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="md:grid md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr] h-full gap-4 md:gap-10 lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
