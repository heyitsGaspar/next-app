
interface CourseModel {
    id: string;
    nombre: string;
    precio: string;
    autor: string;
    categoria: 'Inglés' | 'Matemáticas' | 'Tecnología';
   
};

export default CourseModel;