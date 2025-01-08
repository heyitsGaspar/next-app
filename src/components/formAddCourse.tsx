import React, { useState } from "react";

type AddCourseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddCourse: (course: {
    nombre: string;
    precio: string;
    categoria: "Inglés" | "Matemáticas" | "Tecnología";
    autor: string;
  }) => void;
};

const AddCourseModal: React.FC<AddCourseModalProps> = ({ isOpen, onClose, onAddCourse }) => {
  const [course, setCourse] = useState<{
    nombre: string;
    precio: string;
    categoria: "Inglés" | "Matemáticas" | "Tecnología";
    autor: string;
  }>({
    nombre: "",
    precio: "",
    categoria: "Inglés",
    autor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCourse(course);
    onClose(); // Cierra el modal después de enviar el curso
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Curso</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del curso"
            value={course.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="precio"
            placeholder="Precio"
            value={course.precio}
            onChange={handleChange}
            required
          />
          <select name="categoria" value={course.categoria} onChange={handleChange}>
            <option value="Inglés">Inglés</option>
            <option value="Matemáticas">Matemáticas</option>
            <option value="Tecnología">Tecnología</option>
          </select>
          <input
            type="text"
            name="autor"
            placeholder="Autor"
            value={course.autor}
            onChange={handleChange}
            required
          />
          <button type="submit">Agregar</button>
        </form>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AddCourseModal;
