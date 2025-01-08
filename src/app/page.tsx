'use client'
import { useEffect, useState } from 'react';
import { getCourses } from '../services/courseService';
import CourseModel from '../models/CourseModel';
import CardCourse from '../components/CardCourse';
import BottomAddCourse from '@/components/bottonAddCourse';
const HomePage = () => {
    const [courses, setCourses] = useState<CourseModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                console.log('Datos cargados en HomePage:', data);
                setCourses(data);
            } catch {
                setError('Error al cargar los cursos');
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    console.log(courses);
    return (
      
      
      <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Lista de Cursos</h1>
      <BottomAddCourse />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CardCourse
            key={course.id}
            name={course.nombre}
            price={course.precio}
            category={course.categoria}
            author={course.autor}
          />
        ))}
      </div>
    </div>
    );
};

export default HomePage;
