import { axiosValidation } from "@/utils/axiosClient";
import CourseModel from "@/models/CourseModel";

export const getCourses = async (): Promise<CourseModel[]> => {
    const response = await axiosValidation.get<CourseModel[]>("/api/courses");
    console.log('Datos cargados en getCourses:', response.data);
    return response.data;
}

export const createCourse = async (course: CourseModel): Promise<CourseModel> => {
    const response = await axiosValidation.post<CourseModel>("/api/courses", course);
    console.log('Datos cargados en createCourse:', response.data);
    return response.data;
}

export const updateCourse = async (course: CourseModel): Promise<CourseModel> => {
    const response = await axiosValidation.put<CourseModel>(`/api/courses/${course.id}`, course);
    console.log('Datos cargados en updateCourse:', response.data);
    return response.data;
}

export const deleteCourse = async (id: number): Promise<void> => {
    await axiosValidation.delete(`/api/courses/${id}`);
}