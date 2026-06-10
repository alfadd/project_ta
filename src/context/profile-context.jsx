import { createContext, useContext, useEffect, useReducer } from "react";

const ProfileContext = createContext();
const ProfileDispatchContext = createContext();

const ProfileReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return {
        ...state,
        ...action.payload,
      };

    default:
      throw Error("Unknown Action Type: " + action.type);
  }
};

export function ProfileProvider({ children }) {
  const [profile, dispatch] = useReducer(
    ProfileReducer,
    JSON.parse(localStorage.getItem("profile")) || {
      fullName: "Bety Ordiga",
      phone: "08389428922",
      email: "bety.orydigai@gmail.com",
      password: "123456"
    }
  );

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  return (
    <ProfileContext.Provider value={profile}>
      <ProfileDispatchContext.Provider value={dispatch}>
        {children}
      </ProfileDispatchContext.Provider>
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}

export function useProfileDispatch() {
  return useContext(ProfileDispatchContext);
}