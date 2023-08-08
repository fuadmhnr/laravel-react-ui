import DeleteUserForm from "./Partials/DeleteUserForm";
import UserLayout from "@/Layouts/user-layout";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Container from "@/Components/ui/container";

export default function Edit({
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <>
      <Head title="Profile" />
      <div className="max-w-2xl space-y-6">
        <UpdateProfileInformationForm
          mustVerifyEmail={mustVerifyEmail}
          status={status}
        />
        <UpdatePasswordForm />
        <DeleteUserForm />
      </div>
    </>
  );
}

Edit.layout = (page: React.ReactNode) => <UserLayout children={page} />;
