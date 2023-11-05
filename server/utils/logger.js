import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import { format } from "date-fns";
export const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};
const currentFilePath = fileURLToPath(import.meta.url);
const parentFolder = path.join(dirname(currentFilePath), "../");
// Get the current date in the desired format (e.g., "YYYY-MM-DD")
const currentDate = formatDate(new Date());
// Dynamically generate the log file name based on the current date
const logFile = path.join(parentFolder, "logs", `app_${currentDate}.log`);

// Define the log file location and log format
// const logFile = path.join(__dirname, "logs", "app.log");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: logFile }), // Use the File transport to store logs in a local file
  ],
});

export default logger;
