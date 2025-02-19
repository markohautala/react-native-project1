import { Client, Account, Avatars, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";  // * means import everything from the module
import { openAuthSessionAsync } from 'expo-web-browser';

export const config = {
  platform: "com.JSM_PEAKPROPERTIES",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)  // ! is used to tell TypeScript that the value is here
  .setPlatform(config.platform!)
  .setProject(config.projectId!);

// create a avatar instance
export const avatar = new Avatars(client);
// create a account
export const account = new Account(client);

// create a authentication instance
export async function login() {
  try {
    const redirectUri = Linking.createURL("/");
    const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);
    if (!response) throw new Error("Create OAuth2 token failed");

    const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);
    if(browserResult.type !== "success") throw new Error("Create OAuth2 token failed");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?. toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Create OAuth2 token failed");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create a session");
    return true;

  } catch (error) {
    console.error(error);
    return false;

  }
}

// create logout function
export async function logout() {
  try {

    await account.deleteSession("current");
    return true;

  } catch (error) {

    console.error(error);
    return false;

  }
}

// get the user function

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString()
      };
    }

    return null;

  } catch (error) {
    console.error(error);
    return null;
  }
}
