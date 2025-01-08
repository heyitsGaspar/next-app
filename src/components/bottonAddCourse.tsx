import React, {useState}from 'react';
import AddCourseModal from './formAddCourse';   
import { createCourse } from '@/services/courseService';
import CourseModel from '@/models/CourseModel';

const BottomAddCourse: React.FC = () => {
    const [isOpen, setIsModalOpen] = useState(false);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }


    const handleAddCourse = async (course: Omit<CourseModel, "id">) => {
  try {
    const newCourse = await createCourse({ ...course, id: '' }); // Esto funciona porque `createCourse` no requiere `id`.
    console.log("Curso agregado al servidor:", newCourse);
    alert("Curso agregado correctamente.");
  } catch (error) {
    console.error("Error al agregar el curso:", error);
    alert("Hubo un error al agregar el curso.");
  }
};

    // const handleAddCourse = async (course: {
    //     id: string;
    //     nombre: string;
    //     precio: string;
    //     categoria: "Inglés" | "Matemáticas" | "Tecnología";
    //     autor: string;
    //   }) => {
    //     try {
    //       const newCourse: CourseModel = await createCourse(course);
    //       console.log("Curso agregado al servidor:", newCourse);
    //       alert("Curso agregado correctamente.");
    //     } catch (error) {
    //       console.error("Error al agregar el curso:", error);
    //       alert("Hubo un error al agregar el curso.");
    //     }
    //   };
    
    return (
        <div>
            <button 
            onClick={handleOpenModal}
            className='bottom-add__button bottom-add__button--add bg-green-500 p-2 rounded-lg'>
            Agregar curso
            </button>

            <AddCourseModal
            isOpen={isOpen}
            onClose={handleCloseModal}
            onAddCourse={handleAddCourse}
        />
        </div>
    )
    

}

export default BottomAddCourse;