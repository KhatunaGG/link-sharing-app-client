import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/libs/axiosInstance";
import useAccessToken from "@/app/hooks/use-token";

export type LinksDataType = {
  name: string;
  link: string;
  _id: string;
  color?: string;
};

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
        // setLinkData((prevLinks) => [...prevLinks, res.data]);
        setLength(res.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    getAllLinks();
  }, [accessToken]);

  return { linkData, length, getAllLinks };
};

export default useLinkData;
