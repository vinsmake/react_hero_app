import { useState } from 'react';


export const useForm = (initialForm = {}) => {

    // Utiliza el estado 'formState' para almacenar los valores del formulario.
    const [formState, setFormState] = useState(initialForm);

    // Define la función 'onInputChange' para manejar eventos de cambio en los campos del formulario.
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // Actualiza el estado del formulario con el nuevo valor del campo.
        setFormState({
            ...formState, // Mantiene los valores anteriores del formulario.
            [name]: value // Actualiza el campo correspondiente con el nuevo valor.
        });
    }

    // Define la función 'onResetForm' para restablecer el formulario a su estado inicial.
    const onResetForm = () => {
        // Restablece el estado del formulario al valor inicial proporcionado.
        setFormState(initialForm);
    }

    // Devuelve un objeto que incluye varias propiedades y funciones útiles.
    return {
        ...formState, // Proporciona acceso a las propiedades individuales del estado del formulario.
        formState,     // Proporciona acceso al estado completo del formulario.
        onInputChange, // Proporciona la función para manejar eventos de cambio en los campos.
        onResetForm    // Proporciona la función para restablecer el formulario.
    }
}