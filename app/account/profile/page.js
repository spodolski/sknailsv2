import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);
  return (
    <div>
      <h1 className="text-center font-extrabold text-accent-100 text-4xl mt-2 mb-4">
        Update your guest profile
      </h1>

      <UpdateProfileForm guest={guest}></UpdateProfileForm>
    </div>
  );
}
