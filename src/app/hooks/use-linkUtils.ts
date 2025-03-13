const useLinkUtils = () => {
  const getIconName = (platform: string): string => {
    const iconMap: { [key: string]: string } = {
      "Dev.to": "devto",
      "Frontend Mentor": "frontendmentor",
      "Stack Overflow": "stackoverflow",
    };
    return iconMap[platform] || platform.toLowerCase();
  };

  const getPlatformColor = (name: string): string => {
    if (name === null) return "#fff";
    switch (name) {
      case "Github":
        return "#1A1A1A";
      case "Frontend Mentor":
        return "#FFFFFF";
      case "Twitter":
        return "#43B7E9";
      case "LinkedIn":
        return "#2D68FF";
      case "YouTube":
        return "#EE3939";
      case "Facebook":
        return "#2442AC";
      case "Twitch":
        return "#EE3FC8";
      case "Dev.to":
        return "#333333";
      case "Codewars":
        return "#8A1A50";
      case "freeCodeCamp":
        return "#302267";
      case "GitLab":
        return "#EB4925";
      case "Hashnode":
        return "#0330D1";
      case "Stack Overflow":
        return "#EC7100";
      default:
        return "transparent";
    }
  };

  return { getIconName, getPlatformColor };
};

export default useLinkUtils;
