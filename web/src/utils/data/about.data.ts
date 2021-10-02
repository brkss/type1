import { IAboutSection } from "../types/About";
import ss from "../../assets/ss.png";
import AppleHealthImage from "../../assets/apple_health_final.jpg";
import RecordImage from "../../assets/records_final.jpg";
import DemonImage from "../../assets/demons_final.jpg";
import MLImage from "../../assets/ml_final.jpg";

export const ABOUT_SECTIONS: IAboutSection[] = [
  {
    title: "Better Records.",
    text: "Records help you pinpoint  and understand all the important factors that affect your chronic condition . Having this larger picture lets you sort out what leads to unwanted changes in your health and overall control are determined by how well your medecations is matched to these lifestyle factors.",
    image: RecordImage,
  },
  {
    title: "Active Demons",
    text: "Demons are made to make your life easier, by reminding you to take your medicine, eat, sleep, mesure your blood glucose and more.",
    image: DemonImage,
  },
  {
    title: "Machine learning.",
    text: "Machine learning is used to help you prevent or expect unexpected health changes to control and treat them especially the dangerous ones that need immediate treatment like low blood sugar.",
    image: MLImage,
  },
  {
    title: "GCM Compatible.",
    text: "Apple Health App helps Open CC to access your blood glucose records saved from your glucose monitors like Dexcom, Open CC support also manual typing and direct read from NFC sensors such as Freestyle Libre.",
    image: AppleHealthImage,
  },
];
