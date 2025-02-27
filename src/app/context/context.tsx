"use client";
import { createContext, useEffect, useState } from "react";
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
};

export const MainContext = createContext<MainContextType | null>(null);

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkData, setLinkData] = useState<LinksDataType[]>([]);
  const [length, setLength] = useState(0);
  const { accessToken } = useAccessToken();
  console.log(linkData, "linkData from context");

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

  return (
    <MainContext.Provider value={{ getAllLinks, linkData, length }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
