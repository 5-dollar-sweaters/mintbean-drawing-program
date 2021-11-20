import { useEffect } from "react";
import { useRouter } from "next/router";
import PenSVG from "./PenSVG";
import { useUser } from "@auth0/nextjs-auth0";
import { useStore } from "lib/zustand/store";
import User from "components/Auth/User";
import { fetcher } from "lib/swr/fetcher";
import useSWR from "swr";

const Nav = () => {
  const { user } = useUser();
  const { activeUser, setActiveUser } = useStore();
  const router = useRouter();
  const { data, error, mutate } = useSWR(user && `/api/user`, fetcher);

  useEffect(() => {
    user && setActiveUser(data);
  }, [data]);

  const handleLogIn = async () => {
    try {
      await router.push("/api/auth/login");
      mutate();

      console.log("logged in");
    } catch (error) {
      console.log(error);
    } finally {
      console.log(user);
    }
  };

  return (
    <div className="flex flex-row items-center w-full my-3 justify-evenly h-9">
      <div className="flex flex-row items-center justify-center space-x-5">
        <PenSVG />
        <button>
          <a href="#About">About Us</a>
        </button>
      </div>

      <div
        onClick={() => router.push("/draw")}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <div className="text-lg font-fancy md:text-xl lg:text-4xl">
          Drawing App
        </div>
        <div className="text-xs ">by $5sweater</div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-5">
        <a
          href="https://github.com/5-dollar-sweaters/mintbean-drawing-program"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>

        {!user ? (
          <button onClick={() => handleLogIn()}>LogIn</button>
        ) : !data ? (
          <div>...loading</div>
        ) : (
          <>
            <div>
              <User userFromNav={activeUser} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
