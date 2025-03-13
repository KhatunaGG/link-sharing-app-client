"use client";
import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../libs/axiosInstance";
import useAccessToken from "../hooks/use-token";
import { LinksDataType, MainContextType } from "../interfaces/interface";

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

  const updateLinkOrder = (newOrder: LinksDataType[]) => {
    setLinkData(newOrder);
  };

  return (
    <MainContext.Provider
      value={{
        getAllLinks,
        linkData,
        length,
        getFilePath,
        src,
        setSrc,
        updateLinkOrder,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
