import { format } from "date-fns";

export function formatDate(timestamp: number) {
  const currentDate = new Date(timestamp * 1000);
  return format(currentDate, "PP");
}