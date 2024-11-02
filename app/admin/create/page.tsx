import { getCurrentUser } from "@/app/actions/getCurrentUser";
import CreateForm from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/containers/AuthContanier";
import WarningText from "@/app/components/navbar/WarningText";

const CreateProduct = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="💥 Just Admin Page!!! 💥" />;
  }
  return (
    <AuthContainer>
      <CreateForm />
    </AuthContainer>
  );
};

export default CreateProduct;
