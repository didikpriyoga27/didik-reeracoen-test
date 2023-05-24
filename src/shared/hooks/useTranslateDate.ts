import { useCallback } from "react";

export default function useTranslateDate() {
  const translateDate = useCallback((date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    const seconds = String(dateObj.getSeconds()).padStart(2, "0");

    const humanDate = `${year} ${month} ${day} ${hours}:${minutes}:${seconds}`;

    return humanDate;
  }, []);

  return { translateDate };
}
