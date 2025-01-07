import React from "react";


export const ModalEdit = () => {
    return (
        <div className="modal-edit">
            <div className="modal-edit__content">
                <div className="modal-edit__content--title">
                    <h2 className="text-2xl font-bold">Edit Course</h2>
                </div>
                <div className="modal-edit__content--form">
                    <form action="" method="post">
                        <div className="form-group">
                            <label htmlFor="nombre">Name</label>
                            <input type="text" name="nombre" id="nombre" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precio">Price</label>
                            <input type="text" name="precio" id="precio" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="autor">Author</label>
                            <input type="text" name="autor" id="autor" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="categoria">Category</label>
                            <select name="categoria" id="categoria" className="form-control">
                                <option value="Inglés">Inglés</option>
                                <option value="Matemáticas">Matemáticas</option>
                                <option value="Tecnología">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalEdit;