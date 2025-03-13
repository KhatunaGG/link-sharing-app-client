import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-token";
import { LinksDataType } from "../interfaces/interface";

const useLinkData = () => {
  const [linkData, setLinkData] = useState<LinksDataType[]>([]);
  const [length, setLength] = useState(0);
  const { accessToken } = useAccessToken();

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

  const updatePreviewOrder = (newOrder: LinksDataType[]) => {
    setLinkData(newOrder);
  };

  useEffect(() => {
    getAllLinks();
  }, [accessToken]);

  return { linkData, length, getAllLinks, updatePreviewOrder };
};

export default useLinkData;
