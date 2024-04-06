import * as apiConst from "@/components/apiConst";
import fs from "fs/promises";
import path from "path";

export const getHeaderData = async (language:any) => {
    try {
        const headerFilePath = path.join(process.cwd(), `public/${apiConst.header}`);
        const getHeaderContent = await fs.readFile(headerFilePath, "utf-8");
        const headerContent = JSON.parse(getHeaderContent);
        const headerContentByLanguage = headerContent && headerContent[language] ? headerContent[language] : headerContent['en'];
        return headerContentByLanguage;
    } catch (error) {
        return null;
    }
}

export const getFooterData = async (language:any) => {
    try {
        const footerFilePath = path.join(process.cwd(), `public/${apiConst.footer}`);
        const getFooterContent = await fs.readFile(footerFilePath, "utf-8");
        const footerContent = JSON.parse(getFooterContent);
        const footerContentByLanguage = footerContent && footerContent[language] ? footerContent[language] : footerContent['en'];
        return footerContentByLanguage;
    } catch (error) {
        return null;
    }
}

export const getPageData = async (url:any,language:any) => {
    try {
        const file = path.join(process.cwd(), `public/${url}`);
        const contentRead = await fs.readFile(file, "utf-8");
        const content = JSON.parse(contentRead);
        const contentByLanguage = content && content[language] ? content[language] : content['en'];
        return contentByLanguage;
    } catch (error) {
        return null;
    }
}