import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProducts";
import CreateForm from "@/app/components/admin/CreateForm";
import ManageClient from "@/app/components/admin/ManageClient";
import AuthContainer from "@/app/components/containers/AuthContanier";
import WarningText from "@/app/components/navbar/WarningText";

const Manage = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="💥 Just Admin Page!!! 💥" />;
  }
  return (
    <AuthContainer>
      <ManageClient products={products} />
    </AuthContainer>
  );
};

export default Manage;
