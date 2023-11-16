import { useAuth } from "../Context/ReactAuthContext";

export const UserBanner = () => {
  const { user, Logout } = useAuth();

  const handleClick = async() => {

    try{
        await Logout();
    }catch(err){
        console.log(err);
    }
  }

  return (
    <div className="w-full h-screen bg-indigo-950 flex justify-center items-center">
      <div className="p-5 rounded-lg border border-slate-500">
        <div>
          <h1 className="text-3xl text-white font-bold">Welcome</h1>
          {user ? <p className="text-3xl text-white font-bold">{user.email}</p> : ""}
          <button onClick={handleClick} className="bg-white p-2 w-full text-center mt-3 mb-3 font-bold text-2xl text-indigo-950">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
