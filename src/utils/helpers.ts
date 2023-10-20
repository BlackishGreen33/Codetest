import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then(() => {
    window.location.reload();
  });
};

export const signInWithGithub = async () => {
  await signInWithRedirect(auth, githubProvider).then(() => {
    window.location.reload();
  });
};

export const Menus = [
  { id: uuidv4(), name: "项目", uri: "/home/projects/" },
  { id: uuidv4(), name: "收藏", uri: "/home/collection/" },
  { id: uuidv4(), name: "个人", uri: "/home/profile/" },
];

export const signOutAction = async () => {
  await auth.signOut().then(() => {
    window.location.reload();
  });
};
