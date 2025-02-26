// import { useEffect, useState } from "react";
// import { axiosInstance } from "@/app/libs/axiosInstance";
// import useAccessToken from "@/app/hooks/use-token";

// export type LinksDataType = {
//   name: string;
//   link: string;
//   _id: string;
//   color?: string;
// };

// const useLinkData = () => {
//   const [linkData, setLinkData] = useState<LinksDataType[]>([]);
//   const [length, setLength] = useState(0);
//   const { accessToken } = useAccessToken();
//   const [modifiedData, setModifiedData] = useState<LinksDataType[]>([]);

//   const getAllLinks = async () => {
//     if (!accessToken) return;

//     try {
//       const res = await axiosInstance.get("link", {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });

//       if (res.status >= 200 && res.status <= 204) {
//         setLinkData(res.data);
//         setLength(res.data.length);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getPlatformColor = (name: string): string => {
//     if (name === null) return "#fff";
//     switch (name) {
//       case "Github":
//         return "#1A1A1A";
//       case "Frontend Mentor":
//         return "#FFFFFF";
//       case "Twitter":
//         return "#43B7E9";
//       case "LinkedIn":
//         return "#2D68FF";
//       case "YouTube":
//         return "#EE3939";
//       case "Facebook":
//         return "#2442AC";
//       case "Twitch":
//         return "#EE3FC8";
//       case "Dev.to":
//         return "#333333";
//       case "Codewars":
//         return "#8A1A50";
//       case "freeCodeCamp":
//         return "#302267";
//       case "GitLab":
//         return "#EB4925";
//       case "Hashnode":
//         return "#0330D1";
//       case "Stack Overflow":
//         return "#EC7100";
//       default:
//         return "transparent";
//     }
//   };

//   useEffect(() => {
//     const updatedModifiedData = linkData
//       .slice(-5)
//       .map((link) => ({
//         ...link,
//         color: getPlatformColor(link.name),
//       }));
//     setModifiedData(updatedModifiedData);
//   }, [linkData]);

//   useEffect(() => {
//     getAllLinks();
//   }, [accessToken]);

//   return { linkData, modifiedData, length, getAllLinks };
// };

// export default useLinkData;


//*********************************************************************************** */


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
        setLength(res.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllLinks();
  }, [accessToken]);

  console.log(linkData, "linkdata from HOOK")


  return { linkData, length, getAllLinks  };
};

export default useLinkData;
