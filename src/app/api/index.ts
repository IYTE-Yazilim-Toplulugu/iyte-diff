import { PdfDocument, PdfType } from "@/models/Pdf";
import { User } from "@/models/User";
import { VideoLink, VideoLinkType } from "@/models/VideoLink";
import axios from "axios";



const baseUrl = "http://localhost:8080"
export const getAllUsers : User[] | any = async () => {
    const res = await axios.get(`${baseUrl}/user/getAllUsers`);
    return res.data;
}


export const getStudents : User[] | any = async() => {
    const res = await axios.get(`${baseUrl}/user/getStudents`);
    return res.data;
}

export const createUser : (formData: FormData) => Promise<User> = 
async (formData : FormData) => {
  const res = await axios.post(`${baseUrl}/user/addUser`, formData);
  return res.data as User;
}

export const getInstructors : User[] | any = async() => {
    const res = await axios.get(`${baseUrl}/user/getInstructors`);
    return res.data;
}

export const addVideoLink : VideoLink | any = async ({ name, url, type, senderId } : { name: string, url: string, type: VideoLinkType, senderId: number}) => {
    const res = await axios.post(`${baseUrl}/video/addLink`, {
        "name" : name,
        "url" : url,
        "videoType" : type,
        "senderId" : senderId
    });
    
    return res.data;
}


export const addPdf = async ({ fileName, pdf, id } : {fileName : string; pdf: File, id: number}) => {
    const res = await axios.post(`${baseUrl}/pdf/addPdfDoc`, { 
        "file" : pdf, 
        "name" : fileName, 
        "type" : "BOOK", 
        "senderId": id
    });
    console.log(res.data);
}




const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/pdf';

export const getPdfsByType = async (type: PdfType): Promise<PdfDocument[]> => {
  try {
    const response = await axios.get<PdfDocument[]>(`${API_BASE_URL}/pdfs`, {
      params: { type },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching PDFs:', error);
    throw error;
  }
};

export const downloadPdf = async (id: number, name: string): Promise<void> => {
  try {
    const response = await axios.get<ArrayBuffer>(`${API_BASE_URL}/download/${id}`, {
      responseType: 'arraybuffer',
    });
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${name}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  } catch (error) {
    console.error('Error downloading PDF:', error);
    throw error;
  }
};