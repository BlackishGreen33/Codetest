import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const navigate = useNavigate();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then(() => {
    navigate("/home/pojects", { replace: true });
  });
};

export const signInWithGithub = async () => {
  await signInWithRedirect(auth, githubProvider).then(() => {
    navigate("/home/pojects", { replace: true });
  });
};

export const Menus = [
  { id: uuidv4(), name: "项目", uri: "/home/projects/" },
  { id: uuidv4(), name: "收藏", uri: "/home/collection/" },
  { id: uuidv4(), name: "个人", uri: "/home/profile/" },
];

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    navigate("/home/pojects", { replace: true });
  });
};
