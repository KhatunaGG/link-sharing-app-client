"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { axiosInstance } from "../libs/axiosInstance";

import useAccessToken from "../hooks/use-token";

export type LinksDataType = {
  name: string;
  link: string;
  _id: string;
  color?: string;
  createdAt: string;
};

export type MainContextType = {
  getAllLinks: () => Promise<void>;
  linkData: LinksDataType[];
  length: number;
  getFilePath: (v: string) => void;
  src: string | undefined;
  setSrc: Dispatch<SetStateAction<string>>;
};

export const MainContext = createContext<MainContextType | null>(null);

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkData, setLinkData] = useState<LinksDataType[]>([]);
  const [length, setLength] = useState(0);
  const { accessToken, user } = useAccessToken();
  const [src, setSrc] = useState("");

  const getAllLinks = async () => {
    if (!accessToken) return;

    try {
      const res = await axiosInstance.get("link", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (res.status >= 200 && res.status <= 204) {
        setLinkData([...res.data]);
        setLength(res.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLinks();
  }, [accessToken]);

  // const getFilePath = async (fileId: string) => {
  //   if (!accessToken) return;
  //   try {
  //     const res = await axiosInstance.post(
  //       "auth/getImage",
  //       { fileId },
  //       {
  //         headers: { Authorization: `Bearer ${accessToken}` },
  //       }
  //     );
  //     if (res.status >= 200 && res.status <= 204) {
  //       const base64Image = res.data;
  //       setSrc(base64Image);
  //     }
  //   } catch (e) {
  //     console.log(e);

  //     setSrc("");
  //   }
  // };

  const getFilePath = async (fileId: string) => {
    if (!accessToken) return;
    if (!fileId) return;

    try {
      if (fileId) {
        const res = await axiosInstance.post(
          "auth/getImage",
          { fileId },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        if (res.status >= 200 && res.status <= 204) {
          const base64Image = res.data;
          setSrc(base64Image);
        }
      } else {
        setSrc("");
      }
    } catch (e) {
      console.log("Error while fetching image:", e);
      setSrc("");
    }
  };

  useEffect(() => {
    if (user?.filePath) {
      getFilePath(user?.filePath || "");
    }
  }, [user?.filePath]);

  return (
    <MainContext.Provider
      value={{ getAllLinks, linkData, length, getFilePath, src, setSrc }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
