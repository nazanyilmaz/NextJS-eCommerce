import { getCurrentUser } from "../actions/getCurrentUser";
import LoginClient from "../components/auth/LoginClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <LoginClient currentUser={currentUser} />
    </div>
  );
};

export default page;
